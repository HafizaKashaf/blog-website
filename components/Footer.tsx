import React from 'react';
import Image from 'next/image';
import qrcode from '@/public/images/qrcode.png';
import google from '@/public/images/google.png';
import appstore from '@/public/images/appstore.png';
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className='w-full  flex justify-center mt-10 bg-black border-t-[1.5px]  '>
        <div className=' w-[80%] h-full mb-10 '>
            {/* links */}
            <div className=" text-white mt-10  flex gap-2 justify-between pb-10 border-b-[1.5px] border-[#FFFFFF] max-sm:justify-center max-sm:gap-10 max-sm:flex-col ">
            
            <div className="flex flex-col gap-[16px] max-smzz max-sm:hidden ">
                <p className=" text-[24px] leading-[24px] font-bold">404FoundDiaries</p>
                <p className="text-[20px] leading-[28px] font-normal">Subscribe</p>
                <p className="text-[16px] leading-[24px] font-normal text-[#FAFAFA]">Explore and learn with us</p>
                <div className='w-[217px] h-[48px] border-[1.5px] border-[#FAFAFA] rounded flex justify-between px-2 items-center '>
               <input type='text' placeholder='Enter your email' className='border-[1.5px] outline-none rounded border-black bg-black placeholder:text-[16px] w-[130px] h-[24px]'/>
               <button>
                  <VscSend className='w-[24px] h-[24px]' />
               </button>
               </div>
            </div>
           
            <div className=" w-[175px] flex flex-col gap-[16px] ">
                <p className="text-[20px] leading-[28px] font-semibold">Support</p>
                <p className="text-[16px] leading-[24px]">Silicon Valley, CA, USA</p>
                <p className="text-[16px] leading-[24px]">example@coderblog.com</p>
                <p className="text-[16px] leading-[24px]">123-456-7890</p>
            </div>
            <div className=" flex flex-col gap-[16px] ">
                <p className="text-[20px] leading-[28px] font-semibold">Account</p>
                <p className="text-[16px] leading-[24px]">My Account</p>
                <p className="text-[16px] leading-[24px]">Login / Register</p>
                <p className="text-[16px] leading-[24px]">blog</p>
                <p className="text-[16px] leading-[24px]">code </p>
                <p className="text-[16px] leading-[24px]">Knowledge</p>
            </div>
            <div className=" flex flex-col gap-[16px] ">
                <p className="text-[20px] leading-[28px] font-semibold">Quick Link </p>
                <p className="text-[16px] leading-[24px]">Privacy Policy</p>
                <p className="text-[16px] leading-[24px]">Terms Of Use</p>
                <p className="text-[16px] leading-[24px]">FAQ</p>
                <p className="text-[16px] leading-[24px]">Contact</p>
                
            </div>
            <div className=" flex flex-col gap-[16px] max-md:hidden">
                <p className="text-[20px] leading-[24px] font-semibold">Download App </p>
                <p className="text-[12px] leading-[18px] font-normal text-[#FAFAFA]">Save $3 with App New User Only </p>

                <div className='flex flex-row gap-[8px]'>
                   <Image src={qrcode} alt='qrcode'/>
                   <div className='flex flex-col gap-[8px]'>
                      <Image src={google} alt='google' />
                      <Image src={appstore} alt='appstore' />
                   </div>
                </div>
                <div className='flex flex-row gap-[24px]'>
                    < RiFacebookLine className='w-[24px] h-[24px]'/>
                    < CiTwitter className='w-[24px] h-[24px]' />
                    < FaInstagram className='w-[24px] h-[24px]'/>
                    < FaLinkedinIn className='w-[24px] h-[24px]'/>
                </div>
                
            </div>
        </div>
        {/* credit */}
        <div className=' text-center text-[#FFFFFF] flex gap-[12px] justify-center text-[16px]'>
            <p> ©</p>
            <p>Copyright Rimel 2022. All right reserved</p>
            
        </div>
       
        </div>
        
      
    </div>
  )
}

export default Footer
