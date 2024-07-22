import React from 'react'
import { FaTruckArrowRight } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineRequestQuote } from "react-icons/md";
import { RiLogoutCircleFill } from "react-icons/ri";

function SideBar() {
  return (
    <div className=' nunito-sans  w-[200px] flex flex-col justify-center items-center h-full my-[70px] ml-[20px]'>
     <div className='flex flex-col text-black font-bold items-center justify-center gap-8  mx-auto'>
      <div className='flex ml-[-10px] gap-2'>
        <span className='bg-red-600 w-[4px] h-[36px]'></span>
        <FaTruckArrowRight className='mt-[6px] text-2xl'/>
        <span className='mt-[6px]'>MY MOVES</span>
      </div> 
      <div className='flex gap-2'>
        <IoPersonSharp className='text-2xl'/>
        <span className=''>MY PROFILE</span>
      </div>
      <div className='flex gap-2'>
        <MdOutlineRequestQuote  className='text-2xl'/>
        <span>GET QUOTE</span>
      </div>
      <div className='flex  ml-[-20px] gap-2'>
      <RiLogoutCircleFill className='text-2xl'/>
      <span>LOGOUT</span>
     </div>
     </div>
    
    </div>
  )
}

export default SideBar
