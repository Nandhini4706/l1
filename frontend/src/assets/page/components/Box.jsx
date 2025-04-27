import React from 'react'

const Box = ({index,item}) => {


    console.log(index);

    console.log(item);
  return (
    <>
    <div className='w-[250px] h-[300px] bg-white rounded-xl m-[30px] border-1 border-yellow-500'>
        <div className=' w-[250px] pt-65 pr-2 flex gap-2 justify-end'>
        <div>
        <p className=''>{item.name}</p>
        <p>{item.email}</p>
        </div>
        <button className='text-white font-medium border-1 border-red-900 bg-red-700 rounded-xl w-[60px]'>Delete</button>
        <button className='border-1 border-green-950 w-[40px] rounded-xl bg-green-600 text-white font-medium'>Edit</button>
        </div>

      </div>
    </>
  )
}

export default Box
