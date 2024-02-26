'use client';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BistroCarousel() {
  return (
    <div className="container h-full relative mt-5 mx-auto">
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
              <img src="/bistro/sneakpeek/sp1.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/bistro/sneakpeek/sp2.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
            <img src="/bistro/sneakpeek/sp3.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/bistro/sneakpeek/sp4.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
            <img src="/bistro/sneakpeek/sp5.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/bistro/sneakpeek/sp6.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
            <img src="/bistro/sneakpeek/sp7.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/bistro/sneakpeek/sp8.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
            <img src="/bistro/sneakpeek/sp9.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>

          <div>
              <img src="/bistro/sneakpeek/sp10.JPG" alt='test' className='h-full sm:[h-3/6] lg:h-screen' />
          </div>
        </Carousel>
     </div>
  )
}

export default BistroCarousel