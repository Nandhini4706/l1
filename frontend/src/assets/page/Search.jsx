import React from 'react'
import {Link} from 'react-router-dom'
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
       <Link to='/home'>
       <button className='border-1 border-pink-700 rounded-xl w-[90px] text-white hover:bg-gray-900 hover:shadow-pink-300 shadow-sm'> HOME</button>
       </Link>
       <Link to='/recent'>
       <button className='border-1 border-pink-700 rounded-xl w-[90px] text-white hover:shadow-pink-300 shadow-sm hover:bg-gray-900 '>RECENT</button>
       </Link>
     </div>
      <div className='w-[250px] h-[300px] bg-white rounded-xl m-[30px] border-1 border-yellow-500'>
        <div className=' w-[250px] pt-65 pr-2 flex gap-2 justify-end'>
        <button className='text-white font-medium border-1 border-red-900 bg-red-700 rounded-xl w-[60px]'>Delete</button>
        <button className='border-1 border-green-950 w-[40px] rounded-xl bg-green-600 text-white font-medium'>Edit</button>
        </div>

      </div>
      <div>
        
      </div>
    </div>
  )
}
