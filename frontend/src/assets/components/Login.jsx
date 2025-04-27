import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
    
       <div className='h-screen w-full bg-black flex justify-center items-center'>
          <div className='w-[300px] h-[300px] bg-gray-950  rounded-2xl border-1 border-amber-50  '>
         
         <div className='flex justify-center flex-col items-center gap-4 w-[300px] h-[300px]'> 
             
                <input type="Email" placeholder='Enter Email Id'
               className='text-white border-1 rounded-xl text-center hover:bg-gray-800'  />
    <Link to='/home'>
               <button className='border-1 border-amber-50 rounded-xl w-[150px] text-amber-50 hover:bg-gray-900'>Login</button>
              </Link>
           </div>
          
          
    </div>
    </div>
</>  
  )
}

export default Login
