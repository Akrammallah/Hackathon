import React from 'react'
import { GoDotFill } from "react-icons/go";


const Hero = () => {
  return (
    <>
    <div className=' container m-auto sm:flex justify-between items-center sm:mt-6 mt-10 grid-cols-1'>
    <div className='bg-slate-300 sm:p-4 '>
        <h1 className='flex ml-4 font-bold'> <span className='text-blue-800 shadow-2xl shadow-blue-700 mr-1 text-center'><GoDotFill />
        </span>Pick-Up</h1>
      </div>
      <div className='flex sm:space-x-6 space-x-2 ml-4 sm:ml-0 mb-6 sm:mb-0 '>
        <div className='shadow-xl shadow-gray-300'>
          <h1 className='font-bold'>Location</h1>
          <p>select your city</p>
        </div>
        <div className='shadow-xl shadow-gray-300'>
          <h1 className='font-bold'>Date</h1>
          <p>select your date</p>
        </div>
        <div className='shadow-xl shadow-gray-300'>
          <h1 className='font-bold'>Time</h1>
          <p>select your Time</p>
        </div>
      </div>
      <div>
        <button className='py-2 px-2 ml-12 rounded-md bg-blue-600 text-white hover:bg-blue-700'>Book Now</button>
      </div>

      <div className='flex sm:space-x-6 space-x-2 ml-4 sm:ml-0 mb-6 sm:mb-0 '>
        <h1 className='flex ml-4 font-bold mt-4 sm:mt-0'> <span className='text-blue-800 shadow-2xl  shadow-blue-700 mr-1 text-center'><GoDotFill />
        </span>Drop-Off</h1>
      </div>
      <div className='flex sm:space-x-6 space-x-2 ml-4 sm:ml-0 '>
        <div className='shadow-xl shadow-gray-300'>
          <h1 className='font-bold'>Location</h1>
          <p>select your city</p>
        </div>
        <div className='shadow-xl shadow-gray-300'>
          <h1 className='font-bold'>Date</h1>
          <p>select your date</p>
        </div>
        <div className='shadow-xl shadow-gray-300'>
          <h1 className='font-bold'>Time</h1>
          <p>select your Time</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Hero
