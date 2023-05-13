import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-4 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Signup to our Newsletter and stay upto date.</p>
            </div>
            <div className='my-4'>
            <div className='flex flex-col sm:flex-row w-full items-center justify-between'>
                <input className='p-3 w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
                <button className='bg-[#00df9a] w-[200px] p-4 ml-2 my-6 px-6 py-3 rounded-md text-xl hover:bg-[#025037] ease-in duration-100'>Notify me</button>
            </div>
            <p>We care about the protection of your data. <span className='text-[#00df9a]'>Read our privacy and policy.</span></p>
            </div>
            
        </div>
    </div>
  )
}

export default Newsletter