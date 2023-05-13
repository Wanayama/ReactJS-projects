import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../Firebase/config'


const Reset = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };


  return (
    <>
    {isLoading && (<h2>Loading...</h2>)}
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className='bg-white rounded-xl px-7 shadow-lg p-8 text-black'>
      <form onSubmit={resetPassword} className='flex flex-col space-y-3'>
        <div>
          <h1 className='font-bold text-2xl'>Reset Password</h1>
        </div>
        <div>
          <label className='text-sm'>Enter Email Address</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md pl-6 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' placeholder='example@gmail.com' required/>
        </div>
        <button type='submit' className='inline-block self-center bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Reset Password</button>
      </form>
      <div className='flex justify-between items-center mt-4'>
        <Link to='/login'>-Login</Link>
        <Link to='/signup'>-Register</Link>
      </div>
      </div>
    </div>
    </>
  )
}

export default Reset