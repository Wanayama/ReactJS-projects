import React from 'react'
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const footer = () => {
  return (
    <>
    <div className="bg-black text-white mt-5">
      <div className="container flex justify-between py-16 px-14 w-full">
      <div className="grid grid-cols-3 gap-3 space-x-6 space-y-2 justify-center items-center">
        <Link to='/aboutus'>
          <h2 className="text-sm text-gray-400 hover:text-white">About Chukashopee</h2>
        </Link>
        <Link to='/post'>
          <h2 className="text-sm text-gray-400 hover:text-white">Sell Online</h2>
        </Link>
        <Link to='/privacy'>
          <h2 className="text-sm text-gray-400 hover:text-white">Privacy Policy</h2>
        </Link>
        <Link to='/'>
          <h2 className="text-sm text-gray-400 hover:text-white">Home</h2>
        </Link>
      </div>
      <div className="flex flex-col ml-10 w-1/3 justify-center items-center">
        <h2 className='text-lg text-gray-400 mb-2'>Follow Chukashopee</h2>
        <div className='border border-white w-full mb-5'></div>
        <div className='flex space-x-4 text-xl px-4'>
            <Link className='hover:text-rose-500' to='Facebook.com'><BsFacebook/></Link>
            <Link className='hover:text-rose-500' to='Twitter.com'><BsTwitter/></Link>
            <Link className='hover:text-rose-500' to='Linked-in.com'><BsLinkedin/></Link>
            <Link className='hover:text-rose-500' to='Instagram.com'><BsInstagram/></Link>
          </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default footer