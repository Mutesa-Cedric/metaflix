import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFund() {
    return (
        <div>
            <Head>
                <title>Metaflix</title>
                <link rel="icon" href="/mlogo.png" />
            </Head>
            <header className='w-full bg-black py-3 pl-8'>
                <Link href={'/Welcome'}>
                    <img src="logo.png" alt="logo" className='w-32 h-14' />
                </Link>
            </header>
            <main className='bg-no-repeat bg-center bg-cover w-screen h-[89vh] relative' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.2)), url(/bg-lost-in-space.png)` }}>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="md:text-7xl text-3xl font-bold mb-6 mx-auto">Lost your way?</h1>
                    <p className="md:text-3xl text-xl w-3/5 text-center my-4 font-[400]">Sorry, we can't find that page.You'll find lots to explore on home page.</p>
                    <Link href={"/Welcome"}>
                        <button className="text-black bg-white md:px-8 px-4 md:py-2 py-1 my-5 rounded-md text-[18px] font-medium">
                            Metaflix Home
                        </button>
                    </Link>
                    <div className="flex items-center ">
                        <span className="border-l-2 border-[#e50914] py-6 w-0">m</span>
                        <div className="ml-6">
                            <span className="pr-4  md:text-3xl text-xl  font-[100]">Error Code</span>
                            <span className="font-medium md:text-2xl text-lg">MSES-4040</span>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 right-16 text-xl md:flex hidden uppercase">
                    <span className="text-gray-400 font-bold  px-2">From</span>
                     <span className="text-gray-200">Lost In Space</span>
                </div>
            </main>
        </div>
    )
}

export default NotFund