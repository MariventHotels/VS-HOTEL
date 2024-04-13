import { REVIEW_CONTENT } from '@/constants'
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

function Review() {
  return (
    <>
        <div className="container-fluid sm:px-10 sm:pt-10 p-2 font-opensans">
            <div className="container text-center mx-auto">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-lg font-playfair text-green'>GUEST REVIEWS</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='pt-3 pb-3 text-dark font-opensans lg:w-3/4 mx-auto text-sm '>
                    Immerse yourself in a world of travel tales, where each review paints a vivid
                    picture of the hotel's ambiance, service, amenities, and everything in between.
                    Explore firsthand hotel experiences on our guest review website. From cozy
                    beds to top-notch service, our community shares honest insights to guide
                    your next stay. Join us and find your perfect hotel match today!
                </p>
                <a href="https://victoriasportsclub.com/"><button className='bg-green pl-5 pr-5 pt-2 pb-2 text-white mt-2 font-playfair text-[0.7rem] sm:text-xs rounded-sm custom-btn'>LEAVE YOUR FEEDBACK HERE</button></a>
            </div>

            <div className="container-fluid sm:container mt-5 mx-auto">
                {REVIEW_CONTENT.map((index) => (
                    <>
                        <div class="flex flex-row flex-wrap">
                            <div className='review-box sm:basis-1/3 basis-full my-2 bg-white p-5 rounded-tl-3xl'>
                                <FaQuoteLeft className='text-5xl text-[#8AA4]' />
                                <p>{index.review_title}</p>
                                <p>{index.review_body}</p>
                                <p>{index.review_name}</p>
                                <p>{index.review_date}</p>
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