import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-white sm:px-10 sm:pt-10 p-2 font-opensans">
        <div className="container grid sm:grid-cols-2 sm:gap-20 py-5 mx-auto">
          <div className='text-left'>
            {/* <h1 className='font-playfair text-xl text-green pr-2 col-span-2'>Get inspired</h1> */}
            <p className='font-opensans text-sm text-dark col-span-4 mb-4 sm:mb-0'>To receive updates about exclusive experiences, events, new destinations and more, please register your interest.</p>
          </div>

          <div className='text-right flex'>
            <input className='py-2 px-2 w-full bg-white border-solid border-green border-2 text-sm outline-none' type="email" placeholder='hello@gmail.com' />
            <button className='bg-green py-2 px-2 w-3/6 text-white font-playfair text-sm'>Sign Up</button>
          </div>
        </div>

        <hr className='text-lightdark my-10' />

        <div className="container text-center mx-auto">
          <div className='container text-center mx-auto'>
            <img src="/main_logo.png" alt="logo" className='w-1/4 sm:w-1/4 mx-auto' />
          </div>
          <h1 className='text-2xl sm:text-4xl font-playfair text-green py-2 font-medium'>STAY CONNECTED WITH US</h1>
          <p className='text-sm text-dark font-opensans'>9F, 799 Victoria Sports Tower, EDSA Southbound, Quezon City, 1103 Metro Manila</p>

          <div className='flex justify-center my-4 text-green'>
            <a href="/"><FaFacebookF className='text-xl mx-2' /></a>
            <a href="/"><FaInstagram className='text-2xl mx-2' /></a>
          </div>

          <div className="grid sm:grid-cols-3 sm:my-10">
            <div>
                <h1 className='font-playfair text-xl text-dark mb-2'>Contact information</h1>
                <p className='text-sm text-green font-semibold'>For inquiries and reservations:</p>
                <p className='text-sm text-dark'>+63 919 056 7788 or (632) 8860-5960</p>
                <p className='text-sm text-dark'>reservations@vshotel.com.ph</p>
                <p className='text-sm pt-2 text-green font-semibold'>For corporate, weddings, & social events:</p>
                <p className='text-sm text-dark'>events@vshotel.ph</p>
            </div>

            <div>
                <h1 className='font-playfair text-xl text-dark mb-2 mt-5 sm:mt-0'>About</h1>
                <p className='text-sm text-dark py-1'><a href="/">Stay</a></p>
                <p className='text-sm text-dark py-1'><a href="/">Dining</a></p>
                <p className='text-sm text-dark py-1'><a href="/">Convention Center</a></p>
                <p className='text-sm text-dark'><a href="/">VS Club</a></p>
            </div>

            <div>
                <h1 className='font-playfair text-xl text-dark mb-2 mt-5 sm:mt-0'>More from VS Hotel</h1>
                <p className='text-sm text-dark py-1'><a href="/">Las Casas Filipinas de Acuzar</a></p>
                <p className='text-sm text-dark py-1'><a href="/">Las Casas Quezon City</a></p>
                <p className='text-sm text-dark py-1'><a href="/">Victoria Sports Club</a></p>
                <p className='text-sm text-dark py-1'><a href="/">Victoria Skin</a></p>
                <p className='text-sm text-dark py-1'><a href="/">New San Jose Builders, Inc.</a></p>
            </div>
          </div>

          <hr className='text-lightdark my-10' />

          <div className="container mb-10">
            <p className='text-sm font-opensans text-dark font-opensans'>Copyright © 2023 VS Hotel. All Rights Reserved</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer