import React from 'react'

function Location() {
  return (
    <>
        <div className="container-fluid bg-white sm:px-10 sm:pt-10 p-2 font-opensans">
            <div className="container text-center mx-auto">
                <div className="grid grid-cols-3">
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                    <h1 className='sm:text-3xl text-lg font-playfair text-green'>MAP LOCATION</h1>
                    <hr className='text-lightdark sm:mt-5 mt-4' />
                </div>
            </div>

            <div className="container-fluid sm:container mt-5 mx-auto">
                <div className="mx-auto">
                    <iframe className='mx-auto h-[300px] sm:h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3495039666786!2d121.03996507586722!3d14.636091176205204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b644522d3db1%3A0xc3d8ebc67a3c5044!2sVictoria%20Sports%20Tower!5e0!3m2!1sen!2sph!4v1712105764139!5m2!1sen!2sph" width="1200" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='mt-5 text-center sm:w-[1200px] mx-auto'>
                  <h1 className='mt-1 mb-1 font-playfair text-green sm:text-2xl text-2xl font-medium'>Victoria Sports Tower</h1>
                  <p className='mt-3 text-sm text-dark uppercase font-medium'>799, Victoria Sports Tower, EDSA Southbound, 799 Epifanio de los Santos Ave, South Triangle, Quezon City, 1103 Metro Manila</p>
                  <p className='text-sm mb-3 text-dark text-center p-2'>VS Hotel is highly accessible and located at the Victoria Sports Tower – Station II along EDSA, between the GMA-Kamuning and Quezon Avenue MRT Stations. Its location also offers easy access to popular eateries and fast food chains in Quezon City, with Timog Avenue and Tomas Morato being nearby. Furthermore, Trinoma and SM North are just two MRT stations away, making it a convenient choice for travelers and tourists alike.</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Location