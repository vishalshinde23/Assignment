import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Accordian2 from './Accordian2';

function Accordian1({post}) {
    const[activeIndex,setActiveIndex]=useState(null);
  
    const toggleIndex=(index)=>{
        setActiveIndex(activeIndex===index? null:index)
      }

  return (
    <div className=' flex flex-col gap-6 w-full h-full'>
     <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>Additional Information</h2>
        <button className='bg-black text-white px-4 py-2 rounded-md'>Edit Additional Info</button>
     </div>
     <div>
        <p>Test Data</p>
     </div>
     <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>House details</h2>
        <button className='bg-black text-white px-4 py-2 rounded-md'>Edit House details</button>
     </div>
     <div className='flex flex-col '>
        <h3 className='text-red-600 font-bold'>Existing House details</h3>
        <div className='flex gap-[150px]'>
            <div className='flex flex-col'>
                <p className="font-bold">Floor No.</p>
                <p>{post?.old_floor_no}</p>
            </div>
            <div className='flex flex-col'>
                <p className="font-bold">Elevator Available</p>
                <p>{post?.old_elevator_availability}</p>
            </div>
            <div className='flex flex-col'>
                <p className="font-bold">Distance from Elevator/ Staircase to truck</p>
                <p>{post?.old_parking_distance}</p>
            </div>
        </div>
     </div>
     <div className='flex flex-col'>
        <h3 className='text-red-600 font-bold'>New House details</h3>
        <div className='flex gap-[150px]'>
            <div>
                <p className="font-bold">Floor No.</p>
                <p>{post?.new_floor_no}</p>
            </div>
            <div>
                <p className="font-bold">Elevator Available</p>
                <p>{post?.new_elevator_availability}</p>
            </div>
            <div>
                <p className="font-bold">Distance from Elevator/ Staircase to truck</p>
                <p>{post?.new_parking_distance}</p>
            </div>
        </div>
     </div>
     <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>Inventory Details</h2>
        <button className='bg-black text-white px-4 py-2 rounded-md'>Edit Inventory</button>
     </div>
     <div className='flex flex-col gap-4'>
        {
            post.items.inventory.map((item)=>(
                <Accordian2 key={item?.id} item={item} activeIndex={activeIndex} toggleIndex={()=>toggleIndex(item?.id)}/>
            ))
        }
     </div>

     
    </div>
  )
}

export default Accordian1
