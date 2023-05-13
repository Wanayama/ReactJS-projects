import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiChevronRight } from "react-icons/bi";
import { IoHome, IoLogoWhatsapp } from "react-icons/io5";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import useFetchDocument from '../customHooks/useFetchProduct';


const SingleProduct = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { document } = useFetchDocument("products", id);

  useEffect(() => {
    setProduct(document);
  }, [document]);

  console.log(product)
  return (
    <>
      {product === null ? (<h2>Loading...</h2>) : (
        <div>
          <div className="mx-auto container py-4 flex items-center gap-3">
            <IoHome className='text-rose-500 text-base' />
            <span className='text-sm text-gray-400'><BiChevronRight /></span>
            <p className='text-rose-500 text-base'>Products</p>
            <span className='text-sm text-gray-400'><BiChevronRight /></span>
            <p>{product.name}</p>
          </div>
          {/* //product details section */}
          <div className='mx-20 container overflow-x-hidden flex gap-6'>
            <div className='w-[350px] aspect-square rounded shadow-sm'>
              <img src={product.imageURL} alt={product.name} className='w-full cover' />
            </div>
            <div>
              <h2 className='text-3xl font-medium uppercase mb-2'>{product.name}</h2>
              <div className='flex gap-1 text-sm text-yellow-400 mb-4'>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarHalf /></span>
                <span><BsStar /></span>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
              <div className='space-y-2'>
                <p className='text-gray-800 font-semibold space-x-2'>
                  <span>Availability:</span>
                  <span className='text-green-600'>In Stock</span>
                </p>
                <p className='space-x-2'>
                  <span className='text-gray-800 font-semibold'>Category:</span>
                  <span className='text-gray-600'>{product.category}</span>
                </p>
                <p className='space-x-2'>
                  <span className='text-gray-800 font-semibold'>Product ID:</span>
                  <span className='text-gray-600'>{product.id}</span>
                </p>
              </div>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-6">
                <p className='text-xl text-rose-500 font-semibold'>Ksh{product.price}</p>
              </div>
              <div>
                <span className='mt-4 text-gray-800 font-semibold'>Description</span>
                <ul>
                  <li className='mt-1 text-gray-800'>
                    {product.desc}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-rose-500 text-2xl mt-4'>Contact Seller</h3>
                <h4 className='text-gray-600 text-xs '>Contact via phone</h4>
                <button className='bg-green-500 px-4 rounded text-white border border-green-500 hover:bg-transparent hover:text-green-500 flex justify-center items-center'><IoLogoWhatsapp className='mr-4' />Whatsapp</button>
                <button className='bg-red-500 px-4 rounded text-white border border-red-500 hover:bg-transparent hover:text-red-500 mt-2 flex justify-center items-center'><IoMdCall className='mr-4' />+{product.mobile}</button>
              </div>
              <div className='bg-gray-200 mt-14 px-4 border border-red-500 shadow-md rounded'>
                <h4 className='text-gray-800 font-semibold text-2xl mb-4'>Safety tips</h4>
                <ul>
                  <li className='mb-2 text-gray-600'>1.Do not pay in advance, even for delivery.</li>
                  <li className='mb-2 text-gray-600'>2.Meet the seller in a safe public place.</li>
                  <li className='mb-2 text-gray-600'>3.Inspect the item and make sure it is exactly what you want.</li>
                  <li className='mb-2 text-gray-600'>4.Make sure the packaged item is what you inspected</li>
                  <li className='mb-2 text-gray-600'>5.Pay only if you are satisfied.</li>
                </ul>
                <Link to='/privacy'>
                  <p className='text-red-500 px-6'>Read more about our safety tips</p>
                </Link>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleProduct
