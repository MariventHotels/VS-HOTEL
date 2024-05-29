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
            data-mc-src="c5258657-a54c-4b1e-a7ce-6f4ab247b356#instagram">
        </div>
      </div>
    </>
  )
}

export default igWidget