'use client';
import { ROOM_VARIANTS } from '@/constants';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SingleRoom() {
  return (
    <>
      <div className="container-fluid h-full m-[120px]">
                <div className="container text-center mx-auto">
                    <div className="grid grid-cols-3">
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                        <h1 className='sm:text-3xl text-xl font-playfair text-green'>SINGLE ROOM</h1>
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                    </div>
                    <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm '>Comfortably relaxing, 21 square meters with queen-size bed.</p>
                </div>

                {/**SINLE ROOM CAROUSEL */}
                <div className="container h-2/3 mt-10 mx-auto">
                  <Carousel
                    autoPlay={true}
                    showStatus={false}
                    showArrows={false}
                    interval={2000}
                    stopOnHover={false}
                    infiniteLoop={true}
                    swipeable={false}
                    animationHandler='fade'
                    showThumbs={false}
                    width dynamicHeight={true}
                    showIndicators={true}
                  >
                    <div>
                        <img src="/test1.jpg" alt='test' className='h-full sm:h-2/3' />
                    </div>

                    <div>
                        <img src="/test2.jpg" alt='test' className='h-full sm:h-2/3' />
                    </div>

                    <div>
                        <img src="/test3.jpg" alt='test' className='h-full sm:h-2/3' />
                    </div>
                  </Carousel>
                </div>

                {/**ROOM HIGHLIGHTS */}
                <div className="container-fluid h-full sm:m-10 m-2 mt-10 mb-10">
                  <div className="container text-center mx-auto">
                      <div className="grid grid-cols-3">
                          <hr className='text-lightdark sm:mt-5 mt-4' />
                          <h1 className='sm:text-2xl text-xl font-playfair text-green'>ROOM HIGHLIGHTS</h1>
                          <hr className='text-lightdark sm:mt-5 mt-4' />
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="bg-green">
                          <ul>
                            {ROOM_VARIANTS.inclusionA.map((index) => (
                              <>
                                <li>{}</li>
                              </>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-yellow">

                        </div>

                      </div>
                  </div>


                </div>
        </div>
    </>
  )
}

export default SingleRoom