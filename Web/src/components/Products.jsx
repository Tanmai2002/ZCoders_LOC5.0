import React, { useContext, useEffect, useState } from 'react'
import { Web3Context } from '../context/Web3Context';
import { NewNavbar } from "./NewNavbar";
import { CardSection } from './CardSection';
import { useParams, useSearchParams } from 'react-router-dom';

export const Products = (props) => {

  const params= useParams()['category'];
  console.log(props)
  console.log(params)
  

  

  const [category, setCategory] = useState("All");
  
  const ok=()=>{
  if(params=='any'){
    setCategory("All")
  }else if(params=="shoes"){
    setCategory("Shoes")
  }else if(params=="jewellery"){
    setCategory("Jewellery")
  }else if(params=="watches"){
    setCategory("Watches")
  }else if(params=="eyewear"){
    setCategory("Eye wear")
  }else if(params=="homedecor"){
    setCategory("Home Decor")
  }else if(params=="fragrancies"){
    setCategory("Fragrances")
  }else if(params=="handbags"){
    setCategory("Hand bags")
  }else if(params=="clothing"){
    setCategory("Clothing")
  }}
  const [NFTs, setNFTs] = useState([]);
  const {getAllNFT} = useContext(Web3Context);
  useEffect(() => {
    getAllNFT().then((res)=>{
      setNFTs(res);
      setCategory(params)

    })

    
  }, [])

  return (
    <div className="h-screen bg-white text-black snap-y snap-mandatory scroll-smooth" {...()=>{ok}}>
      <div className="snap-center h-screen items-center justify-center">
        <NewNavbar setCategory={setCategory}></NewNavbar>
        <div className="px-64">
          <div className="w-full flex justify-center">
            <p className="bg-slate-200 px-64 text-4xl py-4 rounded-full font-semibold font-mono">
              {category}
            </p>
          </div>
          <div className="w-full ">
            <p className="text-2xl py-4 rounded-full font-semibold font-mono">
              Products {">>"} {category}
            </p>
          </div>
          <div className="flex flex-row w-full items-start">
            <div className="basis-1/5 flex flex-col w-full justify-center">
              <p className="text-4xl w-full text-center bg-gray-300 mt-10 rounded-xl">Brands</p>
              <p className="text-2xl w-full py-3 text-center">Brand 1</p>
              <p className="text-2xl w-full py-3 text-center">Brand 2</p>
              <p className="text-2xl w-full py-3 text-center">Brand 3</p>
              <p className="text-2xl w-full py-3 text-center">Brand 4</p>
            </div>
            <div className="basis-4/5">
              <CardSection heading={`Recent Orders`} nfts={NFTs} cols={4}></CardSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
