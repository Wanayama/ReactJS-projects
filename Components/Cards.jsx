import React from 'react'
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full flex flex-col shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='font-medium text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] p-4 mx-auto my-6 px-6 py-3 rounded-md text-xl hover:bg-[#025037] ease-in duration-100'>Start Trial</button>
            </div>
            <div className='w-full flex flex-col shadow-xl bg-gray-100 p-4 rounded-lg md:my-0 my-8 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>partnership</h2>
                <p className='text-center font-bold text-4xl'>$199</p>
                <div className='font-medium text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>1TB Storage</p>
                    <p className='py-2 border-b mx-8 '>3 Granted Users</p>
                    <p className='py-2 border-b mx-8 '>Send upto 10GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] p-4 mx-auto my-6 px-6 py-3 rounded-md text-xl hover:bg-[#025037] ease-in duration-100'>Start Trial</button>
            </div>
            <div className='w-full flex flex-col shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center font-bold text-4xl'>$299</p>
                <div className='font-medium text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>5TB Storage</p>
                    <p className='py-2 border-b mx-8 '>10 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send upto 50GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] p-4 mx-auto my-6 px-6 py-3 rounded-md text-xl hover:bg-[#025037] ease-in duration-100'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards