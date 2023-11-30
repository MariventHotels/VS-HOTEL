import { EVENT_SPACES } from '@/constants'
import React from 'react'

function ConventionCenter() {
  return (
    <>
      <div className="container-fluid h-full sm:m-[120px] m-2 mb-10">
        <div className="container text-center mx-auto">
            <div className="grid grid-cols-3">
                <hr className='text-lightdark sm:mt-5 mt-4' />
                <h1 className='sm:text-3xl text-xl font-playfair text-green'>EVENT SPACES</h1>
                <hr className='text-lightdark sm:mt-5 mt-4' />
            </div>
            <p className='pt-3 pb-3 text-dark font-opensans sm:w-3/4 mx-auto text-sm '>Our dining venues are synonymous with living well and quality dining experience. Flavorful, freshly prepared choices take center stage for your dining enjoyment. Mingle while watching live streaming of your favorite sports in our Bistro Bar. Standing at the heart of the Quezon City, VS Hotel is the supreme destination for all kinds of events. The hotel boasts one ballroom with a perfect view of Philippines’ longest mountain range- Sierra Madre and eleven function rooms to meet your every demand and expectation. Our hotel offers alternative to traditional meeting venues. Whether intimate or big events, any meeting is elevated from standard to sensational when held at VS Hotel.</p>
        </div>

        <div className="grid grid-cols-2 mt-10 gap-5">
          <div className="bg-green">
            <img className='w-full' src="/testroom.png" alt="" />
          </div>
          <div className="">
            {EVENT_SPACES.map((index) => (
              <>
                <div>{index.Ballroom.map((indexb) => (
                  <>
                    <div className="">
                      <h1 className='font-playfair text-3xl text-green'>{indexb.name}</h1>
                      <p className='font-opensans text-normal py-2 text-dark'>{indexb.subtext}</p>
                      <h4 className='font-playfair text-green font-medium'>{indexb.sub_name}</h4>
                        <table>
                          <tbody className=''>
                            {indexb.capacity.map((indexc) => (
                              <>
                                <tr>
                                  <td>{indexc.space_name}</td>
                                  <td>{indexc.space_count}</td>
                                </tr>
                              </>
                            ))}
                            <tr>
                              <td>{}</td>
                            </tr>
                            <tr></tr>
                          </tbody>
                        </table>
                    </div>
                  </>
                ))}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ConventionCenter