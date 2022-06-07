import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { GrFormNext } from "react-icons/gr"
import { IconContext } from "react-icons";
function Welcome() {
    return (
        <div>
            <Head>
                <title>Metaflix -  Welcome To Metaflix</title>
                <link rel="icon" href="/mlogo.png" />
            </Head>
            <main className="relative bg-black">
                <div className=" bg-cover  bg-no-repeat h-[98vh] w-screen border-b-[8px] border-[#222]"
                    style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,.9) 0,rgba(0,0,0,.2) 60%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.8) 100%),url(/banner.jpg)` }}>
                    <div className="flex justify-between items-center px-12">
                        <Image src={'/logo.png'} width={200} height={100} />
                        <Link href={'/login'}>
                            <button className="px-5 py-[6px] font-[400] leading-normal bg-[#e50914] text-center text-white rounded-[5px]">
                                Sign In
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col w-[50%] mx-auto items-center justify-center md:mt-32">
                        <h1 className="mb-6 text-[64px] text-center px-18 leading-[1em] font-medium">Unlimited movies, TV shows, and more.</h1>
                        <p className="text-3xl mb-8">watch anywhere. cancel anytime.</p>
                        <p className="text-xl mb-6">Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="w-full flex">
                            <input type="text" placeholder="Email Address" className="h-[70px] w-full px-4 placeholder:text-lg rounded-l-sm" />
                            <button className="w-[45%] text-3xl bg-[#e50914] font-medium rounded-r-sm flex items-center justify-evenly"><span>Get Started</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* second section */}
                <div className="px-52 flex justify-between border-b-[8px] border-[#222] py-24 items-center">
                    <div className="">
                        <h1 className="text-5xl pb-8 font-medium">Enjoy on your TV.</h1>
                        <p className="text-2xl flex w-3/4">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="relative">
                        <Image src={'/tv.png'} objectFit="cover"
                            width={700} height={420} />
                        <video autoPlay loop style={{ width: '398px', height: '190px' }} className="absolute top-[40px] left-10">
                            <source src="/video-tv-0819.m4v" />
                        </video>
                    </div>
                </div>
                {/* second section */}
                {/* third section */}

                
                {/* third section */}
            </main>
        </div>
    )
}

export default Welcome