import React from 'react'

import { NewNavbar } from './NewNavbar'

export const Latest = () => {
  return (
    <div className='h-screen bg-white text-black snap-y snap-mandatory scroll-smooth'>
        <div className='snap-center h-screen items-center justify-center'>
            <NewNavbar></NewNavbar>
            <div className='h-fit flex px-32 pt-5'>
                <div className='basis-1/5'>Brands</div>
                <div className='basis-4/5'>Grid images</div>

            </div>
        </div>
    </div>
  )
}
