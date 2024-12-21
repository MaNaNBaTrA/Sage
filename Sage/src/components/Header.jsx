import React from 'react'
import HeaderImg from '../assets/Header.svg'
import ArrowBend from '../assets/Arrowbend.svg'

const Header = () => {
    return (
        <div className='w-full pt-14 flex justify-evenly'>
            <div className='w-1/3 flex flex-col gap-9 justify-center mb-4 mr-12'>
                <div className='font-engagement text-7xl py-3'>Find Collaborators for Your Projects</div>
                <div className='font-inter text-base text-gray-500'>Find the perfect team for every project. Where innovators meet to create, collaborate, and succeed.</div>
                <div className='flex text- font-inter gap-5 items-center'>
                    <div className='font-inter bg-black rounded-xl px-12 py-2 cursor-pointer'>
                        <div className='text-white'>Search</div>
                    </div>
                    <div className='flex gap-2 items-center justify-center rounded-xl border-2 border-black px-6 py-2 cursor-pointer'>
                        <div>Post Now</div>
                        <img src={ArrowBend} alt="" className='w-4' />
                    </div> 
                </div>
                <div className='flex flex-col gap-2'>
                    <div className="w-full h-[2px] bg-gray-400 my-4"></div>
                    <div className='font-inter '>
                        <div>Find Your Project Tribe | Fuel Your Projects with Top Talent</div>
                    </div>
                </div>


            </div>
            <div className='w-1/2'>
                <img
                    src={HeaderImg}
                    alt="HeaderImg"
                />
            </div>
        </div>
    )
}

export default Header;
