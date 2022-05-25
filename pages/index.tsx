import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className=" relative h-[149vh] bg-gradient-t-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Metaflix - Watch your favourite tv shows and movies online</title>
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <Header/>
      <main>
      <Banner/>
      </main>
      
    </div>
  )
}

export default Home
