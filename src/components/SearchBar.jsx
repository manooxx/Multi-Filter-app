import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = ({value, changeInput}) => {
  return (
    <div className='flex p-2 px-3 gap-4 items-center  border border-red-800'>
      <FaSearch className='text-2xl text-gray-600 '/>

      <input className='w-full py-2 px-2 text-xl text-gray-500 font-semibold outline-none' type="text" placeholder='WoodLand Hill' value={value} onChange={changeInput} />
      
    </div>
  )
}

export default SearchBar
