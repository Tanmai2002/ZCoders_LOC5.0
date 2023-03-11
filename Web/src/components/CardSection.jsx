import React from 'react'
import { Card } from './Card'

export const CardSection = (props) => {
  return (
    <div className='h-fit w-full flex flex-col rounded-lg gap-2 m-5 p-5 bg-slate-100'>
        <p className='text-2xl font-mono font-bold'>{props.heading}</p>
        <div className='grid grid-cols-5 gap-10'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>

    </div>
  )
}
