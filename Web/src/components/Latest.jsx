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
        <div className="h-full snap-center flex flex-col relative w-screen px-10 p-2 justify-center items-center">
          {/* up */}
          <div className="basis-1/2">
            <CardSection heading={`Recent Orders`} nfts={[1,2,3]} cols={5}></CardSection>
          </div>
          {/* down */}
        </div>
      </div>
        </div>
    </div>
  )
}
