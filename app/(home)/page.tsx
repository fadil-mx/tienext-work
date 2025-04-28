import { LogIn, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-200'>
      <div className=' w-[410px] h-80  bg-[#FFFFFF] rounded-3xl '>
        <div className=' mt-4 flex flex-col items-center justify-center  '>
          <p className='albert-font  text-3xl  font-bold text-[#39D2C0] '>
            What’s up buddy!
          </p>
          <p className='albert-font text-2xl font-medium '>
            Let’s get you prepared
          </p>
        </div>
        <div className='flex flex-col mx-9 gap-4 mt-20 '>
          <Link
            href='/sign-up'
            className=' bg-[#39D2C0]  rounded-2xl flex items-center justify-center py-4 cursor-pointer gap-2 '
          >
            <Mail className=''></Mail> Create Account
          </Link>
          <Link
            href='/login'
            className='bg-black text-white rounded-2xl flex items-center justify-center py-4 cursor-pointer gap-2'
          >
            <LogIn className='text-white'></LogIn> Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
