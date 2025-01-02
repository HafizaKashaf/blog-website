
import React from 'react'


const page = () => {
  return (
    <div className='my-10 w-full'>
        <div className='flex justify-center items-center '>
           
      {/* Right Side */}
      <div className=' flex justify-center items-center w-[50%] '>
      <div className="flex justify-center items-center ">
  <div className="w-full  bg-transparent p-8 rounded-md shadow-md flex shadow-black dark:shadow-white  flex-col gap-[30px] ">
    <div className='flex flex-col gap-[24px]'>
    <h2 className=" font-medium text-[36px] leading-[30px] tracking-[3%]">
    Log in to your account
    </h2>
    <p className='font-normal text-[16px] leading-[24px] mb-2'>Enter your details below</p>
    </div>
    <div >
    <form className='flex flex-col gap-[40px]'>
      

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
      
      <div className='flex justify-between items-center '>
      <div className="mt-6">
        <button
          type="submit"
          className="w-[143px] rounded h-[56px] bg-[#DB4444] text-white hover:bg-red-800"
        >
          Login
        </button>
      </div>
      {/* forgot Password */}
      <div >
    <p className=" text-sm  text-[#DB4444] ">
    Forget Password?{" "}
    </p>
    </div>
    </div>
      
    </form>
    </div>

   
  </div>
</div>
      </div>
    </div>
    </div>
  )
}

export default page
