import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from '../hooks/useAuth';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginError from '../components/LoginError';

interface Inputs {
  email: string;
  password: string;
}

const Login: NextPage = () => {

  const [login, setLogin] = useState(false);
  const { signIn, signUp, loading,error } = useAuth();
  // console.log(loading);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Metaflix - Login</title>
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="/logo.png"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form id='signup-form'
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 pt-10 pb-4 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Log In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className={`input ${errors.email && 'border-b-2 border-orange-500'
                }`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className={`input ${errors.password && 'border-b-2 border-orange-500'
                }`}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        {
          !loading &&
          <button
            className="w-full rounded bg-[#E50914] py-3 font-semibold"
            type="submit"
            onClick={() => setLogin(true)}
          >
            Sign In
          </button>
        }

        {
          !loading &&
          <div className="text-[gray]">
            <span className="pl-2 mb-2"> New to Metflix?{' '}</span>
            <button
              className="cursor-pointer text-white bg-red-500 py-2 ml-2 rounded-md hover:underline w-full"
              type="submit"
              onClick={() => setLogin(false)}
            >
              Sign up now
            </button>
          </div>
        }

        {
          loading &&
          <div className="lds-dual-ring ml-32"></div>
        }
        <p className="italic text-gray-400/90 font-bold text-center text-[15px]">
          copyright &copy; 2022 <a href="https://github.com/mutesa-cedric"> Mutesa Cedric</a>
        </p>
      </form>
        {
          error && <LoginError error={error}/>
        }
    </div>
  )
}
export default Login;

