import React from 'react'
import { Link } from 'react-router-dom'
const Activities = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-900'>
      <div className='bg-gray-800 p-4 rounded-2xl flex flex-col justify-center items-center w-2/6 sm:w-6/12 gap-4'>
        <h1 className='sm:text-3xl text-md text-center text-white'>Activities</h1>
        <div className='flex md:flex-row flex-col md:gap-4 gap-2 justify-center items-center'>
          <Link to="/dashboard/ActivityForm">
            <button className=' bg-red-600 sm:p-3 p-2 rounded-full text-white sm:font-bold bg-dark font-normal hover:bg-black sm:text-lg text-sm'>Add Activity</button>
          </Link>
          <Link to="/dashboard/ActivityRecord">
            <button className=' bg-red-600 sm:p-3 p-2 rounded-full text-white sm:font-bold font-normal bg-dark hover:bg-black sm:text-lg text-sm'>Activity Record</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Activities