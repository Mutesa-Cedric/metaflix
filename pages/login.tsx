import React from 'react'

import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
const  Login:NextPage=()=> {
  return (
    <div className='relative flex flex-col md:items-center bg-black h-screen w-screen md:justify-center
    md:bg-tranparent'>
        <Head>
            <title>Metaflix - Login</title>
            <link rel="icon" href="/mlogo.png" />
        </Head>
        <main>
        <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
        </main>
    </div>
  )
}

export default Login