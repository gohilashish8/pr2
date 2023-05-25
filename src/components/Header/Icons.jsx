import React from 'react'
import { BsCart2, BsSearch } from "react-icons/bs";

const Icons = () => {
  return (
    <div className="flex flex-row space-x-6">
        <a href="#">
          <BsSearch className='hover:text-[#c39a58] text-[20px]'/>
        </a>
        <a href="#">
        <BsCart2 className='hover:text-[#c39a58] text-[20px]'/>
        </a>
         
    </div>
  )
}

export default Icons
