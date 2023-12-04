import React from 'react'

function Sports() {
  return (
    <>
        <div className="container-fluid h-full sm:m-10 m-2 mt-10 mb-10">
                <div className="container text-center mx-auto">
                    <div className="grid grid-cols-3">
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                        <h1 className='sm:text-3xl text-xl font-playfair text-green'>SPORTS CLUB</h1>
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                    </div>
                    <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm'>VS Club is the largest indoor sports club in the country. The first of its kind, our space offers you access to a multititude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle. Whether you want to spend a night bowling with your family, relax in our water spa pools, play a game of tennis or join studio classes, we’ve got you covered.</p>
                    <a href="https://victoriasportsclub.com/"><button className='bg-green pl-5 pr-5 pt-2 pb-2 text-white mt-2 font-playfair text-sm rounded-sm custom-btn'>EXPLORE THE SPORTS CLUB</button></a>
                </div>

                <div className="container-fluid sm:container mt-10 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:h-96">
                        <img src="/club/1.jpg" alt="" className='h-full w-full rounded-sm' />
                        <img src="/club/2.jpg" alt="" className='h-full w-full rounded-sm' />
                        <img src="/club/3.jpg" alt="" className='h-full w-full rounded-sm' />
                    </div>
                </div>
        </div>
    </>
  )
}

export default Sports