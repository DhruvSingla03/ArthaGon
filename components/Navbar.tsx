import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

function Navbar(props:any) {
  return (
    <div className='px-3 pt-4'>
        <div className="w-full bg-white border-2 border-black flex justify-between  ">
          <div className="p-3">
              <div className="text-xl font-extrabold
              bold">{props.title}</div>
          </div>
          <div className='p-3 hidden md:inline'>Services</div>
          <div className='p-3 hidden md:inline'>About Us</div>
          <div className='p-3 hidden md:inline'>Works</div>
          <div className="h-full w-24 md:w-36 text-xl border-l-2 bg-yellow-100 border-black p-3 hover:cursor-pointer">Right button</div>
        </div>
    </div>
  )
}

export default Navbar
