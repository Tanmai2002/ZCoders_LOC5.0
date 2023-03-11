import React from 'react'
import { Hero } from './Hero'
import { PopularCategories } from './PopularCategories'

export const Home = () => {
  return (
    <div className='h-screen bg-white text-black snap-y snap-mandatory scroll-smooth'>
        <Hero></Hero>
        <PopularCategories></PopularCategories>
    </div>
  )
}
