import React from 'react'
import Logo from '/Logo.svg';
import Facebook from '../assets/Svg/Facebook.svg';
import Twitter from '../assets/Svg/Twitter.svg';
import Instagram from '../assets/Svg/Instagram.svg';
import Linkedin from '../assets/Svg/Linkedin.svg';
import FooterImg from '../assets/Svg/Footer.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();
    const Click = () => {
        navigate('/')
    }

    return (
        <div className='w-full pl-20 pr-10'>
            <div className='w-full flex font-inter justify-between items-center'>
                <div className='flex flex-col justify-center w-1/6'>
                    <div className='w-24 items-center justify-center cursor-pointer mb-4'>
                        <img src={Logo} alt="Sage" onClick={Click} />
                    </div>
                    <div className='font-inter font-semibold text-lg mb-2'>Connect with us</div>
                    <div className='flex items-center w-28 gap-2'>
                        <img src={Facebook} alt="Facebook" className='cursor-pointer' />
                        <img src={Twitter} alt="Twitter" className='cursor-pointer' />
                        <img src={Instagram} alt="Instagram" className='cursor-pointer' />
                        <img src={Linkedin} alt="Linkedin" className='cursor-pointer' />
                    </div>
                </div>
                <div className='text-sm font-medium flex w-2/5 justify-between'>
                    <div className='flex flex-col gap-2'>
                        <div className='cursor-pointer'>About us</div>
                        <div className='cursor-pointer'>Careers</div>
                        <div className='cursor-pointer'>Sitemap</div>
                        <div className='cursor-pointer'>Credits</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='cursor-pointer'>Help center</div>
                        <div className='cursor-pointer'>Grievances</div>
                        <div className='cursor-pointer'>Post a Project</div>
                        <div className='cursor-pointer'>Report Issue</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='cursor-pointer'>Privacy Policy</div>
                        <div className='cursor-pointer'>Terms & conditions</div>
                        <div className='cursor-pointer'>FAQ</div>
                        <div className='cursor-pointer'>Fraud alert</div>
                    </div>
                </div>
                <div className='w-1/4'>
                    <img src={FooterImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
