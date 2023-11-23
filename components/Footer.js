import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="container mx-auto bg-yellow grid grid-cols-3">
          <h1 className='text-center'>Get inspired</h1>
          <p className='text-left'>To receive updates about exclusive experiences, events, new destinations and more, please register your interest</p>
          <div>
            <input type="email" placeholder='hello@gmail.com' />
            <button>Sign Up</button>
          </div>
          <hr />
        </div>

        <div className="container">
          <img src="/main_logo.png" alt="" />
          <h1>STAY CONNECTED WITH US</h1>
          <p>9F, 799 Victoria Sports Tower, EDSA Southbound, Quezon City, 1103 Metro Manila</p>

          <div className='grid grid-cols-3'>
            <FaFacebookF />
            <GrTwitter />
            <FaInstagram />
          </div>

          <div className="grid grid-cols-3">
            <div>
                <h1>Contact information</h1>
                <p>For inquiries and reservations:</p>
                <p>+63 919 056 7788 or (632) 8860-5960</p>
                <p>reservations@vshotel.com.ph</p>
                <p>For corporate, weddings, & social events:</p>
                <p>events@vshotel.ph</p>
            </div>

            <div>
                <h1>About</h1>
                <p><a href="/">Stay</a></p>
                <p><a href="/">Dining</a></p>
                <p><a href="/">Convention Center</a></p>
                <p><a href="/">VS Club</a></p>
            </div>

            <div>
                <h1>More from VS Hotel</h1>
                <p><a href="/">Las Casas Filipinas de Acuzar</a></p>
                <p><a href="/">Las Casas Quezon City</a></p>
                <p><a href="/">Victoria Sports Club</a></p>
                <p><a href="/">Victoria Skin</a></p>
                <p><a href="/">New San Jose Builders, Inc.</a></p>
            </div>
          </div>

          <hr />

          <div className="container">
            <p>Copyright © 2023 VS Hotel. All Rights Reserved</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer