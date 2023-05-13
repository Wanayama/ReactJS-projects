import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AiOutlineGoogle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../Firebase/config';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate('/')
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successfully");
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
    <>
    {isLoading && (<h2>Loading...</h2>)}
    <ToastContainer />
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className='bg-white rounded-xl px-7 shadow-lg p-8 text-black'>
      <form onSubmit={loginUser} className='flex flex-col space-y-3'>
        <div>
          <h1 className='font-bold text-2xl'>Login</h1>
        </div>
        <div>
          <label className='text-sm'>Enter Email Address</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' placeholder='example@gmail.com' required/>
        </div>
        <div>
          <label className='text-sm'>Enter Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' placeholder='Password' required/>
        </div>
        <button className='inline-block self-center bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Login</button>
        <div>
          <Link to='/reset'>
          <h2 className='text-sm'>Forgot your password?</h2>
          </Link>
        </div>
        <p className='text-md inline-block self-center'>--or--</p>
        <button type='submit' onClick={signInWithGoogle}  className='flex self-center bg-red-500 text-white justify-center items-center space-x-2 font-bold rounded-lg px-6 py-2 uppercase text-sm'><AiOutlineGoogle className='text-3xl'/>Login with Google</button>
        <p>
          Don't have an account? <Link to='/signup' className='font-bold'>SignUp</Link>
        </p>
      </form>
      </div>
    </div>
    </>
  )
}

export default Login