import React from 'react'
import Image from 'next/image'
import Img from "@/Images/image_7-removebg-preview.png"
import Img1 from "@/Images/gas-pump-alt_6955674.png"
import Img2 from "@/Images/Car.png"
import Img3 from "@/Images/image 8.png"
import Img4 from "@/Images/image 7.png"
import Img8 from "@/Images/download.png"
import { MdPeopleAlt } from "react-icons/md";

import { FaRegDotCircle } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import Link from 'next/link'

const Card = () => {
  return (
    <>
      <div className=' container m-auto grid-cols-1 w-[1312] h-[452] sm:grid-cols-2 sm:flex md:grid-cols-4 justify-between items-center mt-12 space-x-4  '>
        <div className='p-4 bg-white  rounded-md relative '>
          <h1 className='font-bold'>Koenigsegg</h1>
          <p className='font-bold'>Sport</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <p className=' top-2 right-3 absolute'><Image  src={Img8} alt='' width={40}/></p>
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Link href={'/detailcar'}><Button className='bg-blue-700 '>Rent Now</Button></Link>
        </div>
        </div>
        
        <div className='p-4 bg-white rounded-md relative'>
          <h1 className='font-bold'>Royall-Roy</h1>
          <p className='font-bold'>Sport</p>
      <Image src={Img2} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <p className=' top-2 right-3 absolute'><Image  src={Img8} alt='' width={40}/></p>
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img2} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$96.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white '>
          <h1 className='font-bold'>Koenigsegg</h1>
          <p className='font-bold'>Sport</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img3} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$89.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white relative  '>
          <h1 className='font-bold'>NissanGT-R</h1>
          <p className='font-bold'>Sport</p>
      <Image src={Img4} alt="Card" width={300} height={200} className='mt-12 w-96 ' />
      <p className=' top-2 right-3 absolute'><Image  src={Img8} alt='' width={40}/></p>
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center sm:gap-2 gap-12'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-14 sm:gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center  sm:space-x-24 space-x-36 mt-4 ml-6 '>
          <p className='font-bold'>$80.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Card
