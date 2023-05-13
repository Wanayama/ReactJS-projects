import React from 'react'
import {FaBars, FaUtensils} from 'react-icons/fa'
import {TbSofa} from 'react-icons/tb'
import { GiAmpleDress } from "react-icons/gi";
import {MdOutlineComputer, MdOutlineHouse} from 'react-icons/md'
import {Link, useNavigate} from 'react-router-dom'
import { auth } from '../../Firebase/config';
import { toast } from 'react-toastify';
import ShowOnLogin, { ShowOnLogout } from '../hiddenlinks/hiddenLinks';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const navigate = useNavigate()
  
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
    <>
    <nav className='hidden md:block bg-gray-800'>
      <div className='container flex'>
        <div className='z-100 px-8 py-4 bg-red-500 flex items-center cursor-pointer relative group'>
          <span className='text-white'><FaBars/></span>
          <span className='capitalize ml-2 text-white'>All categories</span>

          
          <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-400 divide-dashed hidden group-hover:block transition duration-300'>
            <Link className='flex items-center px-6 py-3 hover:bg-gray-100 transition duration-150' to="/products">
              <TbSofa className='w-5 h-5 object-contain'/>
              <span className='ml-6 text-sm text-gray-600'>Furniture</span>
            </Link>
            <Link className='flex items-center px-6 py-3 hover:bg-gray-100 transition duration-150' to="/products">
              <FaUtensils className='w-5 h-5 object-contain'/>
              <span className='ml-6 text-sm text-gray-600'>Kitchen</span>
            </Link>
            <Link className='flex items-center px-6 py-3 hover:bg-gray-100 transition duration-150' to="/products">
              <GiAmpleDress className='w-5 h-5 object-contain'/>
              <span className='ml-6 text-sm text-gray-600'>Beauty&Fashion</span>
            </Link>
            <Link className='flex items-center px-6 py-3 hover:bg-gray-100 transition duration-150' to="/products">
              <MdOutlineComputer className='w-5 h-5 object-contain'/>
              <span className='ml-6 text-sm text-gray-600'>Electronics</span>
            </Link>
            <Link className='flex items-center px-6 py-3 hover:bg-gray-100 transition duration-150' to="/products">
              <MdOutlineHouse className='w-5 h-5 object-contain'/>
              <span className='ml-6 text-sm text-gray-600'>Rentals</span>
            </Link>

          </div>
        </div>
        <div className='flex items-center justify-between flex-grow pl-12'>
          <div className='flex items-center space-x-6 capitalize'>
            <Link className='text-gray-200 hover:text-white transition duration-150' to="/">Home</Link>
            <Link className='text-gray-200 hover:text-white transition duration-150' to="/aboutus">AboutUs</Link>
            <Link className='text-gray-200 hover:text-white transition duration-150' to="/products">Products</Link>
            <ShowOnLogin>
              <Link className='text-gray-200 hover:text-white transition duration-150' to="/user">Dashboard</Link>
            </ShowOnLogin>
          </div>
          <ShowOnLogout>
           <Link className='text-gray-200 hover:text-white transition duration-150' to="/login">Login/Register</Link>
          </ShowOnLogout>
          <ShowOnLogin>

            <Link onClick={logout} className='text-gray-200 hover:text-white transition duration-150' to="/">Logout</Link>
          </ShowOnLogin>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar