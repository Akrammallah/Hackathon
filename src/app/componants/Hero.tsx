import { Button } from '@/components/ui/button';
import React from 'react'
import { GoDotFill } from "react-icons/go";
import {ArrowUpDown} from 'lucide-react'


const Hero = () => {
  return (
    <>
    <div className=' container m-auto sm:flex justify-between items-center sm:mt-6 mt-10 grid-cols-1 lg:grid-cols-2 ml-4 text-2xl sm:text-lg'>
    <div className='bg-white sm:p-4 '>
        <h1 className='flex ml-4 font-bold'> <span className='text-blue-800 shadow-2xl shadow-blue-700 mr-1 text-center mt-1'><GoDotFill />
        </span>Pick-Up</h1>
      </div>
      <div className='flex sm:space-x-6 space-x-2 ml-4 sm:ml-0 mb-6 sm:mb-0 '>
        <div>
          <h1 className='font-bold'>Location</h1>
          <p>select your city</p>
        </div>
        <div>
          <h1 className='font-bold'>Date</h1>
          <p>select your date</p>
        </div>
        <div>
          <h1 className='font-bold'>Time</h1>
          <p>select your Time</p>
        </div>
      </div>
      <div>
        <Button className='py-6 px-4 ml-12 rounded-md bg-blue-600 text-white hover:bg-blue-700'><ArrowUpDown/></Button>
      </div>

      <div className='flex sm:space-x-6  ml-4 sm:ml-0 mb-6 sm:mb-0 '>
        <h1 className='flex ml-4 font-bold mt-4 sm:mt-0'> <span className='text-blue-800 shadow-2xl  shadow-blue-700 mr-1 text-center mt-1'><GoDotFill />
        </span>Drop-Off</h1>
      </div>
      <div className='flex space-x-6 ml-4 sm:ml-0  '>
        <div>
          <h1 className='font-bold'>Location</h1>
          <p>select your city</p>
        </div>
        <div>
          <h1 className='font-bold'>Date</h1>
          <p>select your date</p>
        </div>
        <div>
          <h1 className='font-bold'>Time</h1>
          <p>select your Time</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Hero
