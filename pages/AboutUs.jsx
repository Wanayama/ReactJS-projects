import React from 'react'
import about from '../assets/about.JPG'
import { FaTag } from "react-icons/fa";
import { MdGroups, MdVerified, MdAccountCircle } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import about2 from '../assets/about2.JPG'

const AboutUs = () => {
  return (
    <><div className='mb-3'>
      <img src={about} alt='aboutimg' />
    </div><div className='container justify-center items-center'>
        <div className='flex flex-col text-gray-600 justify-center items-center'>
          <h1 className='text-2xl font-bold'>About Us</h1>
          <p className='text-center mt-6'>ChukaShopee is Chuka's largest trusted online classifieds platform that conveniently connects buyers and sellers.
            ChukaShopee is a registered trademark of Chuka University, operated in Chuka by Computer Science Department.</p>
        </div>

        <div className='flex justify-center items-center gap-7 mt-20'>
          <div className='px-4 py-4 shadow-lg rounded text-center'>
            <h3 className='text-2xl font-bold text-gray-600 mb-3'>Sell what you have</h3>
            <p className='text-gray-600'>Sell with us as an individual or business across <br /> different categories</p>
            <div className='flex gap-4 mb-4 items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <div className='bg-red-500 p-3 rounded-full text-lg text-white hover:bg-red-700'>
                  <FaTag size={40} />
                </div>
                <span className='text-gray-600 text-xs'>Post free ads</span>
              </div>
              <div className='flex flex-col items-center mt-3 justify-center'>
                <div className='p-3 bg-red-500 rounded-full text-lg text-white hover:bg-red-700'>
                  <MdGroups size={40} />
                </div>
                <span className='text-gray-600 text-xs'>Thousands of<br /> potential buyers</span>
              </div>
            </div>
          </div>
          <div className='px-4 py-4 shadow-lg rounded text-center'>
            <h3 className='text-2xl font-bold text-gray-600 mb-3'>Buy what you need</h3>
            <p className='text-gray-600'>Find whatever you need easily no matter your<br /> budget</p>
            <div className='flex gap-4 mb-4 mt-3 items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <div className='bg-red-500 p-3 rounded-full text-lg text-white hover:bg-red-700'>
                  <MdVerified size={40} />
                </div>
                <span className='text-gray-600 text-xs'>Buy from verified <br />sellers</span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='p-3 bg-red-500 rounded-full text-lg text-white hover:bg-red-700'>
                  <MdAccountCircle size={40} />
                </div>
                <span className='text-gray-600 text-xs'>Reliable customer<br /> service support</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-gray-200 mt-12 relative'>
        <div className='container text-gray-600'>
          <div className='flex flex-col'>
            <h2 className='text-2xl mt-8 font-bold text-center'>Safety as a seller</h2>
            <div className='flex justify-between'>
              <div className='flex flex-col items-start'>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Ensure you upload an accurate image of the item</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Ensure you give an active phone number and email address</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Beware of spam messages</p>
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Meet buyers in a safe public place</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Make sure you receive payment before releasing a product</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Ensure your phone remains on, in order to receive calls<br/> from any potential buyers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white mt-12 relative'>
        <div className='container text-gray-600'>
          <div className='flex flex-col'>
            <h2 className='text-2xl mt-8 font-bold text-center'>Safety as a Buyer</h2>
            <div className='flex justify-between'>
              <div className='flex flex-col items-start'>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Insist on inspecting the product before buying it</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Meet the seller in a public place</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Inquire about delivery before you make your purchase</p>
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>It is safest to contact the seller through the provided <br/> Contact Seller section on the ad.
                     This way we have your<br/> contact information and can contact you should we track<br/> fraudulent
                      behavior.</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Only make the payment upon receipt of the product<br/> from any potential buyers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={about2} alt='about'/>
      </div>

      <div className='bg-white mt-12 relative'>
        <div className='container text-gray-600'>
          <div className='flex flex-col'>
            <h2 className='text-2xl mt-8 font-bold text-center'>Identifying Fraud</h2>
            <div className='flex justify-between'>
              <div className='flex flex-col items-start'>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Check out the product and price - is it reasonable or too<br/> good to be true?</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Are you being asked to pay via unknown payment systems,<br/> wire transfer or via upfront payment?</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Is the seller trying to prove the authenticity without being<br/> asked?</p>
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Is the seller unwilling to answer relevant questions, or not<br/> answering his/her phone?.</p>
                </div>
                <div className='flex justify-center mt-5 mb-5 items-center gap-3'>
                  <div className='p-2 bg-red-500 rounded-full text-white'><BsCheck2Circle size={20} /></div>
                  <p>Is the seller unwilling to use traceable transport methods?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs