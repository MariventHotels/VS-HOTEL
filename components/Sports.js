'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sports() {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
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
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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
                        <h1 className='sm:text-3xl text-lg font-playfair text-green'>SPORTS CLUB</h1>
                        <hr className='text-lightdark sm:mt-5 mt-4' />
                    </div>
                    <p className='pt-3 pb-3 text-dark font-opensans lg:w-3/4 mx-auto sm:text-sm'>VS Club is the largest indoor sports club in the country. The first of its kind, our space offers you access to a multititude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle. Whether you want to spend a night bowling with your family, relax in our water spa pools, play a game of tennis or join studio classes, we’ve got you covered.</p>
                    <a href="https://victoriasportsclub.com/"><button className='bg-green pl-5 pr-5 pt-2 pb-2 text-white mt-2 font-playfair text-[0.7rem] sm:text-xs rounded-sm custom-btn'>EXPLORE THE SPORTS CLUB</button></a>
                </div>

                <div className="container-fluid mt-10 mx-auto">
                    <Slider {...settings}>
                        <div className='h-full'>
                            <img src="/club/1.jpg" alt="" className='h-full w-11/12 rounded-sm mx-auto text-center' />
                        </div>
                        <div className='h-full'>
                            <img src="/club/2.jpg" alt="" className='h-full w-11/12 rounded-sm mx-auto text-center' />
                        </div>
                        <div className='h-full'>
                            <img src="/club/3.jpg" alt="" className='h-full w-11/12 rounded-sm mx-auto text-center' />
                        </div>
                        <div className='h-full'>
                            <img src="/club/4.jpg" alt="" className='h-full w-11/12 rounded-sm mx-auto text-center' />
                        </div>
                        <div className='h-full'>
                            <img src="/club/5.jpg" alt="" className='h-full w-11/12 rounded-sm mx-auto text-center' />
                        </div>
                        <div className='h-full'>
                            <img src="/club/6.jpg" alt="" className='h-full w-11/12 rounded-sm mx-auto text-center' />
                        </div>
                        <div className='h-full'>
                            <img src="/club/7.jpg" alt="" className='h-full w-11/12 rounded-sm mx-auto text-center' />
                        </div>
                        <div className='h-full'>
                            <img src="/club/8.jpg" alt="" className='h-full w-11/12 rounded-sm mx-auto text-center' />
                        </div>
                    </Slider>
                </div>
        </div>
    </>
  )
}

export default Sports