// import React, { useEffect, useState } from 'react'
// import { collection, getDocs, query } from 'firebase/firestore'
// import { db } from "../../Firebase/config";
// import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
// import { IoMdCall } from "react-icons/io";
// import Loader from '../loader/Loader'
// import { Link } from 'react-router-dom';

// const ProductsList = () => {

//     const [isLoading, setIsLoading] = useState(true)
//     const [products, setproducts] = useState([])

//     useEffect(() => {

//         const fetchProducts = async () => {

//             try {
//                 const q = query(collection(db, "products"));

//                 const querySnapshot = await getDocs(q);

//                 const productsArray = []
//                 querySnapshot.forEach((product) => {
//                     // doc.data() is never undefined for query doc snapshots
//                     console.log(product);

//                     // setproducts(...products,{
//                     //   id: product.id,
//                     //   name: product.data(),
//                     //   price: product.data(),
//                     //   description: product.data(),
//                     //   imageURL: product.data()
//                     // })
//                     productsArray.push({
//                         id: product.id,
//                         name: product.get("name"),
//                         price: product.get("price"),
//                         description: product.get("desc"),
//                         imageURL: product.get("imageURL"),
//                         category: product.get("category"),
//                     });

//                 });
//                 setproducts(productsArray);

//                 console.log(productsArray);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.log(error.message);
//             }


//             // try {
//             //     const productsRef = getDocs (collection(db, "products"))

//             //     const q = query(
//             //       productsRef,
//             //         where('name', '==', params.name) 
//             //         )
//             //     const qSnap = await getDocs(q)

//             //     const productsArray = []
//             //     qSnap.forEach((product) => {
//             //         return productsArray.push({
//             //             id: product.id,
//             //             name: product.data(),
//             //             price: product.data(),
//             //             description: product.data(),
//             //             imageURL: product.data()
//             //         })
//             //     })
//             //     setproducts(productsArray)
//             //     setIsLoading(false)
//             //     console.log(fetchProducts)
//             // } catch (error) {
//             //     console.log(error)

//             // }

//         }
//         fetchProducts()
//     }, [setproducts])
//     return (
//         <>
//             {isLoading ? <Loader /> : products &&
//                 <>
//                     {products.map((product) => {
//                         const { name, price, imageURL } = product;
//                         if (!name || typeof price === 'undefined' || !imageURL) return null;
//                         return (
//                             <Link to={`/products/${product.id}`}>
//                                 <div key={product.id}>
//                                     <div className='bg-white shadow rounded overflow-hidden'>
//                                         <div className='relative'>
//                                             <img src={product.imageURL} alt="Productimage" className='w-full h-[300px] object-contain' />
//                                         </div>
//                                         <div className="pt-4 pb-4 px-4">
//                                             <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-rose-500 transition'>{product.name}</h4>
//                                             <div className="flex items-baseline mb-1 space-x-2 font-roboto">
//                                                 <p className='text-xl text-rose-500 font-semibold'>Ksh{product.price}</p>
//                                             </div>
//                                             <div className="flex items-center">
//                                                 <div className='flex gap-1 text-sm text-yellow-400'>
//                                                     <span><BsStarFill /></span>
//                                                     <span><BsStarFill /></span>
//                                                     <span><BsStarFill /></span>
//                                                     <span><BsStarHalf /></span>
//                                                     <span><BsStar /></span>
//                                                 </div>
//                                                 <div className="text-xs text-gray-500 ml-3">(150)</div>
//                                             </div>
//                                         </div>
//                                         <button className='flex  w-full py-1 text-center items-center justify-center text-white bg-rose-500 border border-rose-500 rounded-b hover:bg-transparent hover:text-rose-500 transition'><IoMdCall />Contact Seller</button>

//                                     </div>
//                                 </div>
//                             </Link>
//                         )
//                     })}
//                 </>

//             }
//         </>


//     )
// }

// export default ProductsList