import React from 'react'

export const Navbar = () => {
  return (<div className='flex justify-center '>
  <div className='w-screen flex justify-between items-center px-20 p-2'>
      <div className='flex items-center gap-12'>
        <img src="img/Logo.svg" alt="" className='object-cover h-15 w-40' />
        <ul className='flex gap-5 list-none'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div className='flex items-center gap-5'>
        <img src="img/search.png" alt="" className='w-5 cursor-pointer'/>
        <button className='w-24 p-2 bg-transparent cursor-pointer'>Profile</button>
      </div>
  </div>
</div>
)
}
