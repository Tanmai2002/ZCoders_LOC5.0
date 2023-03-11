import React from 'react'

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
            {newFunction()}
            <img src="img/shoes.png" alt="" />
            <img src="img/clothing.png" alt="" />
            <img src="img/eyewear.png" alt="" />
            <img src="img/fragrances.png" alt="" />
            <img src="img/handbags.png" alt="" />
            <img src="img/home_decor.png" alt="" />
            <img src="img/jewellery.png" alt="" />
        </div>
    </div>
  )
}
function newFunction(pngName) {
    return <div className="bg-[url(`img/${pngName}.png`)] w-[235px] flex items-end pb-2 pl-1 justify-center">
        <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
            <p className=''>Shoes</p>
        </div>
    </div>
}

