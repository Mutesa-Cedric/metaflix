import React, { useState ,useEffect} from 'react'
import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import Link from 'next/link';
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY>0){
          setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`} >
      <div className='space-x-2 flex fixed w-full items-center justify-between'>
        <div className='flex space-x-10'>
          <img src='/logo.png' alt='Metaflix ' className=' w-36' />

          <ul className=' sm:hidden   lg:flex items-center  justify-between'>
            <li className='NavLinks'>Home </li>
            <li className='NavLinks'>Tv Shows</li>
            <li className='NavLinks'>Movies</li>
            <li className='NavLinks'>New & Popular</li>
            <li className='NavLinks'>My List</li>
          </ul>

        </div>

        <div className='flex space-x-4'>
          <SearchIcon className='h-6 w-6' />
          <p className='hidden lg-inline'>Kids</p>
          <BellIcon className='h-6 w-6' />
          <Link href={'/account'}>
            <img src="https://rb.gy/g1pwyx" alt="" className='cursor-pointer rounded'/>
          </Link>
        </div>
      </div>

    </header>
  )
}

export default Header