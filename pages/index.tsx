import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { Movie } from '../typings'
import requests from '../utils/requests'
import Row from '../components/Row'
import { useRecoilState, useRecoilValue, } from 'recoil';
import { modalState, movieState, notAvailableModalState } from '../atoms/modalAtom'
import Modal from '../components/Modal'
import useAuth from '../hooks/useAuth'
import NotAvailable from '../components/NotAvailable'


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

  const loadingStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const showModal = useRecoilValue(modalState);
  const showNotAvailableModal = useRecoilValue(notAvailableModalState);
  const movie = useRecoilValue(movieState);
  const { loading } = useAuth()
  return (
    <div className=" relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]" style={loading ? loadingStyles : {}} >
      <Head>
        <title>Metaflix - Watch your favourite tv shows and movies online</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Metaflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of movies" />
        <meta property="og:url" content="metaflix.vercel.app" key="ogurl" />
        <meta property="og:image" content="/banner.jpg" key="ogimage" />
        <meta property="og:site_name" content="metaflix" key="ogsitename" />
        <meta property="og:title" content="metaflix" key="ogtitle" />
        <meta property="og:description" content="Metaflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of movies" key="ogdesc" />
        <meta name="keywords" content="Mutesa cedric, watch movies, movie website,metaflix,Metaflix,Movies Rwanda,mutesa,cedric" />
      </Head>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16' style={{ display: `${loading ? "none" : ""}` }}>
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
      {!loading &&
        <footer className='w-full flex items-center justify-center'>
          <p className=" pb-4 italic text-gray-400 font-bold">
            copyright &copy; 2022 <a href="https://github.com/mutesa-cedric"> Mutesa Cedric</a>
          </p>
        </footer>
      }
      {showNotAvailableModal && <NotAvailable />}
      {/* movie modal */}
      {showModal && <Modal />}
      {/* movie modal */}
      {loading && <div className="lds-dual-ring"></div>}
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
