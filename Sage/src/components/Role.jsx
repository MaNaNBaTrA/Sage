import React from 'react'
import "../index.css"
import AL from "../assets/AngleLeft.svg"
import AR from "../assets/AngleRight.svg"

const Role = () => {
    return (
        <div className='flex flex-col px-20 py-8 mb-20 Role justify-center'>
            <div className='flex w-full items-center relative'>
                <div className='flex flex-col gap-2'>
                    <div className=' font-engagement text-6xl py-2'>Find exciting projects to work on.</div>
                    <div className='font-inter px-2'>Browse curated opportunities to collaborate and make a meaningful impact with your skills.</div>
                </div>
                {/* <div className='flex gap-4 w-14 self-center absolute right-36 top-6'>
                    <img src={AL} alt="" className='cursor-pointer'/>
                    <img src={AR} alt="" className='cursor-pointer'/>
                </div> */}
            </div>
            <div className='w-full'> 
                <div></div>
            </div>
        </div>
    )
}

export default Role
