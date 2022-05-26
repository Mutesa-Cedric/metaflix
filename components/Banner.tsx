import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../constants/movie';
import { Movie } from '../typings';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';
//interface for movie types
interface Props {
  netflixOriginals: Movie[]
}
//interface for movie types


function Banner({ netflixOriginals }: Props) {

  //setting a random movie to get its cover image

  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    const randomMovie = netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    setMovie(randomMovie)

    return () => {
      setMovie(null)
    }
  }, [netflixOriginals])

  //setting a random movie to get its cover image

  // console.log(movie);

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65ch lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 h-[95vh] w-full -z-10'>
        {/* banner image */}
        <Image
          layout='fill'
          objectFit='cover'
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} />
        {/* banner image */}
      </div>
      {/* description */}
      <h1 className='text-2xl lg:text-7xl md:text-4xl font-bold'>{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>{movie?.overview}</p>
      {/* description */}

      {/* buttons */}
      <div className='flex space-x-3'>
        <button className='flex items-center gap-x-2 rounded px-5 py-2 text-sm  font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black '><FaPlay className='h-4 w-4 text-black md:h-7 md:w-7'/>Play</button>
        <button className='flex items-center gap-x-2 rounded px-5 py-2 text-sm  font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-[gray]/70'>More Info <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/></button>
      </div>
      {/* buttons */}

    </div>

  )
}

export default Banner