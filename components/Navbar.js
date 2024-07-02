'use client';
import {React, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import { IoIosCall } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {useSpring, animated} from 'react-spring';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    {/**SIDEBAR ANIMATION */}
    const sidebarAnimation = useSpring({
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        config: { duration: 300 }, // Adjust the duration as needed
      });

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='fixed container-fluid w-full z-30 font-opensans'>

        {/* sidebar */}
        <animated.aside className={`z-50 w-screen h-screen bg-gray top-0 absolute text-green p-6 ${isOpen ? 'visible' : 'hidden'}`}
            style={sidebarAnimation}
        >
            <div className="container-fluid mb-10">
                <button className="text-green text-right float-right" onClick={toggleSidebar}>
                    <IoClose className='text-3xl' />
                </button>
            </div>

            <ul className='text-green'>
                <li className="mb-2 py-4"><a href="/">Home</a></li>
                <li className="mb-2 py-4"><a href="/stay">Stay</a></li>
                <li className="mb-2 py-4"><a href="/dining">Dining</a></li>
                <li className="mb-2 py-4"><a href="/conventioncenter">Convention Center</a></li>
                <li className="mb-2 py-4"><a href="/vsbar">VS Bar</a></li>
                <li className="mb-2 py-4"><a href="https://victoriasportsclub.com/">VS Club</a></li>
                {/* <li className="mb-2 py-4"><a href="/specialoffers">Special Offers</a></li> */}
            </ul>
        </animated.aside>

        <div className='bg-green flex justify-between text-white py-1 sm:px-3 px-1'>
            <div>
                <p className='text-[0.6rem] sm:text-xs font-semibold'>For inquiries & reservation:</p>
            </div>

            <div className='flex justify-center text-xs font-semibold'>
                <p className='flex text-[0.6rem] sm:text-xs'><IoIosCall className='text-yellow text-sm sm:text-lg' /> +63919-056-7788</p>
                <p className='flex sm:ml-5 ml-2 text-[0.6rem] sm:text-xs'><GiRotaryPhone className='text-yellow text-sm sm:text-lg mr-1' /> (632) 8860-5960</p>
            </div>
        </div>

        <nav className='bg-white'>
            {/* MENU ICON */}
            <button className='text-green sm:hidden block' onClick={toggleSidebar} ><HiMenuAlt2 className='text-3xl absolute top-9 left-2' /></button>

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
                    <button
                        className="cursor-pointer
                                   bg-yellow
                                   px-3 py-2
                                   rounded-md
                                   text-white
                                   tracking-wider
                                   shadow-xl
                                   animate-bounce
                                   hover:animate-none
                                   sm:block
                                   hidden"
                        >
                            <p className='text-sm'><a href="https://www.swiftbook.io/inst/#home?propertyId=363MjIpd9DKOxXNT5Koe1JFI0MzQ=&JDRN=Y">BOOK NOW</a></p>
                            
                            <path
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            ></path>
                    </button>
                    {/* <button className='sm:block hidden bg-yellow py-2 px-5 text-white
                    text-sm rounded-sm'><a href="https://staahmax.staah.net/be/indexpackde
                    tail?propertyId=MzgzMA==&individual=true">BOOK NOW</a></button> */}
                </div>

                {/* <div className='md:block sm:block hidden'>
                    <button className='bg-yellow py-2 px-5 text-white text-sm rounded-sm'>BOOK NOW</button>
                    <button className='bg-yellow py-2 px-5 text-dark text-2xl pl-2'><RxHamburgerMenu /></button>
                /div> */}

            </div>
        </nav>

        <div className="fixed left-0 right-0 bottom-0 bg-green lg:hidden">
            <a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MzgzMA==&individual=true"><button className='w-full bg-green py-3 px-5 text-white text-lg'>BOOK NOW</button></a>
        </div>
    </div>
  )
}

export default Navbar
