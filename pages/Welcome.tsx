import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { GrFormNext } from "react-icons/gr"
import { IconContext } from "react-icons";
import { HiDownload } from "react-icons/hi";
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
                            width={700} height={420}
                            className="z-10" />
                        <video autoPlay loop style={{ width: '398px', height: '190px' }}
                            className="absolute top-[40px] left-10">
                            <source src="/video-tv-0819.m4v" />
                        </video>
                    </div>
                </div>
                {/* second section */}

                {/* third section */}
                <div className=" relative pl-28 pr-56 pb-24 pt-4  flex justify-between border-b-[8px] border-[#222] items-center">
                    <div className=" ">
                        <Image src={"/mobile-0819.jpg"} objectFit="cover"
                            width={550} height={400} />
                        <div className="absolute bottom-32 left-[13%] border-2 flex pl-4 py-3   pr-10  bg-black items-center border-[#222] rounded-xl">
                            <Image src={"/boxshot.png"} objectFit="cover" width={50} height={80} />
                            <p className="font-medium ml-4 pr-20 text-lg">Downloading...</p>
                            <HiDownload fontSize={24} />
                        </div>
                    </div>
                    <div className="w-3/5">
                        <h1 className="text-5xl pb-8 font-medium ">
                            Download your shows to watch offline.
                        </h1>
                        <p className="text-2xl pb-8 font-medium ">Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>
                {/* third section */}


                {/* fourth section */}

                <div className="px-52 py-10 flex justify-center flex-col border-b-[8px] border-[#222]">
                    <h1 className="text-5xl pb-8 font-medium ">Watch everywhere.</h1>
                    <p className="text-2xl pb-8 font-medium w-[45%]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>

                {/* fourth section */}

                {/* firth section */}

                <div className="px-52  flex  items-center py-16  border-b-[8px] border-[#222]">
                    <div className="">
                        <Image src={'/kids.png'} alt="kids" width={1000} height={700}/>
                    </div>
                    <div className="w-full flex items-end flex-col">
                        <h1 className="text-5xl pb-8 font-medium ">Create profiles for kids.</h1>
                        <p className="text-2xl font-medium w-4/5 itmes-start self-center ml-20" >Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>

                {/* firth section */}

            </main>
        </div>
    )
}

export default Welcome