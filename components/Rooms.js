import React from 'react'

function Rooms() {
  return (
    <>
        <div className="container-fluid h-full sm:m-10 m-2 mt-10 mb-10">
                <div className="container text-center mx-auto">
                    <div className="grid grid-cols-3">
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                        <h1 className='sm:text-3xl text-xl font-playfair text-green'>THE ROOMS</h1>
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                    </div>
                    <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm '>Our guest rooms are infused with uncomplicated comfort and style. Whether you are staying to work or play, rest and revitalize, our guest rooms bring modern conveniences that elevate your lifestyle.</p>
                    <button className='bg-green pl-5 pr-5 pt-2 pb-2 text-white mt-2 font-playfair text-sm'>EXPLORE THE ROOM</button>
                </div>

                <div className="container-fluid sm:container mt-10 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:h-96">
                        <img src="/test1.jpg" alt="" className='h-full w-full' />
                        <img src="/test1.jpg" alt="" className='h-full w-full' />
                        <img src="/test1.jpg" alt="" className='h-full w-full' />
                    </div>
                </div>
        </div>
    </>
  )
}

export default Rooms