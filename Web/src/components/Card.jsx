import { ethers } from 'ethers';
import React, { useContext } from 'react'
import { Web3Context } from '../context/Web3Context';
import { shortenId } from '../utils/shortenId';

export const Card = (props) => {
  const {transferProduct,account}=useContext(Web3Context);
  console.log(account.toUpperCase());
  console.log(props.prod[2].toString().toUpperCase()==account.toUpperCase());
    return (
        <div className={"max-w-sm rounded overflow-hidden shadow-lg "+props.prod[2].toString().toUpperCase()==account.toUpperCase()?"bg-blue-600":""}>
          <img className="w-full" src="img/card-top.jpg" alt="Sunset in the mountains" />
          <div className={"px-6 py-4 " + props.prod[2].toString().toUpperCase()==account.toUpperCase()?"bg-blue-600":""}>
            <div className="font-bold text-xl mb-2">{props.prod[3]}</div>
            <p className="text-gray-700 text-base">
             {props.prod[4]}
            </p>
            <p className="text-gray-700 text-subtitle">
             # {shortenId(props.prod[2])}
             <p className='text-blue text-underline text-xs cursor-pointer' onClick={()=>{
          navigator.clipboard.writeText(props.prod[1]);

             }}>Copy</p>
            </p>
          
          </div>
          <div className="px-3 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  {ethers.formatUnits(props.prod[5],'wei')} wei</span>

          </div>
          <button onClick={()=>transferProduct(1,"0xf6998F3c6097c5Ef2015bDdEcB5116037e9C7565")}> Transfer</button>
        </div>
      );
}
