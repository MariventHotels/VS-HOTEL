'use client';
import { PREMIUM_QUEEN } from '@/constants';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PremiumQueen() {
  return (
    <>
        <div className="container-fluid h-full sm:m-[120px] my-24 mx-2 ">
            <div className="container text-center mx-auto">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-xl font-playfair text-green'>PREMIUM QUEEN ROOM</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm '> Upgrade to King Room for a chic staycation. Unwind, curl up in a generous bed or revel in the modern bathroom with separate shower and bathtub. Perfect for families travelling together, and for long-stay leisure or business travelers. </p>
            </div>

            {/**SINGLE ROOM CAROUSEL */}
            <div className="container h-2/3 sm:mt-10 mt-4 mx-auto">
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
            <div className="container-fluid h-full mt-12 mb-10">
              <div className="container text-center mx-auto">
                  <div className="grid grid-cols-3">
                      <hr className='text-lightdark sm:mt-5 mt-4' />
                      <h1 className='sm:text-2xl text-xl font-playfair text-green'>ROOM HIGHLIGHTS</h1>
                      <hr className='text-lightdark sm:mt-5 mt-4' />
                  </div>

                  <div className="grid sm:grid-cols-2 mx-10">
                    <div className="my-10">
                        {PREMIUM_QUEEN.map((index) => (
                            <div>{index.inclusionA.map((indexb) => (
                              <>
                                <ul className='text-left font-opensans text-base text-dark'>
                                  <li className='mb-2 text-sm'>• {indexb.list}</li>
                                </ul>
                              </>
                            ))}
                            </div>
                        ))}

                        <p className='text-left mt-4 font-opensans text-sm italic text-green'>* Each bathtub may vary depending on the room interior design.</p>
                    </div>

                        <div className="sm:my-10 mb-10">
                          {PREMIUM_QUEEN.map((index) => (
                                <div>{index.inclusionB.map((index) => (
                                  <>
                                    <div className="grid grid-cols-2">
                                      <div className=''>
                                          <img className='w-8 h-9 sm:float-right mt-2 mr-5' src={index.image} alt="" />
                                      </div>
                                      <div className='text-left mb-2 text-dark'>
                                        <h1 className='font-playfair font-medium'>{index.label}</h1>
                                        <p className='font-opensans text-sm mt-1'>{index.subtext}</p>
                                      </div>
                                    </div>
                                  </>
                                ))}
                                </div>
                            ))}
                        </div>

                      </div>

                      <div className="grid grid-cols-3">
                          <hr className='text-lightdark sm:mt-5 mt-4' />
                          <h1 className='sm:text-2xl text-xl font-playfair text-green'>ACCESS TO</h1>
                          <hr className='text-lightdark sm:mt-5 mt-4' />
                      </div>

                      <div className='grid grid-cols-3 gap-5 mx-10 mt-14'>
                          {PREMIUM_QUEEN.map((index) => (
                            <>
                              {index.inclusionC.map((index) => (
                                <>
                                  <div className="flex justify-center text-center">
                                    <img className='w-16 h-12 mx-5' src={index.image} alt="" />
                                    <p className='mt-3 font-opensans text-dark text-lg'>{index.name}</p>
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                      </div>
                  </div>
                </div>
            </div>
    </>
  )
}

export default PremiumQueen