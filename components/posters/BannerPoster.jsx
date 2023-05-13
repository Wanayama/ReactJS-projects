import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase/config';
import Carousel from '../carousel/Carousel';


const BannerPoster = () => {
  const [document, setDocument] = useState(0);

  useEffect(() => {
    const fetchBanner = async () => {
      try {

        const q = query(collection(db, "posterInfo"));


        const querySnapshot = await getDocs(q);

        const productsArray = []
        querySnapshot.forEach((poster) => {
          console.log(poster);
          productsArray.push({
            imageURL: poster.get("imageURL"),
          });

        });
        setDocument(productsArray);

        console.log(productsArray);
      } catch (error) {
        console.log(error.message);
      }

    }
    fetchBanner()
  }, [])

  return (
    <div key={document.id} className=" max-w-7xl">
      <Carousel autoSlide = {true}>
        {document && document.map(doc => (
          <img src={doc.imageURL} alt="banner ad" className='w-full object-contain ' />
        ))}
      </Carousel>
    </div>
  )
}

export default BannerPoster