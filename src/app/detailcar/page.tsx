import Hero from '@/app/componants/Hero'
import React from 'react'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
// import Img from "@/Images/image_7-removebg-preview.png"
import Img1 from "@/Images/gas-pump-alt_6955674.png"
import Img2 from "@/Images/Car (1).png"
import Img3 from "@/Images/Car (2).png"
// import Img4 from "@/Images/Car (3).png"
// import Img5 from "@/Images/Car (4).png"
// import Img6 from "@/Images/Car (5).png"
// import Img7 from "@/Images/Car (6).png"
import { MdPeopleAlt } from "react-icons/md";

import { FaRegDotCircle } from "react-icons/fa";
import Type from '../componants/Type'



const detailcar = () => {
  return (
    <>
<div className='sm:flex grid grid-cols-1  '>
  <div className='hidden sm:block'>
    <Type/>
  </div>
  <div>
  <div className='' id='detailcar'>
      <Hero/>
    </div>
    <div className=' container m-auto grid-cols-1  sm:grid-cols-2   md:grid-cols-4 justify-between items-center mt-12 sm:space-x-4   '>
        <div className='p-4 bg-slate-300  rounded-md  '>
          <h1 className='font-bold'>Vegnar</h1>
          <p>Sport</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12 w-96' />
      <div className='flex  space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white rounded-md'>
          <h1>Koenigsegg</h1>
          <p>Sport</p>
      <Image src={Img2} alt="Card" width={300} height={200} className='mt-12' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-white'>
          <h1>Koenigsegg</h1>
          <p>Sport</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        </div>
        <div className=' container m-auto grid-cols-4  sm:grid-cols-2 sm:flex  md:grid-cols-4 justify-between items-center mt-12 space-x-4  '>
        <div className='p-4 bg-slate-300  rounded-md '>
          <h1>Koenigsegg</h1>
          <p>Sport</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-slate-300 rounded-md'>
          <h1>Koenigsegg</h1>
          <p>Sport</p>
      <Image src={Img2} alt="Card" width={300} height={200} className='mt-12' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-slate-300'>
          <h1>Koenigsegg</h1>
          <p>Sport</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        
        
      </div>
      <div className=' container m-auto grid-cols-4  sm:grid-cols-2 sm:flex  md:grid-cols-4 justify-between items-center mt-12 space-x-4  '>
        <div className='p-4 bg-slate-300  rounded-md '>
          <h1>Koenigsegg</h1>
          <p>Sport</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-slate-300 rounded-md'>
          <h1>Koenigsegg</h1>
          <p>Sport</p>
      <Image src={Img2} alt="Card" width={300} height={200} className='mt-12' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        <div className='p-4 bg-slate-300'>
          <h1>Koenigsegg</h1>
          <p>Sport</p>
      <Image src={Img3} alt="Card" width={300} height={200} className='mt-12' />
      <div className='flex space-x-3 p-2  mt-12'><span  className='flex items-center gap-2'><Image src={Img1} alt='' width={20} height={20}/>901</span>
      <span className='flex items-center gap-2'><FaRegDotCircle /> Manual
      </span>
      <span  className='flex items-center gap-2'><MdPeopleAlt /> 2 People
      </span>
      </div>
      <div className='flex items-center space-x-24 mt-4 ml-6 '>
          <p className='font-bold'>$99.00/ day</p>
          <Button className='bg-blue-700 '>Rent Now</Button>
        </div>
        </div>
        
        
        
      </div>
      <div className=' flex justify-center mt-10 items-center'>
      <Button className='bg-blue-700 items-center'>Show more cars</Button>
      </div>
  </div>
</div>

      
    </>
  )
}

export default detailcar;
