import React, { useState, useEffect } from 'react'
import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';
function Header() {
  const { logout,loading } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  // console.log(isScrolled)
  return (
    <header className={`fixed w-full z-50 ${isScrolled && 'bg-[#141414]'}`} style={loading ? {display:"none"}:{}} >
      <div className='flex w-full   items-center lg:pl-14 md:px-6 px-3 space-x-2 justify-between md:space-x-10'>
        <div className='flex space-x-10 items-center'>
          <img src='/logo.png' alt='Metaflix ' className=' w-32' />
          <ul className='hidden space-x-4 md:flex'>
            <li className='headerLink cursor-default font-semibold text-white hover:text-white'>Home </li>
            <li className='NavLinks'>Tv Shows</li>
            <li className='NavLinks'>Movies</li>
            <li className='NavLinks'>New & Popular</li>
            <li className='NavLinks'>My List</li>
          </ul>

        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
          <SearchIcon className='h-6 w-6 hidden sm:inline' />
          <p className='hidden sm:inline  text-lg font-semibold leading-4'>Kids</p>
          <BellIcon className='h-6 w-6' />
          {/* <Link href={'/account'}> */}
          <button onClick={logout}>
            <img src="https://rb.gy/g1pwyx" alt="" className='cursor-pointer rounded' />
          </button>
          {/* </Link> */}
        </div>
      </div>
    </header>
  )
}

export default Header