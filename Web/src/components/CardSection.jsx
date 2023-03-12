import React from 'react'
import { Card } from './Card'

export const CardSection = (props) => {
  // console.log(props);
  // const route=(props.heading=="Latest releases")?"latest":(props.heading=="Current Orders")?"current":"past";

  return (
    <div className='h-fit w-full flex flex-col rounded-lg gap-2 m-5 mb-20 p-5 bg-slate-100'>
        <p className='text-2xl font-mono font-bold'>{props.heading}</p>
        <div className={`grid grid-cols-${props.cols} gap-10`}>
            {(props.nfts??[]).map((e)=>{
              return <Card prod={e}></Card>
            })}
        </div>
        {/* <a href={`${ro}`} className="text-2xl pt-5 font-extrabold font-mono self-end">See all</a> */}

    </div>
  )
}
