import React from 'react'

function igWidget() {

  return (
    <>
      <div className="container-fluid sm:h-auto sm:m-10 m-2 mt-10">
        <div className="container text-center mx-auto">
            <div className="grid grid-cols-3">
                <hr className='text-lightdark sm:mt-5 mt-4' />
                <h1 className='sm:text-3xl text-lg font-playfair text-green'>VS INSTAGRAM FEED</h1>
                <hr className='text-lightdark sm:mt-5 mt-4' />
            </div>
        </div>

        <div
            className='mb-14 mt-0 pt-0'
            loading="lazy"
            data-mc-src="39c088c1-95b6-4ceb-a9b9-eaa805e0a1b9#instagram">
        </div>
      </div>
    </>
  )
}

export default igWidget