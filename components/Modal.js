'use client';
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AdsModal() {

  const [showModal, setShowModal] = useState(true);

  return (
    <>
     {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
          >
            <div className="relative w-auto mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full my-10 outline-none focus:outline-none px-2 sm:px-0">
                {/*header*/}
                <div className="relative top-10 z-50 px-2 text-right ">
                    <button
                      className="text-white"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <IoCloseSharp className='text-3xl' />
                    </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto bg-">
                  <Carousel
                    autoPlay={true}
                    showStatus={false}
                    showArrows={true}
                    interval={5000}
                    stopOnHover={false}
                    infiniteLoop={true}
                    swipeable={false}
                    animationHandler='fade'
                    showThumbs={false}
                    width dynamicHeight={true}
                    showIndicators={false}
                  >
                    <div>
                      <img src="/ads/VS Hotel NYE 2023 socmed1.jpg" alt="" />
                    </div>

                    <div>
                      <img src="/ads/VS Hotel NYE 2023 socmed2.jpg" alt="" />
                    </div>
                  </Carousel>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default AdsModal