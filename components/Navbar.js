import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants'

function Navbar() {
  return (
    <nav className='container-fluid w-full bg-white fixed z-30'>
        <div className="container mx-auto flex justify-between items-center py-3 px-7">
            <Link href="/">
                <Image src="/main_logo.png" alt='VS Logo' width={180} height={200}  />
            </Link>
            <ul className='hidden h-full gap-12 lg:flex text-sm text-dark'>
                {NAV_LINKS.map((link) => (
                    <Link className='flexCenter transition-all hover:text-yellow'
                        href={link.href} key={link.key}>
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter">
                <button className='bg-yellow py-2 px-5 text-white text-sm rounded-sm'>BOOK NOW</button>
            </div>

            {/* <div className='md:block sm:block hidden'>
                <button className='bg-yellow py-2 px-5 text-white text-sm rounded-sm'>BOOK NOW</button>
                <button className='bg-yellow py-2 px-5 text-dark text-2xl pl-2'><RxHamburgerMenu /></button>
            /div> */}
        </div>
    </nav>
  )
}

export default Navbar
