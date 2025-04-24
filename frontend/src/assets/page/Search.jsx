import React from 'react'

export default function List() {
  return (
    <div className='w-full h-screen bg-gray-950'>
      <div className='flex justify-center  text-white'>
        <input type="text" placeholder='Search' className='w-[400px] translate-y-[30px]  border-1 rounded-lg border-pink-300 
         ' />
        
      </div>
      <br />
      <br />
      <hr className='border-t border-pink-300' />
      <div className='flex justify-center m-[10px] gap-2'>
       <button className='border-1 border-pink-700 rounded-xl w-[90px] text-white hover:bg-gray-900 hover:shadow-pink-300 shadow-sm'> HOME</button>
       <button className='border-1 border-pink-700 rounded-xl w-[90px] text-white hover:shadow-pink-300 shadow-sm hover:bg-gray-900 '>RECENT</button>
     </div>
      <div>
        
      </div>
    </div>
  )
}
