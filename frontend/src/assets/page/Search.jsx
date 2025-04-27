import React from 'react'
import {Link} from 'react-router-dom'
import Box from './components/Box';
export default function List() {

  const dummyData = [
    { id: 1, name: "Alice Smith", email: "alice@example.com", age: 28 },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", age: 34 },
    { id: 3, name: "Carol Williams", email: "carol@example.com", age: 25 },
    { id: 4, name: "David Brown", email: "david@example.com", age: 30 },
    { id: 5, name: "Eve Davis", email: "eve@example.com", age: 22 },
    { id: 6, name: "Frank Miller", email: "frank@example.com", age: 41 },
    { id: 7, name: "Grace Wilson", email: "grace@example.com", age: 27 },
    { id: 8, name: "Henry Moore", email: "henry@example.com", age: 36 },
    { id: 9, name: "Ivy Taylor", email: "ivy@example.com", age: 29 },
    { id: 10, name: "Jack Anderson", email: "jack@example.com", age: 33 }
  ];
  

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
      
      <div className='w-screen h-auto bg-gray-950'>
        {
            dummyData.map((item,index)=>{
            return   <Box item={item} index={index}/>
            })
        }
        
      </div>
    </div>
  )
}
