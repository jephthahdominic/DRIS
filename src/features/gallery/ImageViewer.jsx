import React from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export default function ImageViewer({currentImg}) {
  return (
    <div className='relative'>
      <img src={currentImg.URI} alt="image" className='h-[500px] min-w-[500px] shadow-2xl rounded-[10px] max-sm:w-[80%] max-sm:h-[400px]'/>
    </div>
  )
}
