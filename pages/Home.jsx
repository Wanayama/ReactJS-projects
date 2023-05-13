import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import bannerAd2 from '../assets/bannerAd2.JPG'
import Electronics from '../assets/electronicsBg.jpg'
import Kitchen from '../assets/kitchenBg.jpg'
import Fashion from '../assets/Fashion.Bg.jpg'
import Rentals from '../assets/rentalsBg.jpg'
import Furniture from '../assets/furnitureBg.jpg'
import {Link} from 'react-router-dom'
import {IoMdCall} from 'react-icons/io'
import {HiMail} from 'react-icons/hi'
import {ImLocation} from 'react-icons/im'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import BannerPoster from '../components/posters/BannerPoster';

const Home = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a8kjdhn', 'template_jtnxrtm', form.current, 'k6qXCWEl5oXEG0d15')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
    <div className=" container w-full relative px-14">
      {/* <img src={bannerAd} alt="banner ad"/> */}
      <BannerPoster className='-z-10' />
    </div>
    <div className='flex justify-center items-center w-full text-gray-600'>
      <h1 className='font-bold font-lg text-3xl'>Buy & sell on Chuka's safest classifieds</h1>
    </div>
    <div className='bg-slate-200'>
    <div className='container py-16 px-14 w-full mt-10'>
      <h2 className="text-3xl font-medium text-gray-800 upercase mb-6">shop by category</h2>
      <div className='grid grid-cols-3 gap-3'>
        <div className='relative rounded-sm overflow-hidden group'>
          <img className='w-full' src={Electronics} alt="Electronics"/>
          <Link className='absolute inset-0 bg-black bg-opacity-40 flex items-center group-hover:bg-opacity-50 justify-center text-xl text-white font-serif font-medium' to='/products'>Electronics</Link>
        </div>
        <div className='relative rounded-sm overflow-hidden group '>
          <img className='w-full object-fit' src={Kitchen} alt="Kitchen"/>
          <Link className='absolute inset-0 bg-black bg-opacity-40 flex items-center group-hover:bg-opacity-50 justify-center text-xl text-white font-serif font-medium' to='/products'>Kitchen</Link>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <img className='w-full object-fit' src={Fashion} alt="Fashion"/>
          <Link className='absolute inset-0 bg-black bg-opacity-40 flex items-center group-hover:bg-opacity-50 justify-center text-xl text-white font-serif font-medium' to='/products'>Beauty&Fashion</Link>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <img className='w-full' src={Rentals} alt="Rentals"/>
          <Link className='absolute inset-0 bg-black bg-opacity-40 flex items-center group-hover:bg-opacity-50 justify-center text-xl text-white font-serif font-medium' to='/products'>Rentals</Link>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <img className='w-full object-contain' src={Furniture} alt="Furniture"/>
          <Link className='absolute inset-0 bg-black bg-opacity-40 flex items-center group-hover:bg-opacity-50 justify-center text-xl text-white font-serif font-medium' to='/products'>Furniture</Link>
        </div>
      </div>
    </div>
    </div>
    <div className='flex justify-center w-full items-center'>
      <img src={bannerAd2} alt='banner ad' />
    </div>
    <div className='bg-slate-200'>
    <div className='flex w-full min-h-screen justify-center items-center'>
      <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-rose-500 max-w-4xl w-full p-8 rounded-xl shadow-lg text-white'>
        <div className='flex flex-col space-y-8  justify-between'>
          <div>
            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
            <p className='pt-2 text-rose-100 text-sm'>If you encounter any problem when using our services please feel free to contact the support team.</p>
          </div>
          <div className='flex flex-col space-y-6'>
            <div className='inline-flex  space-x-2 items-center'>
              <IoMdCall className='text-rose-300 text-xl' />
              <span>+254768258315</span>
            </div>
            <div className='inline-flex  space-x-2 items-center'>
              <HiMail className='text-rose-300 text-xl' />
              <span>brianwanyama06@gmail.com</span>
            </div>
            <div className='inline-flex  space-x-2 items-center'>
              <ImLocation className='text-rose-300 text-xl' />
              <span>Chuka</span>
            </div>
          </div>
          <div className='flex space-x-4 text-lg'>
            <Link to='Facebook.com'><BsFacebook/></Link>
            <Link to='Twitter.com'><BsTwitter/></Link>
            <Link to='Linked-in.com'><BsLinkedin/></Link>
            <Link to='Instagram.com'><BsInstagram/></Link>
          </div>
        </div>
        <div>
            <div className='bg-white rounded-xl px-7 w-full shadow-lg p-8 text-black'>
              <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                <div>
                  <label className='text-sm'>Your Name</label>
                  <input type='text' className='ring-1 ring-gray-300 w-full rounded-md py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' name='user_name' placeholder='Enter Your Name'/>
                </div>
                <div>
                  <label className='text-sm'>Email address</label>
                  <input type='text' className='ring-1 ring-gray-300 w-full rounded-md py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' name='user_email' placeholder='example@gmail.com'/>
                </div>
                <div>
                  <label className='text-sm'>Subject</label>
                  <input type='text' className='ring-1 ring-gray-300 w-full rounded-md py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' name='subject' placeholder='subject'/>
                </div>
                <div>
                  <label className='text-sm'>Message</label>
                  <textarea type='text' className='ring-1 ring-gray-300 w-full rounded-md py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' rows="4" name='message' placeholder='Type here...'/>
                </div>
                <button className='inline-block self-end bg-rose-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
              </form>
            </div>
          </div>
      </div>
    </div>
    </div>
    <div className='flex flex-col justify-center items-center w-full relative mx-auto mt-3'>
      <p className='font-bold text-gray-600 text-2xl py-1'>Grow your Business! Start selling today with Chukashopee!</p>
      <p className='text-gray-600 text-1xl py-2 space-x-3'>We've tailored ad bundles to boost, promote and highlight your business or Ad.</p>
      <Link to="/post">
      <button className='inline-block self-end bg-rose-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Get Started now</button>
      </Link>
    </div>
    </>
  )
}

export default Home