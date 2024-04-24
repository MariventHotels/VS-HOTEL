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
                    Explore firsthand hotel experiences from cozy beds to top-notch  service, our community
                    shares honest insights to guide your next stay. Had a great stay? Leave us a glowing 5-star
                    review on TripAdvisor! Have suggestions for improvement? We're all ears! Help us enhance
                    your next visit by sharing your feedback.
                </p>

               <a href="https://www.tripadvisor.com/UserReviewEdit-g298574-d23833786-VS_Hotel-Quezon_City_Metro_Manila_Luzon.html" target='_blank'><button className='bg-white pl-5 pr-5 pt-2 pb-2 mx-2 text-green font-semibold mt-2 font-opensans text-[0.7rem] sm:text-xs rounded-sm custom-btn'>HOW DID YOU ENJOY YOUR STAY?</button></a>
               <a href="https://us1.list-manage.com/survey?u=2dc85a100274ce1d29cb7076c&id=8f0146ae40&attribution=false" target='_blank'><button className='bg-green pl-5 pr-5 pt-2 pb-2 mx-2 text-white border border-solid border-white font-semibold mt-2 font-opensans text-[0.7rem] sm:text-xs rounded-sm custom-btn'>HOW SHOULD WE IMPROVE?</button></a>

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