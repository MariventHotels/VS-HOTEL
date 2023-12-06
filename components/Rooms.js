'use client';
import React from 'react';
import '../styles.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Rooms() {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

  return (
    <>
        <div className="container-fluid h-full sm:m-10 m-2 mt-10 mb-10">
                <div className="container text-center mx-auto">
                    <div className="grid grid-cols-3">
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                        <h1 className='sm:text-3xl text-xl font-playfair text-green'>THE ROOMS</h1>
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                    </div>
                    <p className='pt-3 pb-3 text-dark font-opensans lg:w-3/4 mx-auto text-sm '>Our guest rooms are infused with uncomplicated comfort and style. Whether you are staying to work or play, rest and revitalize, our guest rooms bring modern conveniences that elevate your lifestyle.</p>
                    <a href="/stay"><button className='bg-green pl-5 pr-5 pt-2 pb-2 text-white mt-2 font-playfair text-sm rounded-sm transition-transform custom-btn'>EXPLORE THE ROOM</button></a>
                </div>

                <div className="container-fluid mt-10 mx-auto">
                    <Slider {...settings}>
                        <div className='h-full'>
                            <img src="/rooms/coverpage/1.jpg" alt="" className='h-full w-11/12 rounded-sm' />
                        </div>
                        <div className='h-full'>
                            <img src="/rooms/coverpage/2.jpg" alt="" className='h-full w-11/12 rounded-sm' />
                        </div>
                        <div className='h-full'>
                            <img src="/rooms/coverpage/3.jpg" alt="" className='h-full w-11/12 rounded-sm' />
                        </div>
                        <div className='h-full'>
                            <img src="/rooms/coverpage/4.jpg" alt="" className='h-full w-11/12 rounded-sm' />
                        </div>
                        <div className='h-full'>
                            <img src="/rooms/coverpage/5.jpg" alt="" className='h-full w-11/12 rounded-sm' />
                        </div>
                        <div className='h-full'>
                            <img src="/rooms/coverpage/6.jpg" alt="" className='h-full w-11/12 rounded-sm' />
                        </div>
                        <div className='h-full'>
                            <img src="/rooms/coverpage/7.jpg" alt="" className='h-full w-11/12 rounded-sm' />
                        </div>
                        <div className='h-full'>
                            <img src="/rooms/coverpage/8.jpg" alt="" className='h-full w-11/12 rounded-sm' />
                        </div>

                    </Slider>
                </div>
        </div>
    </>
  )
}

export default Rooms



// import React from 'react'
// import '../styles.css'

// function Rooms() {
//   return (
//     <>
//         <div className="container-fluid h-full sm:m-10 m-2 mt-10 mb-10">
//                 <div className="container text-center mx-auto">
//                     <div className="grid grid-cols-3">
//                         <hr className='text-lightdark sm:mt-5 mt-4' />
//                         <h1 className='sm:text-3xl text-xl font-playfair text-green'>THE ROOMS</h1>
//                         <hr className='text-lightdark sm:mt-5 mt-4' />
//                     </div>
//                     <p className='pt-3 pb-3 text-dark font-opensans lg:w-3/4 mx-auto text-sm '>Our guest rooms are infused with uncomplicated comfort and style. Whether you are staying to work or play, rest and revitalize, our guest rooms bring modern conveniences that elevate your lifestyle.</p>
//                     <a href="/stay"><button className='bg-green pl-5 pr-5 pt-2 pb-2 text-white mt-2 font-playfair text-sm rounded-sm transition-transform custom-btn'>EXPLORE THE ROOM</button></a>
//                 </div>

//                 <div className="container-fluid sm:container mt-10 mx-auto">
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:h-96">
//                         <img src="/rooms/coverpage/1.jpg" alt="" className='h-full w-full rounded-sm' />
//                         <img src="/rooms/coverpage/3.jpg" alt="" className='h-full w-full rounded-sm' />
//                         <img src="/rooms/coverpage/2.jpg" alt="" className='h-full w-full rounded-sm' />
//                     </div>
//                 </div>
//         </div>
//     </>
//   )
// }

// export default Rooms