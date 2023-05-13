import React, { useEffect, useState } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Carousel({children: document, autoSlide = false, autoSlideInterval = 3000,}){

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? document.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === document.length - 1 ? 0 : curr + 1))

    console.log(document.length)

    useEffect(()=>{
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    },[document])
    return(
        <div className="relative overflow-hidden">
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>
                {document}
                </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-red-500">
                    <BiChevronLeft size={40}/>
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-red-500">
                    <BiChevronRight size={40}/>
                </button>
            </div>
        </div>
    )
}