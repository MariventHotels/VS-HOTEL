import { ROOM_TYPE } from '@/constants'
import React from 'react'

function stay() {
  return (
    <>
        <div className="container-fluid h-full m-[120px]">
                <div className="container text-center mx-auto">
                    <div className="grid grid-cols-3">
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                        <h1 className='sm:text-3xl text-xl font-playfair text-green'>HOTEL ROOMS</h1>
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                    </div>
                    <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm '>Our guest rooms are infused with uncomplicated comfort and style. Whether you are staying to work or play, rest and revitalize, our guest rooms bring modern conveniences that elevate your lifestyle.</p>
                </div>

                {/**ROOM TYPES */}

                <div className="container my-8">
                    <div className="grid grid-cols-2 gap-10">
                        {ROOM_TYPE.map((index) => (
                            <div>
                                <img src={index.image} alt="rooms" />
                                <h1 className='font-playfair text-green text-2xl mt-2 font-medium' >{index.label}</h1>
                                <p className='text-dark text-sm pt-2 pb-1 text-justify font-opensans'>{index.subtext}</p>
                                <a className='text-green text-base font-normal underline font-playfair' href={index.href} key={index.key}>See more</a>
                            </div>
                        ))}
                    </div>

                </div>
        </div>
    </>
  )
}

export default stay