import React from 'react'
import { ImageDisplayer } from './ImageDisplayer'

export const PopularCategories = () => {
  return (
    <div className='flex flex-col h-screen snap-center items-center justify-center p-20'>
        {/* Header */}
        <div className='h-1/5 flex items-center justify-center flex-col gap-5'>
            <p className='text-3xl'>POPULAR CATEGORIES</p>
            <img src="img/line.png" alt="" />
        </div>

        {/* photos */}
        <div className='h-4/5 w-full grid grid-cols-4 gap-3 px-48 content-evenly justify-items-center'>
            <ImageDisplayer pn="shoes.png" pnn="Shoes"></ImageDisplayer>
            <ImageDisplayer pn="clothing.png" pnn="Clothing"></ImageDisplayer>
            <ImageDisplayer pn="eyewear.png" pnn="Shoes"></ImageDisplayer>
            <ImageDisplayer pn="shoes.png" pnn="Shoes"></ImageDisplayer>
            <ImageDisplayer pn="shoes.png" pnn="Shoes"></ImageDisplayer>
            <ImageDisplayer pn="shoes.png" pnn="Shoes"></ImageDisplayer>
            <ImageDisplayer pn="shoes.png" pnn="Shoes"></ImageDisplayer>
            <ImageDisplayer pn="shoes.png" pnn="Shoes"></ImageDisplayer>
        </div>
    </div>
  )
}
