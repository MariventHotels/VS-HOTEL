'use client';
import React from 'react';
import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Coverpage() {
  return (
    <>
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
      >
        <div>
            <Image src="/test1.jpg" alt='test' width={1000} height={100} />
        </div>

        <div>
            <Image src="/test2.jpg" alt='test' width={1000} height={100} />
        </div>

        <div>
            <Image src="/test3.jpg" alt='test' width={1000} height={100} />
        </div>
      </Carousel>

      {/**TAGLINE */}
      <div className="container-fluid w-full mx-auto absolute bottom-10 text-center text-white">
        <h1 className='text-5xl mb-4'>WORK, PLAY, AND STAY IN ONE</h1>
        <p className=''>Redefining travel by providing you with unlimited access to fitness classes, gym facilities, and sports facilities.</p>
      </div>
    </>
  )
}

export default Coverpage