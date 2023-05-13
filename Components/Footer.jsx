import React from 'react'
import {FaFacebookSquare,
        FaGithubSquare,
        FaTwitterSquare,
        FaDribbbleSquare,
        FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <section className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='text-3xl w-full font-bold text-[#00df9a]' >Brian.</h1>
        <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Excepturi laborum ipsam distinctio magni explicabo labore commodi
              voluptatibus delectus adipisci fugit, officia nemo deserunt iusto?
               Est rerum doloremque soluta dolor veritatis.</p>
               <div className='justify-between flex md:w-[75%] my-6 '>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaGithubSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaDribbbleSquare size={30} />
               </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
            <h4 className='font-medium text-gray-400'>
                Solutions
            </h4>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
            </div>
            <div>
            <h4 className='font-medium text-gray-400'>
            Support
            </h4>
            <ul>
                <li className='py-2 text-sm'>pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API status</li>
            </ul>
            </div>
            <div>
            <h4 className='font-medium text-gray-400'>
                Company
            </h4>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
            </ul>
            </div>
            <div>
            <h4 className='font-medium text-gray-400'>
                Legal
            </h4>
            <ul>
                <li className='py-2 text-sm'>Claims</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
            </div>
           
        </div>

    </section>
  )
}

export default Footer