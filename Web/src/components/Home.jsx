import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { Web3Context } from '../context/Web3Context'
import { Hero } from './Hero'
import Navbar from './Navbar'
import { PopularCategories } from './PopularCategories'

export const Home = () => {
  const {account}=useContext(Web3Context)
  return (
    <div className='h-screen bg-white text-black snap-y snap-mandatory scroll-smooth'>
        <Navbar/>
        <Outlet/>
        <PopularCategories></PopularCategories>
    </div>
  )
}
