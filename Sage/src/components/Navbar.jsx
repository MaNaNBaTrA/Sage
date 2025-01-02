import React from 'react';
import Logo from '/Logo.svg';
import Profile from '../assets/Svg/Profile.svg';
import Plane from '../assets/Svg/Plane.svg';
import Bell from '../assets/Svg/Bell.svg';
import Search from '../assets/Svg/Search.svg';
import Plus from '../assets/Svg/Plus.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const Click = ()=>{
      navigate('/')
  }

  return (
    <div className='w-full flex justify-between p-4'>
      <div className="w-1/2 flex pl-10 gap-x-24">
        <div className='w-24 items-center justify-center cursor-pointer'>
          <img src={Logo} alt="Sage" onClick={Click}/>
        </div>
        <div className='flex relative items-center'>
          <input type="text" placeholder='Search...' className='cursor-text rounded-xl border-[1.6px] border-black placeholder-stone-400 px-2 py-1 flex placeholder:font-inter placeholder:italic' />
          <img src={Search} alt="" className='w-5 absolute right-2 cursor-pointer'/>
        </div>
      </div>
      <div className="w-[45%] flex  items-center justify-evenly">
        <div className='text-lg font-inter  font-medium cursor-pointer'>Projects</div>
        <div className='rounded-xl border-[1.6px] border-black px-2 cursor-pointer flex gap-1 items-center'>
          <img src={Plus} alt=""  className='w-4'/>
          <div className='text-lg font-inter font-medium '>Post</div>
        </div>
        <div className='w-7 cursor-pointer'>
          <img src={Plane} alt="Requested" />
        </div>
        <div className='w-7 cursor-pointer'>
          <img src={Bell} alt="Requested" />
        </div>
        <div className='w-7 cursor-pointer'>
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
