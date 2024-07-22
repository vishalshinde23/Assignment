import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Accordian2({item,activeIndex,toggleIndex}) {
    // console.log(item.category[0].displayName)
  return (
    <div className=' flex flex-col gap-4 w-full'>
      <div className='flex justify-between  bg-gray-300  p-4' onClick={toggleIndex} >
        <p className='font-bold text-red-600'>{item?.displayName}<span className='ml-[8px] bg-red-600 text-white px-2 rounded-full'>{item?.category.length}</span></p>
        <p >{activeIndex===item?.id ?(<IoIosArrowUp/>):(<IoIosArrowDown/>)}</p>
      </div>
      {
        activeIndex===item?.id && (<div className='flex gap-[120px]'>

           <div>
            <p className='font-bold'>{item.category[0].displayName}</p>
           <div className="flex flex-col gap-6">{item?.category[0]?.items?.map((content)=>(
                <div className='flex justify-between gap-12' key={content?.uniquieId}>
                  <div>
                  <p>{content?.displayName}</p>
                  <p className='font-bold'>{content?.typeOptions
                  }</p>
                  </div>
                  <span className='font-bold'>{content?.order}</span>
                    </div>
            ))}</div>
           </div>
           <div>
            <p className='font-bold'>{item.category[1].displayName}</p>
           <div className='flex flex-col gap-6'>{item?.category[1]?.items?.map((content)=>(
                <div className='flex justify-between gap-12'  key={content?.uniquieId}>
                  <div>
                  <p>{content?.displayName}</p>
                  <p className='font-bold'>{content?.typeOptions
                  }</p>
                  </div>
                  
                  <span className='font-bold'>{content?.order}</span>
                    </div>
            ))}</div>
           </div>

        </div>)
      }
    </div>
  )
}

export default Accordian2
