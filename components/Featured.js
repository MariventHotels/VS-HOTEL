import React from 'react'

function Featured() {
  return (
    <>
        <div className="container-fluid sm:h-auto sm:m-10 m-2 mt-10 mb-10">
            <div className="container text-center mx-auto">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-xl font-playfair text-green'>FEATURED OFFERS</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
            </div>

            <div className="container-fluid sm:container mt-10 mx-auto h-auto bg-white sm:rounded-r-sm rounded-b-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <img src="/test1.jpg" alt="" className='h-auto w-full sm:rounded-l-sm rounded-t-sm' />
                    <div className="px-2 sm:mr-10 sm:px-0 rounded-r-sm sm:ml-5 lg:ml-0">
                        <p className='font-opensans text-sm text-dark lg:mt-6'>NEW & NOTEWORTHY</p>
                        <h1 className='font-playfair text-green text-4xl pt-3 pb-3'>Christmas Offer</h1>
                        <p className='font-opensans text-sm text-dark text-justify'>VS Club is the largest indoor sports club in the country. The first of its kind, our space offers you access to a multitude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle. <br /> <br />
                            The first of its kind, our space offers you access to a multitude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle. The first of its kind, our space offers you access to a multitude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle.
                        </p>
                        <hr className='mt-8 mb-8 text-gray' />
                        <div className="container grid grid-cols-2 sm:pb-0 mb-5 lg:mb-0">
                            <a href="/specialoffers" className='font-playfair text-sm underline text-green'>See more</a>
                            <a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MzgzMA==&individual=true" className='font-playfair text-sm underline text-green'>Avail now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Featured