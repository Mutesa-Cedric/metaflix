import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { GrFormNext } from "react-icons/gr"
import { IconContext } from "react-icons";
import { HiDownload } from "react-icons/hi";
import { questions } from "../constants/Questions";
import Question from "../components/Question";
function Welcome() {
    return (
        <div>
            <Head>
                <title>Metaflix -  Welcome To Metaflix</title>
                <link rel="icon" href="/mlogo.png" />
            </Head>
            <main className="relative bg-black overflow-x-hidden">
                <div className=" bg-cover  bg-no-repeat lg:h-[98vh] md:h-[85vh] h-[70vh] w-screen border-b-[8px] border-[#222]"
                    style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,.9) 0,rgba(0,0,0,.2) 60%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.8) 100%),url(/banner.jpg)` }}>
                    <div className="flex justify-between items-center lg:px-12 md:px-8 px-4">
                        <img src={'/logo.png'}  className="lg:w-[200px] lg:h-[100px] w-[120px] h-[70px]" />
                        <Link href={'/login'}>
                            <button className="lg:px-5 md:px-4 px-3 lg:py-[6px] py-1 font-[400] leading-normal bg-[#e50914] text-center text-white rounded-[5px]">
                                Sign In
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col lg:w-[50%] md:w-4/5 w-[90%] mx-auto items-center justify-center md:mt-32 mt-12">
                        <h1 className="mb-6 lg:text-[64px] text-3xl  text-center lg:px-18 px-6 leading-[1em] md:font-medium font-bold" >Unlimited movies, TV shows, and more.</h1>
                        <p className="lg:text-3xl md:text-2xl text-xl mb-8">watch anywhere. cancel anytime.</p>
                        <p className="text-xl lg:text-start text-center mb-6">Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="w-full flex md:flex-row flex-col items-center">
                            <input type="text" placeholder="Email Address" className="lg:h-[70px] md:h-[60px] h-[45px] w-full px-4 placeholder:text-lg rounded-l-sm" />
                            <button className="md:w-[45%] w-[180px] lg:text-3xl md:text-2xl lg:h-[70px] md:h-[60px] h-[45px] text-xl bg-[#e50914] font-normal rounded-r-sm mt-4 md:mt-0 flex items-center justify-evenly"><span>Get Started</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-8 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* second section */}
                <div className="lg:px-52 md:px-32 px-4 flex justify-between md:flex-row flex-col border-b-[8px] border-[#222] lg:py-24 md:py-16 py-10 items-center">
                    <div className="">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl lg:pb-8 md:pb-6 pb-4 font-medium md:text-left text-center">Enjoy on your TV.</h1>
                        <p className="md:text-2xl text-xl flex lg:w-3/4 w-full lg:text-left text-center">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="relative">
                        <Image src={'/tv.png'} objectFit="cover"
                            width={700} height={420}
                            className="z-10" />
                        <video
                            className="absolute top-[40px] left-[13%] w-[73%] h-[69%]" autoPlay loop  >
                            <source src="/video-tv-0819.m4v" />
                        </video>
                    </div>
                </div>
                {/* second section */}


                {/* third section */}
                <div className=" relative lg:pl-28 md:pl-4 pl-auto lg:pr-56 md:pr-24 pr-auto pb-24 pt-4  flex md:flex-row flex-col-reverse justify-between border-b-[8px] border-[#222] items-center">
                    <div className=" ">
                        <Image src={"/mobile-0819.jpg"} objectFit="cover"
                            width={550} height={400} />
                        <div className="absolute lg:bottom-32 bottom-28 shadow-sm lg:left-[13%] left-[16%] border-2 flex pl-4 py-3   md:pr-10 pr-6  bg-black items-center border-[#222] rounded-xl">
                            <img src={"/boxshot.png"}   className="md:w-[50px] md:h-[80px] w-10 h-12" />
                            <p className="font-medium ml-4 lg:pr-20 md:pr-10 pr-4 md:text-lg">Downloading...</p>
                            <HiDownload fontSize={24} />
                        </div>
                    </div>
                    <div className="lg:w-3/5  md:w-4/5 w-full">
                        <h1 className="lg:text-5xl md:text-3xl text-2xl md:text-left text-center lg:pb-8 md:pb-6 pb-4 font-medium ">
                            Download your shows to watch offline.
                        </h1>
                        <p className="lg:text-2xl text-xl md:text-left text-center lg:pb-8 md:pb-6 px-4 font-medium ">Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>
                {/* third section */}


                {/* fourth section */}

                <div className="lg:px-52 py-10 md:px-32 px-4 flex justify-center md:items-start items-center flex-col border-b-[8px] border-[#222]">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl pb-8 font-medium ">Watch everywhere.</h1>
                    <p className="md:text-2xl text-xl pb-8 font-medium lg:w-[45%] md:w-[70%] w-full md:text-left text-center">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>

                {/* fourth section */}

                {/* firth section */}

                <div className="lg:px-52 md:px-32 px-4 flex md:flex-nowrap flex-wrap md:flex-row flex-col-reverse items-center py-16  border-b-[8px] border-[#222]">
                    <div className="">
                        <Image src={'/kids.png'} alt="kids" width={1000} height={700} />
                    </div>
                    <div className="w-full flex lg:items-end items-center flex-col">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl md:text-start text-center pb-8 font-medium ">Create profiles for kids.</h1>
                        <p className="lg:text-2xl text-xl  font-medium w-4/5 md:text-left text-center self-center md:ml-16" >Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>

                {/* firth section */}

                {/* frequently asked questions */}

                <div className="flex items-center flex-col xl:px-[350px] lg:px-[200px] md:px-30 px-8  justify-center py-20 border-b-8 border-[#222]">
                    <div className="w-full text-center mb-4">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl pb-12 font-medium">
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <div className=" w-full">
                        {questions.map(question => {
                            return <Question key={question.id} {...question} />
                        })}
                    </div>
                    <div className="md:w-4/5 flex flex-col items-center justify-center pt-10">
                        <p className="md:text-xl text-lg pb-4  lg:text-left text-center font-normal">Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="w-full flex md:flex-row flex-col items-center">
                            <input type="text" placeholder="Email Address" className="lg:h-[70px] md:h-[60px] h-[50px] w-full px-4 placeholder:text-lg rounded-l-sm" />
                            <button className="md:w-[45%] w-[150px] lg:text-3xl md:text-2xl lg:h-[70px] md:h-[60px] h-[50px] text-xl bg-[#e50914] font-normal rounded-r-sm mt-6 md:mt-0 flex items-center justify-evenly"><span>Get Started</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-8 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* frequently asked questions */}

                {/* footer */}
                <footer className="lg:px-60 xl:px-80 px-20 flex flex-col justify-between pt-12 pb-2 text-[#757575] ">
                    <Link href="/contact">
                        <div className="cursor-pointer">
                            <p>Questions? Contact us.</p>
                        </div>
                    </Link>

                    <div id="footer-items" className=" flex flex-wrap w-full justify-between mt-5 mb-6 md:text-[14px] text-[12px]">
                        <div className="md:mb-0 mb-4">
                            <p className="py-2">FAQ</p>
                            <p className="py-2">Investor Relations</p>
                            <p className="py-2">Privacy</p>
                            <p className="py-2">Speed Test</p>
                        </div>
                        <div className="md:mb-0 mb-4">
                            <p className="py-2">Help Center</p>
                            <p className="py-2">Jobs</p>
                            <p className="py-2">Cookie Preferences</p>
                            <p className="py-2">Legal Notices</p>
                        </div>
                        <div className="md:mb-0 mb-16">
                            <p className="py-2">Account</p>
                            <p className="py-2">Ways to Watch</p>
                            <p className="py-2">Corporate Information</p>
                            <p className="py-2">Only on Netflix</p>
                        </div>
                        <div className="md:w-auto w-[100px]">
                            <p className="py-2">Media Center</p>
                            <p className="py-2">Terms of Use</p>
                            <p className="py-2">Contact Us</p>
                        </div>
                    </div>
                    <div>
                        <p>Metaflix Rwanda</p>
                    </div>
                    <div className="w-full md:text-center md:mt-4 mt-8">
                        <p className="italic text-[14px]">© 2022 Mutesa Cedric</p>
                    </div>
                </footer>

                {/* footer */}

            </main>
        </div>
    )
}

export default Welcome