import React,{useState} from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { ImCheckboxChecked } from "react-icons/im";
import Accordian1 from './Accordian1';

function ShowPage({post}) {
  const[activeIndex,setActiveIndex]=useState(null);
   

    
      
  
  const toggleIndex=(index)=>{
    setActiveIndex(activeIndex===index? null:index)
  }
  
  return (
    <div className='w-[calc(100%-20px)]  py-4 flex flex-col gap-8'>
      <div className=' w-[calc(100%-10%)] flex gap-10  '>
       <div className='w-[40%] flex flex-col'>
        <p className='font-bold'>From</p>
        <p>{post?.moving_from}</p>
       </div>

       <div className=' flex justify-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] items-center mx-auto rounded-full w-[50px] h-[50px] mt-[19px] ' >
       <FaArrowRightLong className='text-red-600' />

       </div>
       <div className='w-[40%] ml-[30px] flex flex-col '>
        <p className='font-bold'>To</p>
        <p>{post?.moving_to}</p>
       </div>
       <div className='ml-[-60px]'>
        <p className='font-bold'>Request#</p>
        <p className='font-bold text-red-600'>{post?.estimate_id}</p>
       </div>
      </div>
      <div className='flex  gap-8'>
        <div className='flex'>
        <GoHomeFill className='text-red-600 text-2xl'/>
        <span>{post?.property_size}</span>
            
        </div>
        <div className='flex gap-2'>
            <FaBoxes className='text-red-600 text-2xl'/>
            <span>{post?.total_items}</span>
        </div>
        <div className='flex gap-2'>
            <GiPathDistance className='text-red-600 text-2xl'/>
            <span>{post?.distance}</span>
        </div>
        <div className='flex gap-2'>
            <FaCalendarAlt className='text-red-600 text-2xl'/>
            <span>{post?.moving_on}</span>
            <MdEdit/>

        </div>
        <div className='flex gap-2' >
            <ImCheckboxChecked className='text-red-600 text-2xl'/>
            <span>isFlexible</span>

        </div>
        <div className='flex mt-[-4px] gap-2' >
            <button onClick={()=>toggleIndex(post?.estimate_id)} className=' rounded-md text-red-600 border-[2px] border-red-600  text-[15px] p-2 '>View More Details</button>
            <button className=' bg-red-600 rounded-md text-white px-4 py-2'>{post?.custom_status}</button>
        </div>


      </div>
      <div className='flex mt-[-25px]'>
      <IoIosWarning className='text-red-600 mt-[2px]'/>
      <p><span className='font-bold'>Disclaimer:</span>please update your move data before two days of shifting</p>
      
      </div>
      {
        activeIndex && (<Accordian1 post={post}/>)
      }
      <p className='w-full h-[1px] bg-black'></p>
    </div>
  )
}

export default ShowPage
