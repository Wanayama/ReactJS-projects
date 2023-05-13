import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from "../Firebase/config";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";



export const Products = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [products, setproducts] = useState([])
  const [searchText, setSearchText] = useState('');

  useEffect(() => {

    const fetchProducts = async () => {

      try {
        const q = query(collection(db, "products"));

        const querySnapshot = await getDocs(q);

        const productsArray = []
        querySnapshot.forEach((product) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(product);
          productsArray.push({
            id: product.id,
            name: product.get("name"),
            price: product.get("price"),
            description: product.get("desc"),
            imageURL: product.get("imageURL"),
            category: product.get("category"),
          });

        });
        setproducts(productsArray);

        console.log(productsArray);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }


    }
    fetchProducts()
  }, [setproducts])

  const filterItem = (catItem) =>{
    const result = products.filter((curData)=>{
      return curData.category === catItem;
    })
    setproducts(result);
  }


  return (
    <>
      <div className="mx-auto container py-4 flex items-center gap-3">
        <IoHome className='text-rose-500 text-base' />
        <span className='text-sm text-gray-400'><BiChevronRight /></span>
        <p>Products</p>
      </div>
      <div className='mx-auto container grid grid-cols-4 gap-6 pt-4 pb-16 items-start'>
        <div className='col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden'>
          <div className='divide-y divide-gray-200 space-y-5'>
            {/* category filter */}
            <div>
              <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Categories</h3>
              <div className='flex items-center'>
                <input type='checkbox' onClick={()=>filterItem('Electronics')} className='text-rose-500 focus:ring-0 rounded-sm cursor-pointer' />
                <label className='text-gray-600 ml-3 cursor-pointer'>Electronics</label>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' onClick={()=>filterItem('Beauty&Fashion')} className='text-rose-500 focus:ring-0 rounded-sm cursor-pointer' />
                <label className='text-gray-600 ml-3 cursor-pointer'>Beauty&Fashion</label>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' onClick={()=>filterItem('Kitchen')} className='text-rose-500 focus:ring-0 rounded-sm cursor-pointer' />
                <label className='text-gray-600 ml-3 cursor-pointer'>Kitchen</label>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' onClick={()=>filterItem('Rentals')} className='text-rose-500 focus:ring-0 rounded-sm cursor-pointer' />
                <label className='text-gray-600 ml-3 cursor-pointer'>Rentals</label>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' onClick={()=>filterItem('Furniture')} className='text-rose-500 focus:ring-0 rounded-sm cursor-pointer' />
                <label className='text-gray-600 ml-3 cursor-pointer'>Furniture</label>
              </div>
            </div>
            {/* price filter */}
            <div className='pt-4'>
              <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Price</h3>
              <div className='mt-4 flex items-center'>
                <input type='text' className='w-full border-gray-399 focus:border-rose-500 focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded' placeholder='max' />
                <span className='mx-3 text-gray-500'>-</span>
                <input type='text' className='w-full border-gray-399 focus:border-rose-500 focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded' placeholder='min' />
              </div>
            </div>
          </div>
        </div>
        {/* product display */}
        <div className='col-span-3'>
          <div className='flex gap-2 ml-auto mb-5'>
            <div className='border border-rose-500 w-10 h-9 flex items-center justify-center text-white bg-rose-500 rounded cursor-pointer'>
              <BsGrid3X3GapFill />
            </div>
            <div className='border border-rose-500 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer'>
              <FaListUl />
            </div>
            <div className='max-w-xl w-1/2 relative ml-6 flex'>
                <input type="text" 
                    onChange={(e) => setSearchText(e.target.value)} className="w-full border border-red-500 pl-12 py-1 rounded-md focus:outline-none" placeholder="Search" />
            </div>
          </div>
          <div className='grid grid-cols-3 mb-4 gap-6'>
            {isLoading ? (<h2>Loading...</h2>) : products &&
              <>
                {products.filter((product)=>{
                  return searchText.toLowerCase() === '' ? product : product.name.toLowerCase().includes(searchText)
                }).map((product) => {
                  const { name, price, imageURL } = product;
                  if (!name || typeof price === 'undefined' || !imageURL) return null;
                  return (
                    <Link to={`/products/${product.id}`}>
                      <div key={product.id}>
                        <div className='bg-white shadow rounded overflow-hidden'>
                          <div className='relative'>
                            <img src={product.imageURL} alt="Productimage" className='w-full h-[300px] object-contain' />
                          </div>
                          <div className="pt-4 pb-4 px-4">
                            <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-rose-500 transition'>{product.name}</h4>
                            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                              <p className='text-xl text-rose-500 font-semibold'>Ksh{product.price}</p>
                            </div>
                            <div className="flex items-center">
                              <div className='flex gap-1 text-sm text-yellow-400'>
                                <span><BsStarFill /></span>
                                <span><BsStarFill /></span>
                                <span><BsStarFill /></span>
                                <span><BsStarHalf /></span>
                                <span><BsStar /></span>
                              </div>
                              <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                          </div>
                          <button className='flex  w-full py-1 text-center items-center justify-center text-white bg-rose-500 border border-rose-500 rounded-b hover:bg-transparent hover:text-rose-500 transition'><IoMdCall />Contact Seller</button>

                        </div>
                      </div>
                    </Link>
                  )
                })}
              </>

            }
          </div>
        </div>
      </div>
    </>
  )
}

