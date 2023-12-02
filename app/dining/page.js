'use client';
import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function DiningPage() {
  return (
    <>
        <div className="container-fluid h-full sm:m-[120px] m-2 mb-10 mt-24">
            <div className="container text-center mx-auto">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-xl font-playfair text-green'>HOTEL DINING</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm '>Our dining venues are synonymous with living well and quality dining experience. Flavorful, freshly prepared choices take center stage for your dining enjoyment. Mingle while watching live streaming of your favorite sports in our Bistro Bar. </p>
                <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm '>A variety of booster meals for the health conscious and with dietary restrictions are available at the Health Bar. Take delight in a stylish Al fresco cafe, serving contemporary farm to table salad, mocktails and cocktails. </p>
            </div>

            {/**CAROUSEL */}
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

            {/*MENU*/}
            <div className="container text-center mx-auto sm:mt-14">
              <div className="grid grid-cols-3 mb-10 mt-5">
                  <hr className='text-lightdark sm:mt-5 mt-4' />
                  <h1 className='sm:text-2xl text-xl font-playfair text-green'>MENU</h1>
                  <hr className='text-lightdark sm:mt-5 mt-4' />
              </div>

              <div className="grid sm:grid-cols-2 gap-10 sm:mx-24">
                  <img src="/menu/menuA.jpg" alt="menu" />
                  <img src="/menu/menuB.jpg" alt="menu" />
              </div>

              <div className="container mt-10">
                <button className='bg-green py-2 px-5 text-white text-sm rounded-sm font-opensans'>DOWNLOAD MENU</button>
              </div>
            </div>

            {/**GASTRO BAR */}

            <div className="container text-center mx-auto sm:mt-14 mt-10">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-2xl text-xl font-playfair text-green'>HOTEL DINING</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>

                {/**CAROUSEL */}
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
            </div>
        </div>
    </>
  )
}

export default DiningPage