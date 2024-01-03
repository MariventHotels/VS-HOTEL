import React from 'react'
import { FEATURED_OFFERS } from '@/constants'
import { IoMdCheckmark } from "react-icons/io";

function Featured() {
  return (
    <>
        <div className="container-fluid sm:h-auto sm:m-10 m-2 mt-10 mb-10">
            <div className="container text-center mx-auto">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-lg font-playfair text-green'>FEATURED OFFERS</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
            </div>

            {FEATURED_OFFERS.map((index) => (
                <div>{index.Offers.map((index) => (
                    <>
                        <div className="container-fluid sm:container mt-10 mx-auto h-auto bg-white sm:rounded-r-sm rounded-b-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <img src="/offer.png" alt="" className='h-auto relative w-full sm:rounded-l-sm rounded-t-sm' />
                                <div className="px-2 sm:mr-10 sm:px-0 rounded-r-sm sm:ml-5 lg:ml-0">
                                    <p className='font-opensans text-sm text-dark lg:mt-6'>{index.label}</p>
                                    <h1 className='font-playfair text-green sm:text-4xl text-3xl pt-3 pb-3'>{index.title}</h1>
                                    <p className='font-opensans text-sm text-dark text-justify'>
                                        {index.desc}
                                    </p>

                                    <div className='text-dark text-sm mt-5'>
                                        <p>Rate starts at <b>{index.rate}</b> nett for two (2) persons</p>
                                        <p className='my-2'>Booking Period: {index.booking}</p>
                                        <p>Stay Period: {index.stay}</p>
                                    </div>

                                    <p className='text-dark text-sm my-3 font-bold'>Inclusions:</p>

                                    {index.inclusions.map((index) => (
                                        <>
                                            <ul className='text-dark'>
                                                    <li className='text-sm my-1 flex'><IoMdCheckmark className='text-sm text-green mt-1 mr-2' />{index.inc_name}</li>
                                            </ul>
                                        </>
                                    ))}

                                    <p className='text-sm mt-5 text-dark italic'>Terms and conditions apply.</p>

                                    <hr className='mt-7 mb-4 text-gray' />
                                    <div className="container grid grid-cols-2 sm:pb-0 mb-5 lg:mb-0">
                                        <a href="/specialoffers" className='font-playfair text-sm underline text-green'>See more</a>
                                        <a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MzgzMA==&individual=true" className='font-playfair text-sm underline text-green'>Avail now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}</div>
            ))}
        </div>
    </>
  )
}

export default Featured