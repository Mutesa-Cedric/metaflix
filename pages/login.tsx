import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
const Login: NextPage = () => {

  const [login,setLogin] = useState(false);
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Head>
          <title>Netflix</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image
          src="https://rb.gy/p2hphi"
          layout="fill"
          className="-z-10 !hidden opacity-60 sm:!inline"
          objectFit="cover"
        />
        <img
          src="https://rb.gy/ulxxee"
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
        />
  
        <form id='signup-form'
          className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        >
          <h1 className="text-4xl font-semibold">Log In</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                type="email"
                placeholder="Email"
            
              />
            </label>
            <label className="inline-block w-full">
              <input
                type="password"
                placeholder='password'
              />
            </label>
          </div>
          <button
            className="w-full rounded bg-[#E50914] py-3 font-semibold"
            type="submit"
          >
            Sign In
          </button>
          <div className="text-[gray]">
            New to Metflix?{' '}
            <button
              className="cursor-pointer text-white hover:underline"
              type="submit"
            >
              Sign up now
            </button>
          </div>
        </form>
      </div>
    )
}
export default Login;

