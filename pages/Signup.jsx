import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../Firebase/config';


const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e)=>{
    e.preventDefault();
    //console.log(email, password, cPassword)
    if(password !== cPassword){
      toast.error('Password does not match.')
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate("/");
  })
  .catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;
    toast.error(error.message);
        setIsLoading(false);
  });
  }



  return (
    <>
    <ToastContainer />
    {isLoading && (<h2>Loading...</h2>)}
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className='bg-white rounded-xl px-7 shadow-lg p-8 text-black'>
      <form onSubmit={registerUser} className='flex flex-col space-y-3'>
        <div>
          <h1 className='font-bold text-2xl'>Welcome to ChukaShopee</h1>
        </div>
        <div>
          <label className='text-sm'>Enter Email Address</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md pl-6 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' placeholder='example@gmail.com' required/>
        </div>
        <div>
          <label className='text-sm'>Enter Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' placeholder='Password' required/>
        </div>
        <div>
          <label className='text-sm'>Confirm password</label>
          <input type='password' value={cPassword} onChange={(e) => setCPassword(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' placeholder='Confirm Password' required/>
        </div>
        <button type='submit' className='inline-block self-center bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Register</button>
        <p>
          Do you have an account? <Link to='/login' className='font-bold'>Login</Link>
        </p>
      </form>
      </div>
    </div>
    </>
  )
}

export default Signup