import React from 'react'
import {Link} from 'react-router-dom'
const home = () => {
  return (
        <div className='h-screen w-full bg-gradient-to-r from-black to-gray-950 flex justify-center items-center'>
          <div className='w-[300px] h-[300px] bg-gray-900 rounded-xl border-1 border-pink-300 '>
            <div className='flex justify-center w-[300px] h-[300px] items-center'>
              <div className='flex gap-3 flex-col'>
             
                <input type="text" placeholder='Patient name' className='w-[200px] border-1 border-pink-300 rounded-lg text-center text-white hover:bg-gradient-to-r from-pink-700 to-gray-700'/>

                <input type="age" placeholder='Age/Gender' className='w-[200px] border-1 border-pink-300 rounded-lg text-center text-white hover:bg-gradient-to-r from-pink-700 to-gray-700' />
                <input type="date" placeholder='' className='w-[200px] border-1 border-pink-300 rounded-lg text-center text-white hover:bg-gray-900 hover:text-pink-700' />
                <input type="contact" placeholder='Contact Number' className='w-[200px] border-1 border-white rounded-lg text-center text-white hover:bg-gradient-to-r from-pink-700 to-gray-700' />
                <input type="address" placeholder='Address' className='w-[200px] border-1 border-pink-300 rounded-lg text-center text-white hover:bg-gradient-to-r from-pink-700 to-gray-700' />
                <input type="text" placeholder='Patient condition' className='w-[200px] border-1 border-pink-300 rounded-lg text-center text-white hover:bg-gradient-to-r from-blue-700 to-gray-700' />
             <Link to='/search'>
             <button className='border-1 border-blue-950 rounded-lg bg-green-800 font-medium hover:bg-blue-950 shadow-lg'>Submit</button>
             </Link>
              </div>
              </div>
            

          </div>

        </div>
  )
}

export default home

