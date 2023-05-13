import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
function Navbar() {
    const [showMenu, setShowMenu] = React.useState(false)

    const handleNav = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div className='flex justify-between items-center h-24 mx-auto px-2 text-white'>
        <h1 className='text-3xl w-full font-bold text-[#00df9a]' >Brian.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Home</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Company</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Resources</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>About</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {showMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
            
        </div>

        <div className={showMenu ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700 ' : 'fixed left-[-100%]' }>
        <h1 className='text-3xl p-4 w-full font-bold text-[#00df9a]' >Brian.</h1>
            <ul className='pt-12 uppercase'>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>Home</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>Company</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>Resources</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>About</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar