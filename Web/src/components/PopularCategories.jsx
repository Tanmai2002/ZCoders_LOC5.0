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
            <div className="bg-[url('img/watch.png')] w-[235px] h-[235px] flex items-end pb-2 pl-1 justify-center"> 
                <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
                    <a href='/products/watches' className=''>Watches</a>    
                </div> 
            </div>
            <div className="bg-[url('img/shoes.png')] w-[235px] h-[235px] flex items-end pb-2 pl-1 justify-center"> 
                <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
                    <a href='/products/shoes' className=''>Shoes</a>    
                </div> 
            </div>
            <div className="bg-[url('img/clothing.png')] w-[235px] h-[235px] flex items-end pb-2 pl-1 justify-center"> 
                <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
                    <a href='/products/clothing' className=''>Clothing</a>    
                </div> 
            </div>
            <div className="bg-[url('img/eyewear.png')] w-[235px] h-[235px] flex items-end pb-2 pl-1 justify-center"> 
                <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
                    <a href='/products/eyewear' className=''>Eye wears</a>    
                </div> 
            </div>
            <div className="bg-[url('img/fragrances.png')] w-[235px] h-[235px] flex items-end pb-2 pl-1 justify-center"> 
                <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
                    <a href='/products/fragrances' className=''>Fragrances</a>    
                </div> 
            </div>
            <div className="bg-[url('img/handbags.png')] w-[235px] h-[235px] flex items-end pb-2 pl-1 justify-center"> 
                <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
                    <a href='/products/handbag' className=''>Handbags</a>    
                </div> 
            </div>
            <div className="bg-[url('img/home_decor.png')] w-[235px] h-[235px] flex items-end pb-2 pl-1 justify-center"> 
                <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
                    <a href='/products/homedecor' className=''>Home Decor</a>    
                </div> 
            </div>
            <div className="bg-[url('img/jewellery.png')] w-[235px] h-[235px] flex items-end pb-2 pl-1 justify-center"> 
                <div className='pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl'>
                    <a href='/products/jewellery' className=''>Jewellery</a>    
                </div> 
            </div>
        </div>
    </div>
  )
}
