'use client';
import {React, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import { IoIosCall } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='fixed container-fluid w-full z-30 font-opensans'>

        {/* sidebar */}
        <aside className={`z-50 w-screen h-screen bg-green top-0 absolute text-white p-6 ${isOpen ? 'visible' : 'hidden'}`}>
            <button className="text-white" onClick={toggleSidebar}>
                {/* Your icon here */}
                <IoClose />
            </button>
            <h1 className="text-2xl font-semibold mb-4">Sidebar</h1>
            <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
                {/* Add more sidebar links as needed */}
            </ul>
        </aside>

        <div className='bg-green flex justify-between text-white py-1 sm:px-3 px-1'>
            <div>
                <p className='text-xs font-semibold'>For inquiries and reservation:</p>
            </div>

            <div className='flex justify-center text-xs font-semibold'>
                <p className='flex'><IoIosCall className='text-yellow text-lg' /> +63919-056-7788</p>
                <p className='flex sm:ml-5 ml-2'><GiRotaryPhone className='text-yellow text-lg mr-1' /> (632) 8860-5960</p>
            </div>
        </div>

        <nav className='bg-white'>

            {/* MENU ICON */}
            <button className='text-green sm:hidden block' onClick={toggleSidebar} ><HiMenuAlt2 className='text-3xl absolute left-2' /></button>

            <div className="container mx-auto sm:flex sm:justify-between items-center sm:py-3 py-2 px-7">
                
                <Link href="/">
                    <Image src="/main_logo.png" alt='VS Logo' className='mx-auto' width={180} height={200}  />
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
                    <button className='sm:block hidden bg-yellow py-2 px-5 text-white text-sm rounded-sm'><a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MzgzMA==&individual=true">BOOK NOW</a></button>
                </div>

                {/* <div className='md:block sm:block hidden'>
                    <button className='bg-yellow py-2 px-5 text-white text-sm rounded-sm'>BOOK NOW</button>
                    <button className='bg-yellow py-2 px-5 text-dark text-2xl pl-2'><RxHamburgerMenu /></button>
                /div> */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar
