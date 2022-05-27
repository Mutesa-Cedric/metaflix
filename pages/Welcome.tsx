import Head from "next/head"
import Image from "next/image"
function Welcome() {
    return (
        <div>
            <Head>
                <title>Metaflix -  welcome to metaflix</title>
                <link rel="icon" href="/mlogo.png" />
            </Head>
            <main className="relative ">
                <div className="gradient-to-b from-gray-900/10 to-[#010511] h-screen top-0 left-0 -z-10 gradient-to-b  w-screen">
                    <Image src={'/banner.jpg'}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="w-full flex justify-between">
                        <Image src={'/logo.jpg'} layout='fill' objectFit="cover"/>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Welcome