import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { Movie } from '../typings'
import requests from '../utils/requests'
import Row from '../components/Row'
import { useRecoilState, useRecoilValue, } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom'
import Modal from '../components/Modal'
import useAuth from '../hooks/useAuth'


//interface for props types

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

//interface for props types

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries

}: Props) => {
  // console.log(netflixOriginals)

  const loadingStyles={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const showModal = useRecoilValue(modalState);
  const movie = useRecoilValue(movieState);
  const {loading}=useAuth()
  return (
    <div className=" relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]" style={loading ? loadingStyles:{}} >
      <Head>
        <title>Metaflix - Watch your favourite tv shows and movies online</title>
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16' style={{display:`${loading?"none":""}`,}}>
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          {/* {list.length > 0 && <Raw title="My List" movies={list} />} */}

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* movie modal */}
      {showModal && <Modal />}
      {/* movie modal */}
      {loading&&<div className="lds-dual-ring"></div>}
    </div>
  )
}

export default Home

//server side rendering 

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
  }
}
