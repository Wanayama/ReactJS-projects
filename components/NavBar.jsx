import React from 'react'
import {useState} from "react";
import {FaTimes, FaBars} from 'react-icons/fa'

function NavBar() {
    const [Nav, setNav] = useState(false);


    const links=[
        {
            id:1,
            link: 'Home'
        },
        {
            id:2,
            link: 'About'
        },
        {
            id:3,
            link: 'Portfolio'
        },
        {
            id:4,
            link: 'Experience'
        },
        {
            id:5,
            link: 'contact'
        }
    ]
  return (
    <div className='flex justify-between items-center h-20 w-full bg-black text-white px-4 fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Brian</h1>
        </div>

        <ul className='hidden md:flex'>

            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>{link}</li>
            ))} 
        </ul>
        <div 
        onClick={() => setNav(!Nav)}
        className='cursor-pointer text-gray-500 z-10 pr-4 md:hidden'>
            {Nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {Nav && (
              <ul className='flex flex-col justify-center items-center absolute bg-gradient-to-b from-black to-gray-800 top-0 left-0 w-full h-screen'>
              {links.map(({id, link}) => (
                      <li key={id} className='py-6 text-4xl cursor-pointer text-gray-500'>{link}</li>
                  ))} 
              </ul>
        )}

      
    </div>
  )
}

export default NavBar