import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-white sm:px-10 sm:pt-10 p-2 font-opensans">
        <div className="container grid lg:grid-cols-2 lg:gap-20 gap-4 py-5 mx-auto">
          <div className='text-left'>
            {/* <h1 className='font-playfair text-xl text-green pr-2 col-span-2'>Get inspired</h1> */}
            <p className='font-opensans text-sm text-dark lg:col-span-4 mb-4 sm:mb-0'>To receive updates about exclusive experiences, events, new destinations and more, please register your interest.</p>
          </div>

          <div>
            <form action="https://lascasasfilipinas.us1.list-manage.com/subscribe/post?u=2dc85a100274ce1d29cb7076c&amp;id=81f43e7f29" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="" className='text-right flex bg-slate-800'>
              <input type="email" name="EMAIL" id="mce-EMAIL" placeholder='hello@gmail.com' required className='py-2 px-2 w-3/4 bg-white border-solid border-green border-2 text-sm outline-none' />
              <input type="submit" value="Sign Up" id="mc-embedded-subscribe" className='bg-green py-2 px-2 cursor-pointer w-1/4 text-white font-playfair text-sm  border-green border-2' />
            </form>
          </div>
        </div>

        <hr className='text-lightdark my-10' />

        <div className="container text-center mx-auto">
          <div className='container text-center mx-auto'>
            <img src="/main_logo.png" alt="logo" className='w-2/4 lg:w-1/4 mx-auto' />
          </div>
          <h1 className='text-2xl sm:text-4xl font-playfair text-green py-2 font-medium'>STAY CONNECTED WITH US</h1>
          <p className='text-sm text-dark font-opensans'>9F, 799 Victoria Sports Tower, EDSA Southbound, Quezon City, 1103 Metro Manila</p>

          <div className='flex justify-center my-4 text-green'>
            <a href="https://www.facebook.com/vshotelph?mibextid=9R9pXO" target='_blank' ><FaFacebookF className='text-xl mx-2' /></a>
            <a href="https://www.instagram.com/vshotelph?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' ><FaInstagram className='text-2xl mx-2' /></a>
          </div>

          <div className="grid sm:grid-cols-3 sm:my-10">
            <div>
                <h1 className='font-playfair text-xl text-dark mb-2'>Contact information</h1>
                <p className='text-sm text-green font-semibold'>For inquiries and reservations:</p>
                <p className='text-sm text-dark'>+63 919 056 7788 or (632) 8860-5960</p>
                <p className='text-sm text-dark'>reservations@vshotel.ph</p>
                <p className='text-sm pt-2 text-green font-semibold'>For corporate, weddings, & social events:</p>
                <p className='text-sm text-dark'>events@vshotel.com.ph</p>
            </div>

            <div>
                <h1 className='font-playfair text-xl text-dark mb-2 mt-5 sm:mt-0'>About</h1>
                <p className='text-sm text-dark py-1'><a href="/stay">Stay</a></p>
                <p className='text-sm text-dark py-1'><a href="/dining">Dining</a></p>
                <p className='text-sm text-dark py-1'><a href="/conventioncenter">Convention Center</a></p>
                <p className='text-sm text-dark'><a href="https://victoriasportsclub.com/">VS Club</a></p>
            </div>

            <div>
                <h1 className='font-playfair text-xl text-dark mb-2 mt-5 sm:mt-0'>More from VS Hotel</h1>
                <p className='text-sm text-dark py-1'><a href="https://www.lascasasfilipinas.com/">Las Casas Filipinas de Acuzar</a></p>
                <p className='text-sm text-dark py-1'><a href="https://www.lascasasqc.com/">Las Casas Quezon City</a></p>
                <p className='text-sm text-dark py-1'><a href="https://victoriasportsclub.com/">Victoria Sports Club</a></p>
                <p className='text-sm text-dark py-1'><a href="https://www.facebook.com/victoriaskinofficial/">Victoria Skin</a></p>
                <p className='text-sm text-dark py-1'><a href="https://www.nsjbi.com.ph/">New San Jose Builders, Inc.</a></p>
            </div>
          </div>

          <hr className='text-lightdark my-10' />

          <div className="container sm:mb-10 mb-20">
            <p className='text-sm font-opensans text-dark'>Copyright © 2023 VS Hotel. All Rights Reserved</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer