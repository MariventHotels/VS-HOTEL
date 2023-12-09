'use client';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Coverpage() {
  return (
    <>
     <div className="container-fluid h-full relative mt-14 sm:mt-0">
      <Carousel
          autoPlay={true}
          showStatus={false}
          showArrows={false}
          interval={3000}
          stopOnHover={false}
          infiniteLoop={true}
          swipeable={false}
          animationHandler='fade'
          showThumbs={false}
          width dynamicHeight={true}
          showIndicators={false}
        >
          <div>
              <img src="/carousel/homepage/1.jpg" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/carousel/homepage/2.jpg" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/carousel/homepage/3.jpg" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/carousel/homepage/4.jpg" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/carousel/homepage/5.jpg" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/carousel/homepage/6.jpg" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>
        </Carousel>

      {/**TAGLINE */}
      <div className="container-fluid w-full mx-auto absolute bottom-3 sm:px-1 sm:bottom-10 text-center text-white">
        <h1 className='sm:text-5xl 2xl:text-7xl text-2xl mb-1 lg:mb-4 font-playfair'>WORK, PLAY, AND STAY IN ONE</h1>
        <p className='text-xs sm:text-base lg:text-lg mx-1'>Redefining travel by providing you with unlimited access to fitness classes, gym facilities, and sports facilities.</p>
      </div>
     </div>
    </>
  )
}

export default Coverpage