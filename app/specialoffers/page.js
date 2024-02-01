import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { HTL_OFFERS } from '@/constants';

function SpecialOffers() {
  return (
    <>
        <div className="container-fluid h-full lg:m-[120px] my-24 mx-2 mb-10" data-aos="fade-up">
            <div className="container text-center mx-auto">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-lg font-playfair text-green'>EXCLUSIVE OFFERS</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='pt-3 pb-3 text-dark font-opensans lg:w-3/4 mx-auto text-sm '>Standing at the heart of the Quezon City, VS Hotel is the supreme destination for all kinds of events. The hotel boasts one ballroom with a perfect view of Philippines’ longest mountain range- Sierra Madre and eleven function rooms to meet your every demand and expectation. Our hotel offers alternative to traditional meeting venues. Whether intimate or big events, any meeting is elevated from standard to sensational when held at VS Hotel.</p>
            </div>

            {/* ONE OFFER WITH MULTIPLE PACKAGES */}
            {HTL_OFFERS.map((index) => (
                <div>{index.Offers.map((index) => (
                    <>
                        <div className="container-fluid sm:container mt-10 mx-auto h-auto sm:rounded-r-sm rounded-b-sm">
                            <div className="">
                                <div className="mb-5 text-center">
                                    {/* <p className='font-opensans text-sm text-dark lg:mt-6'>{index.label}</p> */}
                                    <h1 className='font-playfair text-green sm:text-3xl text-xl pt-3 pb-3'>{index.title}</h1>
                                    <p className='sm:container font-opensans text-sm text-dark text-center'>
                                        {index.desc}
                                    </p>
                                    <p className='sm:container font-opensans text-sm text-dark text-center mt-2 font-medium'>Booking Period: {index.booking} | Stay Period: {index.stay}</p>
                                </div>
                                <div className="">
                                    <img src="/offers/offer.png" alt="" className='text-center mx-auto sm:rounded-l-sm rounded-t-sm' />
                                </div>
                                <div className="bg-gray pt-5 grid sm:grid-cols-2 gap-5">
                                    <div className="bg-gray">
                                        <h1 className='font-playfair text-green sm:text-2xl text-2xl pt-3 pb-3'>{index.packageB}</h1>
                                        <p className='mb-3'>Rate starts at <b className='text-green'>{index.rateA}</b> nett for two (2) persons</p>
                                        {index.inclusionsA.map((index) => (
                                            <>
                                                <ul className='text-dark'>
                                                    <li className='text-sm my-1 flex'><IoMdCheckmark className='text-sm text-green mt-1 mr-2' />{index.inc_name}</li>
                                                </ul>
                                            </>
                                        ))}
                                    </div>

                                    <div className="">
                                        <h1 className='font-playfair text-green sm:text-2xl text-2xl pt-3 pb-3'>{index.packageA}</h1>
                                        <p className='mb-3'>Rate starts at <b className='text-green'>{index.rateB}</b> nett for two (2) persons</p>
                                        {index.inclusionsB.map((index) => (
                                            <>
                                                <ul className='text-dark'>
                                                    <li className='text-sm my-1 flex'><IoMdCheckmark className='text-sm text-green mt-1 mr-2' />{index.inc_name}</li>
                                                </ul>
                                            </>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                ))}</div>
            ))}

            {/* ONE OFFER */}
            {/* {HTL_OFFERS.map((index) => (
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

                                    <p className='italic text-dark text-sm pt-5 mb-8'>Terms and conditions apply</p>

                                </div>
                            </div>
                        </div>
                    </>
                ))}</div>
            ))} */}


        </div>
    </>
  )
}

export default SpecialOffers