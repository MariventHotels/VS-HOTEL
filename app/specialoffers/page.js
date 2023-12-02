import React from 'react'

function SpecialOffers() {
  return (
    <>
        <div className="container-fluid h-full sm:m-[120px] mt-24 mb-10">
            <div className="text-center sm:mx-auto mx-2">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-lg font-playfair text-green'>SPECIAL OFFERS</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='py-3 px-2 text-dark font-opensans sm:w-3/4 mx-auto text-sm '>Standing at the heart of the Quezon City, VS Hotel is the supreme destination for all kinds of events. The hotel boasts one ballroom with a perfect view of Philippines’ longest mountain range- Sierra Madre and eleven function rooms to meet your every demand and expectation. Our hotel offers alternative to traditional meeting venues. Whether intimate or big events, any meeting is elevated from standard to sensational when held at VS Hotel.</p>
            </div>

            <div className="container-fluid sm:mx-auto mx-2">
                <div className="mt-5 bg-white">
                    <div className="grid sm:grid-cols-2 gap-10 sm:h-96">
                        <img src="/test1.jpg" alt="" className='h-full w-full' />
                        <div className="px-2 sm:mr-10 sm:px-0">
                            <p className='font-opensans text-sm text-dark sm:mt-6'>NEW & NOTEWORTHY</p>
                            <h1 className='font-playfair text-green sm:text-3xl text-2xl pt-3 pb-3'>Christmas Offer</h1>
                            <p className='font-opensans text-sm text-dark text-justify'>VS Club is the largest indoor sports club in the country. The first of its kind, our space offers you access to a multitude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle. <br /> <br />
                                The first of its kind, our space offers you access to a multitude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle. The first of its kind, our space offers you access to a multitude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle.
                            </p>
                            <hr className='mt-8 mb-8 text-gray' />
                            <div className="container grid grid-cols-2 pb-10 sm:pb-0">
                                <a href="/" className='font-playfair text-sm underline text-green'>See more</a>
                                <a href="/" className='font-playfair text-sm underline text-green'>Avail now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SpecialOffers