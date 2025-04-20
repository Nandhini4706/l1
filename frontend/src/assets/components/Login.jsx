import React from 'react'

const Login = () => {
  return (
       <div className='h-screen w-full bg-black flex justify-center items-center'>
          <div className='w-[300px] h-[300px] bg-gray-950  rounded-2xl border-1 border-amber-50  '>
         <div className='flex justify-center pt-20'> 
             <div className='text-white border-1 border-amber-50 rounded-sm h-auto '>
                <input type="Email"
                placeholder='Enter Email ID' className='text-center '  />
          </div>    
          </div>
             <div className='flex justify-center pt-5'>
               <button className='border-1 border-amber-50 rounded-xl w-[150px] text-amber-50 hover:bg-gray-900'>Login</button>
          </div>
    </div>
    </div>
  )
}

export default Login
