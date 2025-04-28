import React from 'react'
import Loginform from './loginform'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

const page = () => {
  return (
    <div className='w-screen h-screen  pt-6 flex justify-center  bg-gray-200 '>
      <div className='bg-white w-[420px] h-[500px] rounded-2xl '>
        <div className=' flex flex-col items-center justify-center  pt-7 gap-2'>
          <p className='albert-font  text-3xl  font-bold text-[#39D2C0] '>
            Welcome back
          </p>
          <p className='albert-font text-2xl font-medium '>
            let’s get back to the mission
          </p>
        </div>
        <Loginform />
      </div>
    </div>
  )
}

export default page
