import React, { useEffect, useState } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/config';
import { useDispatch } from 'react-redux'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import Search from '../search/Search';
import ShowOnLogin from '../hiddenlinks/hiddenLinks';
const Header = () => {

  const [displayName, setDisplayName] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        if (user.displayName == null) {
          const uName = user.email.substring(0, user.email.indexOf("@"));
          const u1 = uName.charAt(0).toUpperCase() + uName.slice(1);
          setDisplayName(u1)
        } else {

          setDisplayName(user.displayName)
        }

        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayName,
          userID: user.uid,
        }))
      } else {
        setDisplayName('');
        dispatch(REMOVE_ACTIVE_USER());
      }
    })
  }, [dispatch, displayName])
  return (
    <>
      <header className="sticky z-30  top-0 py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <div className="text-3xl px-5">
            <h1 className="text-black">Chuka<span className='text-red-500'>Shopee.co.ke</span></h1>
          </div>
          <Search />
          <div className='flex justify-center items-center px-5 space-x-10'>
            <ShowOnLogin>
              <Link to="/post">
                <button className="bg-red-500 border border-red-500 text-white px-8 py-2 rounded hover:bg-transparent hover:text-red-500 transition duration-150">POST</button>
              </Link>
            </ShowOnLogin>
            <div className='flex flex-col justify-center items-center'>
              <Link to="/user" className="inline-block self-center text-black">
                <MdOutlineAccountCircle className='text-5xl' />
                {displayName}
              </Link>
            </div>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header