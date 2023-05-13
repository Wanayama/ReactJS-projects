import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../Firebase/config";


const categories = [
  { id: 1, name: "Furniture" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Beauty&Fashion" },
  { id: 4, name: "Rentals" },
  { id: 5, name: "Kitchen" },
];

const initialState = {
  name: "",
  imageURL: "",
  price: 0,
  mobile: 0,
  location: "",
  category: "",
  desc: "",
};


const Post = () => {


  const [product, setProduct] = useState('')

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);

    const storageRef = ref(storage, `eshopee/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success("Image uploaded successfully.");
        });
        console.log(uploadProgress);
      }
    );
  };


  const addProduct = (e) => {
    e.preventDefault();
    // console.log(product);
    setIsLoading(true);

    try {
      const productData = {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        mobile: Number(product.mobile),
        location: product.location,
        category: product.category,
        desc: product.desc,
        createdAt: Timestamp.now().toDate(),
        userUID: auth.currentUser.uid,
      }
      const docRef = addDoc(collection(db, "products"), productData);
      console.log("Document written with ID: ", docRef.id);
      setIsLoading(false);
      setUploadProgress(0);
      setProduct({ ...initialState });

      toast.success("Product uploaded successfully.");
      navigate("/user");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <ToastContainer /><div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className='bg-white rounded-xl px-7 shadow-lg p-8 max-h-screen text-black w-1/2'>
          <form onSubmit={(addProduct)} className='flex flex-col space-y-1 max-w-4xl'>
            <div>
              <h1 className='font-bold text-2xl'>Post an Ad</h1>
            </div>
            <div>
              <label>Product Name</label>
              <input type='text' onChange={(e) => handleInputChange(e)} name="name" value={product.name} className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' required />
            </div>
            <div>
              <label>Price</label>
              <input type='number' onChange={(e) => handleInputChange(e)} value={product.price} name="price" className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' required />
            </div>
            <div className='flex gap-2'>
              <div>
                <label>Enter mobile number</label>
                <input type='number' onChange={(e) => handleInputChange(e)} value={product.mobile} name="mobile" className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' required />
              </div>
              <div>
                <label>Shop Location</label>
                <input type='text' onChange={(e) => handleInputChange(e)} value={product.location} name="location" className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' required />
              </div>
            </div>
            <label>Product Category</label>
            <select
              required
              name="category"
              value={product.category}
              onChange={(e) => handleInputChange(e)}
              className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
            >
              <option value="" disabled>
                -- choose product category --
              </option>
              {categories?.map((cat) => {
                return (
                  <option key={cat?.id} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
            <div>
              <label>Desciption</label>
              <textarea type='text' onChange={(e) => handleInputChange(e)} name="desc" value={product.desc} className='ring-1 ring-gray-300 w-full rounded-md py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' rows="2" placeholder='Type here...' />
            </div>
            <div>
              <label className='text-md'>Select image</label>
              <input type='file' name="image" accept="image/*" onChange={(e) => handleImageChange(e)} className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' required />
            </div>
            <button type='submit'
              className='inline-block self-center bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Post