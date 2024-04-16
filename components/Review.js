import { REVIEW_CONTENT } from '@/constants'
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

function Review() {
  return (
    <>
        <div className="container-fluid sm:px-10 sm:pt-10 p-2 font-opensans pb-10 bg-green" id='#review'>
            <div className="container text-center mx-auto">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-lg font-playfair text-white'>GUEST REVIEWS</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='pt-3 pb-3 text-white font-opensans lg:w-3/4 mx-auto text-sm '>
                    Immerse yourself in a world of travel tales, where each review paints a vivid
                    picture of the hotel's ambiance, service, amenities, and everything in between.
                    Explore firsthand hotel experiences from cozy
                    beds to top-notch service, our community shares honest insights to guide
                    your next stay. Join us and find your perfect hotel match today!
                </p>
               {/**<a href="https://victoriasportsclub.com/"><button className='bg-white pl-5 pr-5 pt-2 pb-2 text-green font-semibold mt-2 font-opensans text-[0.7rem] sm:text-xs rounded-sm custom-btn'>LEAVE YOUR FEEDBACK HERE</button></a> */}
            </div>

            <div class="container-fluid sm:container mt-5 mx-auto flex flex-wrap flex-row">
                {REVIEW_CONTENT.map((index) => (
                   <>
                        <div class="sm:basis-1/3 basis-full p-3">
                            <div class="bg-white p-5 shadow-2xl rounded-tl-3xl rounded-br-3xl">
                                <FaQuoteLeft className='text-3xl text-[#8AA4]'/>
                                <p class="font-playfair text-green font-medium text-xl py-2">{index.review_title}</p>
                                <p class='text-sm font-opensans text-dark'>{index.review_body}</p>
                                <p class="font-opensans mt-5 text-green font-medium text-sm">{index.review_name}</p>
                                <p class="font-opensans text-dark text-sm">{index.review_date}</p>
                            </div>
                        </div>
                   </>
                ))}
            </div>
        </div>


    </>
  )
}

export default Review