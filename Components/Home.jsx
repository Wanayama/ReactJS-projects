import React from 'react'

function Home() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] justify-center mx-auto flex flex-col text-center mt-[-96px] w-full h-screen'>
            <p className='text-[#00df9a] font-bold p-2 text-xl md:text-3xl'>GROWING WITH DATA ANALYSIS</p>
            <h1 className='text-4xl font-bold md:text-6xl lg:text-7xl md:py-6'>Growing with Data.</h1>
            <div>
                <p className='text-xl md:text-4xl lg:text-5xl font-bold'>Fast, flexible financing for</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] p-4 mt-6 rounded-md mx-auto text-xl hover:bg-[#025037] ease-in duration-100'>Get Started</button>
        </div>
    </div>
  )
}

export default Home