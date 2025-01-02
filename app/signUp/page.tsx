import React from 'react';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';

const page = () => {
  return (
    <div className='my-10 h-full flex items-center justify-center w-full'>
       
      
      {/* Right Side */}
      
      <div className="flex justify-center items-center ">
  <div className="w-full  bg-transparent p-8 rounded-md shadow-lg flex shadow-black dark:shadow-white flex-col gap-[20px] ">
    <div className='flex flex-col gap-[16px]'>
    <h2 className=" font-medium text-[36px] leading-[30px] tracking-[3%]">
      Create an Account
    </h2>
    <p className='font-normal text-[16px] leading-[24px] mb-2'>Enter your details below</p>
    </div>
    <div >
    <form className='flex flex-col gap-[25px]'>
      {/* Name Input */}
      <div className="border-b border-gray-300">
       
        <input
          type="text"
          id="name"
          className="outline-none bg-transparent"
          placeholder="Name"
        />
      </div>

      {/* Email/Phone Input */}
      <div className="border-b border-gray-300">
      
        <input
          type="email"
          id="email"
          className="outline-none bg-transparent"
          placeholder="Email or Phone number"
        />
      </div>

      {/* Password Input */}
      <div className="border-b border-gray-300">
        
          
        <input
          type="password"
          id="password"
          className="outline-none bg-transparent"
          placeholder="Password"
        />
      </div>

      {/* Submit Button */}
      
      <div className="mt-2">
        <button
          type="submit"
          className="w-full rounded h-[56px] bg-[#DB4444] text-white hover:bg-red-800"
        >
          Create Account
        </button>
      </div>
      
      

      {/* Google Login */}
      <div className="w-full rounded h-[56px] flex items-center justify-center border">
        <button
          type="submit"
          className=" flex gap-[16px] "
        >
            <FaGoogle className="text-3xl" />
         <h1>Sign up with Google</h1>
        </button>
      </div>
    </form>
    </div>

    {/* Login Redirect */}
    
    <div>
    <p className=" text-sm text-gray-500 text-center">
      Already have  account?{" "}
      
      <Link
        href="/login"
        className="text-blue-500 hover:underline"
      >
        Log in
      </Link>
      
    </p>
    </div>
   
  </div>
</div>
      </div>
    
    
  )
}

export default page
