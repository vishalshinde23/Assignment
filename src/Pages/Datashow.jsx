import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ShowPage from '../Components/ShowPage';

function Datashow() {
  const {data}=useSelector((state)=>state.data)
  
   console.log(data)
  return (
    <div className='my-[30px]  ml-[40px]'>
      <h2 className='text-[22px] font-bold'>My Moves</h2>
      <div>
        {
          data.map((post)=>(
            <ShowPage key={post?.estimate_id} post={post}/>
          ))
        }
      </div>
    
    </div>
  )
}

export default Datashow
