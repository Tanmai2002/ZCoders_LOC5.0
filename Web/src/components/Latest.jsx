import React, { useContext, useEffect, useState } from 'react'
import { Web3Context } from '../context/Web3Context';
import { CardSection } from './CardSection'

import { NewNavbar } from './NewNavbar'

export const Latest = () => {
  const [NFTs, setNFTs] = useState([]);
  const {getAllNFT} = useContext(Web3Context);
  useEffect(() => {
    getAllNFT().then((res)=>{
      setNFTs(res);

    })

    
  }, [])
  

  return (
    <div className='h-screen bg-white text-black snap-y snap-mandatory scroll-smooth'>
        <div className='snap-center h-screen items-center justify-center'>
            {/* <NewNavbar></NewNavbar> */}
            <div className="snap-center h-screen items-center justify-center">
        {/* <Navbar setConnected={setConnected} setRoute={setRoute} ></Navbar> */}
        <div className="h-full snap-center flex relative w-screen px-10 p-2 justify-center items-center">
          {/* up */}
          <div className="basis-3/4">
            <CardSection heading={`Recent Orders`} nfts={NFTs} cols={4}></CardSection>
            <a href="/products" className='text-3xl'>See More</a>
          </div>
          {/* down */}
        </div>
      </div>
        </div>
    </div>
  )
}
