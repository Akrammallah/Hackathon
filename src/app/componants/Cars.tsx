import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import Img from "@/Images/image_7-removebg-preview.png"
import Img1 from "@/Images/gas-pump-alt_6955674.png"
import Img2 from "@/Images/Car (1).png"
import Img3 from "@/Images/Car (2).png"
import Img4 from "@/Images/Car (3).png"
import Img5 from "@/Images/Car (4).png"
import Img6 from "@/Images/Car (9).png"
import Img7 from "@/Images/Car (6).png"
import Img8 from "@/Images/download.png"
import { MdPeopleAlt } from "react-icons/md";

import { FaRegDotCircle } from "react-icons/fa";
import { ArrowRight, ArrowUp } from 'lucide-react'


const Cars = () => {
  return (
    <>
    <h1 className='text-xl font-bold flex p-6 mx-6 text-blue-800 justify-between'>Rent Cars <span className='flex items-center'>See All <ArrowRight/></span></h1>
      <div className=' container m-auto grid-cols-4  sm:grid-cols-2 sm:flex  md:grid-cols-4 justify-between items-center mt-12 gap-x-4  '>
        <div className='p-4 bg-white  rounded-md relative shadow-xl shadow-gray-400 transition-all hover:scale-90 duration-300 ease-in-out cursor-pointer '>
          <h1 className='font-bold'>CR-V</h1>
          <p >SUV</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12 ' />
      <p className=' top-2 right-3 absolute'><Image  src={Img8} alt='' width={40}/></p>
      <div className='flex space-x-4 p-2  mt-12 justify-start items-start ml-4'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-5 bg-white rounded-md relative shadow-xl shadow-gray-400 transition-all hover:scale-90 duration-300 ease-in-out cursor-pointer'>
          <h1 className='font-bold'>All New Terrious</h1>
          <p>SUV</p>
      <Image src={Img2} alt="Card" width={200} height={200} className='mt-7 w-96' />
      <p className=' top-2 right-3 absolute'><Image  src={Img8} alt='' width={40}/></p>
      <div className='flex space-x-4 p-2  mt-12 justify-center items-center ml-4'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$89.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white shadow-xl shadow-gray-400 transition-all hover:scale-90 duration-300 ease-in-out cursor-pointer'>
          <h1 className='font-bold'>CR-V</h1>
          <p>Suv</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <div className='flex space-x-4 p-2  mt-12 justify-center items-center ml-4'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white relative shadow-xl shadow-gray-400 transition-all hover:scale-90 duration-300 ease-in-out cursor-pointer'>
          <h1 className='font-bold'>All New Terrious</h1>
          <p>SUV</p>
      <Image src={Img4} alt="Card" width={300} height={200} className='mt-8 w-96' />
      <p className=' top-2 right-3 absolute'><Image  src={Img8} alt='' width={40}/></p>
      <div className='flex space-x-4 p-2  mt-12 justify-center items-center ml-4'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$89.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
      </div>

      <div className='container m-auto grid-cols-4  sm:grid-cols-2 sm:flex md:grid-cols-4 justify-between items-center mt-12 space-x-6'>
      <div className='p-4 bg-white relative shadow-xl shadow-gray-400 transition-all hover:scale-90 duration-300 ease-in-out cursor-pointer'>
          <h1 className='font-bold'>CR-V</h1>
          <p>Suv</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <p className=' top-2 right-3 absolute'><Image  src={Img8} alt='' width={40}/></p>
      <div className='flex space-x-4 p-2  mt-12 justify-center items-center ml-4'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white shadow-xl shadow-gray-400 transition-all hover:scale-90 duration-300 ease-in-out cursor-pointer'>
          <h1 className='font-bold'>All New Terrious</h1>
          <p>SUV</p>
      <Image src={Img2} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <div className='flex space-x-4 p-2  mt-12 justify-center items-center ml-4'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white relative shadow-xl shadow-gray-400 transition-all hover:scale-90 duration-300 ease-in-out cursor-pointer'>
          <h1 className='font-bold'>CR-V</h1>
          <p>Suv</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <p className=' top-2 right-3 absolute'><Image  src={Img8} alt='' width={40}/></p>
      <div className='flex space-x-4 p-2  mt-12 justify-center items-center ml-4'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white shadow-xl shadow-gray-400 transition-all hover:scale-90 duration-300 ease-in-out cursor-pointer'>
          <h1 className='font-bold'>All New Terrious</h1>
          <p>SUV</p>
      <Image src={Img2} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <div className='flex space-x-4 p-2  mt-12 justify-center items-center ml-4'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
      </div>
      <div className=' flex justify-center mt-6 items-center'>
      <Button className='bg-blue-700 items-center'>Show more cars</Button>
      </div>
    </>
  )
}

export default Cars
