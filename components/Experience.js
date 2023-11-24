import React from 'react'

function Experience() {
  return (
    <>
      <div className="container-fluid h-full sm:m-10 m-2 mt-10 mb-10">
        <div className="container text-center mx-auto">
            <div className="grid grid-cols-3">
                <hr className='text-lightdark sm:mt-5 mt-4' />
                <h1 className='sm:text-3xl text-xl font-playfair text-green'>EXPERIENCE</h1>
                <hr className='text-lightdark sm:mt-5 mt-4' />
            </div>
            <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm '>VS Club is the largest indoor sports club in the country. The first of its kind, our space offers you access to a multititude of sports facilities and state of- the-art fitness equipment to cater to your active lifestyle. Whether you want to spend a night bowling with your family, relax in our water spa pools, play a game of tennis or join studio classes, we’ve got you covered.</p>
            <button className='bg-green pl-5 pr-5 pt-2 pb-2 text-white mt-2 font-playfair text-sm'>EXPLORE THE SPORTS CLUB</button>
        </div>

        <div className="container-fluid sm:container mt-10 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className=''>
                  <img src="/test1.jpg" alt="" className='w-full sm:h-96' />
                  <p className='mt-3 text-sm text-dark'>WELLNESS BEYOND BEAUTY</p>
                  <h1 className='mt-1 mb-1 font-playfair text-green text-3xl font-medium'>Victoria Skin</h1>
                  <p className='text-sm mb-1 text-dark'>Designed to address top skin concerns in one’s continuous pursuit of beauty, Victoria Skin is the new destination to visit. With its luxurious, and relaxing facilities, Victoria Skin houses state-of-the-art equipment and offers excellent solutions for maintaining the skin’s youthful beauty through various high-quality treatments and procedures performed by experts in the field of Dermatology and Aesthetic Medicine. Staying true to the brand’s promise, Victoria Skin aspires to go beyond quick fixes and delve into the very core of how one can achieve true and lasting beauty.</p>
                  <a href="/" className='font-playfair text-sm underline text-green'>Discover more</a>
                </div>
                <div>
                <img src="/test1.jpg" alt="" className='w-full sm:h-96' />
                  <p className='mt-3 text-sm text-dark'>COZY CAFE THAT SERVES CONVENIENT AND HEARTY COMFORT FOOD</p>
                  <h1 className='mt-1 mb-1 font-playfair text-green text-3xl font-medium'>VS CAFE</h1>
                  <p className='text-sm mb-1 text-dark'>Our dining venues are synonymous with living well and quality dining experience. Flavorful, freshly prepared choices take center stage for your dining enjoyment. Mingle while watching live streaming of your favorite sports in our Bistro Bar.
                    A variety of booster meals for the health conscious and with dietary restrictions are available at the Health Bar. Take delight in a stylish Al fresco cafe, serving contemporary farm to table salad, mocktails and cocktails.</p>
                  <a href="/" className='font-playfair text-sm underline text-green'>Discover more</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Experience