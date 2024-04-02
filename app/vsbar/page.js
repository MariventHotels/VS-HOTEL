'use client'
import BistroCarousel from '@/components/BistroCarousel';
import { BISTRO_GALLERY, BISTRO_OFFERS } from '@/constants';
import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaBook } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

//plugins
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom'

function Bar() {

    const onBeforeSlide = (detail) => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

  return (
    <>
        <div className="container-fluid">
           <div className='relative h-full mt-14 sm:mt-0'>
                <div className="container-fluid">
                    <div>
                        <img src="/bistro/bistro-c.jpg" className='2' alt="bar cover" />
                    </div>
                    {/**TAGLINE */}
                    <div className="container-fluid w-full mx-auto absolute sm:px-1 sm:bottom-1/2 bottom-10 text-center text-white">
                        <div className='mb-1 sm:mb-5 mt-5'>
                            <img src="/bistro/VICTORIA SPORTS Bar-02.png" className='w-2/5 sm:w-5/6 md:w-1/6  mx-auto' alt="bistro logo" />
                        </div>

                        <h1 className='2xl:text-7xl text-xl sm:text-6xl mb-1 lg:mb-4 font-playfair'>A Nightlife of Live Music, and Fun</h1>
                        <p className='text-xs sm:text-base lg:text-lg mx-1'>Every Friday and Saturday | 6:00PM Onwards</p>
                    </div>
                </div>
           </div>

           {/**SNEAK PEEK */}
           <div className="lg:mx-[120px] text-center mx-auto sm:my-10 my-5 px-2">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-xl font-playfair text-green'>SNEAK PEEK</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='pt-3 pb-3 text-dark font-opensans lg:w-3/4 mx-auto text-sm '>Last weekend at the Victoria Sports Bar, guests had a fantastic weekend full of fun, excitement, and entertainment that they will never forget. They enjoyed some lively music and DJ sets while relishing a delicious menu and cocktails and danced the night away with endless energy and enthusiasm. It was an absolute blast for everyone who came, and we're glad to have been a part of it!</p>

                <BistroCarousel />
            </div>

            {/**CENTER STAGE*/}
           <div className="container-fluid text-center mx-auto sm:p-16 py-10 px-2 bg-green">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-xl font-playfair text-white'>CENTER STAGE</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='pt-3 pb-3 text-white font-opensans lg:w-3/4 mx-auto text-sm '>Enjoy live music, delicious food, and refreshing drinks at Victoria Sports Bar this weekend. Our talented performers will keep you entertained with a mix of soulful ballads and upbeat rock and roll hits.</p>

                {/**
                       <div className='grid sm:grid-cols-1 grid-cols-1 gap-4 mt-5 mx-auto'>
                    <div className='prf'>
                        <img src="/bistro/performers/p-2.jpg" alt="performers" />
                    </div>
                    
                    <div className='prf'>
                        <img src="/bistro/performers/p-3.jpg" alt="performers" />
                    </div>
                </div>
            */}

                <div className='grid sm:grid-cols-1 grid-cols-1 gap-4 mt-5 mx-auto'>
                    <div className='prf'>
                        <img src="/bistro/performers/p-2.jpg" alt="performers" />
                    </div>

                    <div className='prf'>
                        <img src="/bistro/performers/p-3.jpg" alt="performers" />
                    </div>
                </div>


                </div>

            {/**OFFERS*/}
           <div className="lg:mx-[120px] mx-2 sm:ml-5 sm:mx-auto my-10">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-xl font-playfair text-center text-green'>OFFERS</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>

                <div className='mt-10'>
                    {BISTRO_OFFERS.map((index) => (
                        <>
                           {index.Offers.map((indexb) => (
                            <>
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 mb-5'>
                                    <div>
                                        <img src={indexb.image} alt="offer" />
                                    </div>

                                    <div>
                                        <div className="sm:text-left">
                                            <h1 className='font-playfair text-green sm:text-2xl text-2xl pt-3 pb-3'>{indexb.title}</h1>
                                            <p className='mb-3 text-sm'>{indexb.desc}</p>
                                            <p className='mb-3 text-sm'>{indexb.desc_b}</p>
                                            {/**<p className='mb-3 text-sm'>Rate starts at <b className='text-green'>{indexb.rate}</b> nett for two (2) persons</p> */}
                                            {/**<p>Inclusions: </p> */}

                                            {indexb.inclusions.map((indexc) => (
                                                <>
                                                    <ul className='text-dark'>
                                                        <li className='text-sm my-1 flex'><FaCheck className='text-green text-lg mr-1' />{indexc.inc_name}</li>
                                                    </ul>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                           ))}
                        </>
                    ))}
                </div>
            </div>

            {/**HIGHLIGHTS*/}
           <div className="container-fluid text-center mx-auto sm:m-0 p-5 sm:p-16 bg-white">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-xl font-playfair text-center text-green'>HIGHLIGHTS</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
                <p className='pt-3 pb-3 font-opensans lg:w-3/4 mx-auto text-sm '>Experience a weekend filled with entertainment, great food, and drinks at the Victoria Sports Bar. Take advantage of the opportunity to create unforgettable memories and enjoy a fantastic time.</p>

                    <div className='mt-5'>
                        <LightGallery
                            elementClassNames="gallery"
                            onBeforeSlide={onBeforeSlide}
                            plugins={[lgZoom]}
                            // onInit={onInit}
                            download= {false}
                            zoom={false}
                            counter={false}
                        >
                            {BISTRO_GALLERY.map((items, index) => (
                                <a href={items.galleryImg} className='relative w-full' >
                                <div className='' >
                                    <img src={items.galleryImg} className='w-full' alt="" />
                                </div>
                                </a>
                            ))}
                        </LightGallery>
                    </div>
            </div>

            {/**CONTACT US */}
            <div className="container-fluid sm:block hidden">
                <div className="relative h-full">
                    <div>
                        <img src="/bistro/contact/cntbg.JPG" className='w-full saturate-50 contrast-125 h-48 sm:h-auto' alt="contact" />
                    </div>
                    <div className="container-fluid w-full mx-auto absolute sm:px-1 sm:bottom-1/3 bottom-1/4 text-center text-white">
                        <h1 className='sm:text-5xl 2xl:text-5xl text-2xl mb-1 lg:mb-4 font-playfair'>Reach us out for more details</h1>
                        <p className='text-xs sm:text-base lg:text-lg mx-1'>We are here to provide dedicated assistance with any questions you may have, offering seamless guidance and support throughout your inquiries.</p>
                        {/**<a href="/"><a href="https://www.facebook.com/profile.php?id=61555962214287"></a><button className='py-1 sm:py-2 px-10 outline outline-1 mt-5 cursor-pointer text-xs'>CONTACT US</button></a> */}
                        <button className='py-1 sm:py-2 px-10 outline outline-1 mt-5 cursor-pointer text-xs'><a href="https://www.facebook.com/profile.php?id=61555962214287">CONTACT US</a></button>
                        </div>
                </div>
            </div>

            <div className="container mx-auto">
               <div className="grid sm:grid-cols-3 grid-cols-1 my-10">
                    <div></div>
                    <div>
                        <h1 className='text-2xl text-green font-bold mb-4 text-center'>For inquiries and reservations</h1>
                        <ul>
                            <li className='flex justify-center mb-2'><MdEmail className='text-green' /><p className='text-sm pl-1'>victoriasportsbar@vshotel.com.ph</p></li>
                            <li className='flex justify-center mb-2'><IoCall className='text-green' /><p className='text-sm pl-1'>+63 954 159 2310</p></li>
                            <li className='flex justify-center mb-2'><TbWorldWww className='text-green' /><p className='text-sm pl-1'>www.vshotel.com.ph</p></li>
                            <li className='flex justify-center mb-2'><BsFacebook className='text-green' /><p className='text-sm pl-1'><a href="https://www.facebook.com/profile.php?id=61555962214287">Victoria Sports Bar</a></p></li>
                            <li className='flex justify-center '><FaInstagramSquare className='text-green' /><p className='text-sm pl-1'><a href="https://www.instagram.com/victoriasportsbar/?next=%2F">@victoriasportsbar</a></p></li>
                        </ul>

                        <h1 className='text-2xl text-green font-bold mb-4 mt-5 text-center'>VS Bar Menu</h1>
                        <ul>
                            <li className='flex justify-center'><FaBook className='text-green' /><p className='text-sm pl-1'><a href="https://drive.google.com/file/d/1FODlJAHcBreYvxVb4vrw4XVu5DMTuKEq/view?usp=sharing">View menu</a></p></li>
                        </ul>
                    </div>
                    <div></div>
               </div>
            </div>


        </div>
    </>
  )
}

export default Bar