import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";


const Search = () => {

    const [searchText, setSearchText] = useState('');
    console.log(searchText)

    return (
        <>
            <div className='w-full max-w-xl relative flex'>
                <input type="text" 
                    onChange={(e) => setSearchText(e.target.value)} className="w-full border border-red-500 border-r-0 pl-12 py-3 rounded-1-md focus:outline-none" placeholder="Search" />
                <button className="bg-red-500 border border-red-500 text-white px-8 rounded-r-md hover:bg-transparent hover:text-red-500 transition duration-150"><BiSearch /></button>
            </div>
        </>
    )
}

export default Search