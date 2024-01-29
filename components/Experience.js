import React from 'react'

function Experience() {
  return (
    <>
      <div className="container-fluid h-full sm:m-10 m-2 mt-10 mb-10">
        <div className="container text-center mx-auto">
            <div className="grid grid-cols-3">
                <hr className='text-lightdark sm:mt-5 mt-4' />
                <h1 className='sm:text-3xl text-lg font-playfair text-green'>EXPERIENCE</h1>
                <hr className='text-lightdark sm:mt-5 mt-4' />
            </div>
        </div>

        <div className="container-fluid sm:container mt-10 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className=''>
                  <img src="/skin/1.jpg" alt="" className='w-full sm:h-96 rounded-sm' />
                  <p className='mt-3 text-sm text-dark'>WELLNESS BEYOND BEAUTY</p>
                  <h1 className='mt-1 mb-1 font-playfair text-green sm:text-3xl text-2xl font-medium'>Victoria Skin</h1>
                  <p className='text-sm mb-1 text-dark text-justify'>Designed to address top skin concerns in one’s continuous pursuit of beauty, Victoria Skin is the new destination to visit. With its luxurious, and relaxing facilities, Victoria Skin houses state-of-the-art equipment and offers excellent solutions for maintaining the skin’s youthful beauty through various high-quality treatments and procedures performed by experts in the field of Dermatology and Aesthetic Medicine. Staying true to the brand’s promise, Victoria Skin aspires to go beyond quick fixes and delve into the very core of how one can achieve true and lasting beauty.</p>
                  <a href="https://victoriaskin.ph" className='font-playfair text-sm underline text-green'>Discover more</a>
                </div>

                <div>
                <img src="/cafe/VS Hotel Food web.jpg" alt="" className='w-full sm:h-96 rounded-sm' />
                  <p className='mt-3 text-sm text-dark'>COZY CAFE THAT SERVES CONVENIENT AND HEARTY COMFORT FOOD</p>
                  <h1 className='mt-1 mb-1 font-playfair text-green sm:text-3xl text-2xl font-medium'>VS Café</h1>
                  <p className='text-sm mb-1 text-dark text-justify'>Our dining venues are synonymous with living well and quality dining experience. Flavorful, freshly prepared choices take center stage for your dining enjoyment. Mingle while watching live streaming of your favorite sports in our Bistro Bar.
                    A variety of booster meals for the health conscious and with dietary restrictions are available at the Health Bar. Take delight in a stylish Al fresco cafe, serving contemporary farm to table salad, mocktails and cocktails.</p>
                  <a href="https://www.facebook.com/vscafemanila" className='font-playfair text-sm underline text-green'>Discover more</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Experience