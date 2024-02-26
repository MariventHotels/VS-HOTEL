import { EVENT_SPACES } from '@/constants'
import React from 'react'

function ConventionCenter() {
  return (
    <>
      <div className="container-fluid h-full lg:m-[120px] my-24 mx-2 mb-10" data-aos="fade-up">
        <div className="container text-center mx-auto">
            <div className="grid grid-cols-3">
                <hr className='text-lightdark sm:mt-5 mt-4' />
                <h1 className='sm:text-3xl text-lg font-playfair text-green'>EVENT SPACES</h1>
                <hr className='text-lightdark sm:mt-5 mt-4' />
            </div>
            <p className='pt-3 pb-3 text-dark font-opensans lg:w-3/4 mx-auto text-sm text-center'>Our dining venues are synonymous with living well and quality dining experience. Flavorful, freshly prepared choices take center stage for your dining enjoyment. Mingle while watching live streaming of your favorite sports in our Bistro Bar. Standing at the heart of the Quezon City, VS Hotel is the supreme destination for all kinds of events. The hotel boasts one ballroom with a perfect view of Philippines’ longest mountain range- Sierra Madre and eleven function rooms to meet your every demand and expectation. Our hotel offers alternative to traditional meeting venues. Whether intimate or big events, any meeting is elevated from standard to sensational when held at VS Hotel.</p>
        </div>

        <div className=''>
          {/* Mapping out spaces data from /constants/index.js */}
          {EVENT_SPACES.map((index) => (
            <>
              {index.Spaces.map((indexb) => (
                <>
                  <div className="grid lg:grid-cols-2 mt-10">
                    <div className="">
                      <img className='w-full' src={indexb.image} alt="" />
                    </div>

                    <div className='bg-white sm:p-5 p-2'>
                      <h1 className='font-playfair text-2xl text-green'>{indexb.name}</h1>
                      <p className='font-opensans text-sm py-2 text-dark text-justify'>{indexb.subtext}</p>
                      <h4 className='font-playfair text-green text-lg mt-5 mb-3'>{indexb.sub_name}</h4>
                      <table className='w-full'>
                        <tbody>
                          {indexb.capacity.map((indexc) => (
                            <>
                              <tr className='text-sm'>
                                <td className='border border-solid border-lightdark py-3 px-2 text-sm text-dark'>{indexc.space_name}</td>
                                <td className='border border-solid border-lightdark py-3 px-2 text-sm text-dark'>{indexc.space_count}</td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ConventionCenter