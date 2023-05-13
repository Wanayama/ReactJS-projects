import { onAuthStateChanged, signOut } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, getDocs, query, Timestamp, where } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { MdOutlineAccountCircle, MdDeleteForever } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UploadPoster from '../components/popup form/UploadPoster'
import { auth, db, storage } from '../Firebase/config'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../redux/slice/authSlice'
import { ToastContainer } from 'react-toastify';
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";






function User() {

  const initialState = {
    imageURL: "",
  };

  const [displayName, setDisplayName] = useState("")
  const [products, setproducts] = useState([])
  const dispatch = useDispatch()
  const [uploadProgress, setUploadProgress] = useState(0);
  const [product, setProduct] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        if (user.displayName == null) {
          const uName = user.email.substring(0, user.email.indexOf("@"));
          const u1 = uName.charAt(0).toUpperCase() + uName.slice(1);
          setDisplayName(u1)
        } else {

          setDisplayName(user.displayName)
        }

        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayName,
          userID: user.uid,
        }))
      } else {
        setDisplayName('');
        dispatch(REMOVE_ACTIVE_USER());
      }
    })
  }, [dispatch, displayName]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const q = query(collection(db, "products"));


        const querySnapshot = await getDocs(q, where("users", "==", "userUID"));

        const productsArray = []
        querySnapshot.forEach((product) => {
          console.log(product);
          productsArray.push({
            id: product.id,
            name: product.get("name"),
            price: product.get("price"),
            description: product.get("desc"),
            imageURL: product.get("imageURL"),
          });

        });
        setproducts(productsArray);

        console.log(productsArray);
      } catch (error) {
        console.log(error.message);
      }

    }
    fetchProducts()
  }, [])


  const navigate = useNavigate()

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);

    const storageRef = ref(storage, `posters/${Date.now()}${file.name}`);
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
        console.log(uploadProgress)
      }
    );
  };

  const uploadPoster = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const productData = {
        imageURL: product.imageURL,
        createdAt: Timestamp.now().toDate(),
        userUID: auth.currentUser.uid,
      }
      const docRef = addDoc(collection(db, "posterInfo"), productData);
      console.log("Document written with ID: ", docRef.id);
      setIsLoading(false);
      setUploadProgress(0);
      setProduct({ ...initialState });

      toast.success("Poster uploaded successfully.");
      navigate("/user");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  }


  const deleteProduct = async (product) => {
    await deleteDoc(doc(db, 'products', product.id));
    toast.success('Item deleted successfully.');
    setIsLoading(false);
  }

  const [showPoster, setShowPoster] = useState(false)

  return (
    <>
    {isLoading ? (<h2>Loading...</h2>) : products &&
      <><ToastContainer /><div className='mx-auto container grid grid-cols-4 gap-6 pt-4 pb-16 items-start'>
          <div className='col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden'>
            <div className='divide-y divide-gray-200 space-y-5'>
              <div className='px-2 py-4 mb-6 justify-center items-center'>
                <MdOutlineAccountCircle className='text-6xl' />
                {displayName}
              </div>
              <div className='text-md px-2 py-4'>
                <Link onClick={logout} to="/">Logout</Link>
              </div>
              <div className='text-md px-2 py-4'>
                <button onClick={() => setShowPoster(true)}>Upload Poster</button>
              </div>
            </div>
          </div>

          <div className=' col-span-3 '>
            <div className='text-3xl font-bold'>
              <h1>Manage your products here...</h1>
            </div>
            <div className='grid grid-cols-4 mb-4 gap-6'>
              {products.map((product) => {
                const { name, price, imageURL } = product
                if (!name || typeof price === 'undefined' || !imageURL)
                  return null
                return (
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
                      <button onClick={() => deleteProduct(product)} className='flex  w-full py-1 text-center text-xl items-center justify-center text-white bg-rose-500 border border-rose-500 rounded-b hover:bg-transparent hover:text-rose-500 transition'><MdDeleteForever /></button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div></>
    }
      <UploadPoster isVisible={showPoster} onClose={() => setShowPoster(false)}>
        <form onSubmit={uploadPoster} className='flex flex-col space-y-3'>
          <div>
            <h1 className='font-bold text-2xl'>Upload your business poster here...</h1>
          </div>
          <div>
            <label className='text-md'>Select image</label>
            <input type='file' name="image" accept="image/*" onChange={(e) => handleImageChange(e)} className='ring-1 ring-gray-300 w-full rounded-md pl-6  py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300' required />
          </div>
          <p className='text-red-500 text-xs'>*Adverts will only be displayed for<br/> a period of 1 week</p>

          <button type='submit' className='inline-block self-center bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Upload Poster</button>
        </form>
      </UploadPoster>
    </>
  )
}

export default User