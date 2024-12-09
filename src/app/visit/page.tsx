import React from 'react'
import Hero from '../componants/Hero'
import Type from '../componants/Type'
import Image from 'next/image'
import img from "@/Images/Car (5).png"
import img1 from "@/Images/View 2.png"
import img2 from "@/Images/View 3.png"
import img3 from "@/Images/Car (1).png"
import img4 from "@/Images/Profill.png"
import img5 from "@/Images/Profill (1).png"
import { Button } from '@/components/ui/button'
import VisitFor from '../componants/VisitFor'


const visit = () => {
  return (
    <>
      <div className='flex justify-between items-start ' id='visit'>
        <div className='w-[100%]'><Type/></div>
        <div className='mr-48'>
        <div className='items-start w-[100%]'>
        <Hero/>
      </div>
      
      <div className='flex   '>
        <div className='p-5 bg-white mt-6 text-white      '>
          <div className='bg-blue-600  mt-6 p-4 rounded-md w-[100%] '>
          <span className=''>
            <h1 className='text-2xl'>Sports cars wit the best <br />designs and acceleration</h1>
            <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit.</p>
          <Image src={img} alt='' className='sm:ml-0 ml-16'/>
          </span>
          </div>
          <span className='flex mt-8 '>
          <Image src={img1} alt='' width={100} height={100} className='sm:mr-10 mr-4'/>
          <Image src={img2} alt=''width={100} height={100} className='sm:mr-10 mr-4'/>
          <Image src={img3} alt='' width={100} height={100} className='bg-blue-500 p-4 rounded-md ml'/>
          </span>
          </div>
          <div className=' hidden sm:block bg-blend-lighten w-[50%] mt-16 rounded-md   text-gray-950 mr-12 p-4'>
      <h1 className='text-xl font-bold'>Nissan GT-R</h1>
        <p className='mt-12 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates natus atque quia blanditiis quidem facere quibusda</p>

        <div className='flex space-x-10 mt-4'>
          <p>TYPE</p>
          <p className='font-bold'>Sport</p>
          <p>CAPICITY</p>
          <p>2 PERSON</p>
        </div>
        <div className='flex space-x-10 mt-4'>
          <p>Steering</p>
          <p className='font-bold'>Manual</p>
          <p>CAPICITY</p>
          <p>70L</p>
        </div>
        <div className='flex justify-between p-6 mt-4'>
          <p>$80.00/ days <br /><span className='line-through'>$100.00</span></p>
          <Button className='bg-blue-700'>Rent Now</Button>
          
        </div>
      </div>
      </div>
      <div className=' mt-6'>
      <h1 className='font-bold ml-4 sm:ml-0'>Review <span className='bg-blue-700 rounded-full text-lg p-2 ml-2'>13</span></h1>
        <div className='flex items-center mt-8'>
          <Image src={img5} alt=''/>
          <h1 className='font-bold ml-2 '>Alex Stanton <br /> <span className='font-thin'>CEO at Buklish</span></h1></div>
          <p className='p-4 sm:ml-12'>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Fugiat numquam atque <br />sapiente rem sequi molestiae architecto pariatur minus, adipisci laudantium?
          </p>
          <div className='flex items-center mt-8'>
          <Image src={img4} alt=''/>
          <h1 className='font-bold ml-2 '>Skylar Dias <br /> <span className='font-thin'>CEO of Amazon</span></h1></div>
          <p className='p-4 sm:ml-12 '>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Fugiat numquam atque <br />sapiente rem sequi molestiae architecto pariatur minus, adipisci laudantium?
          </p>
          <div className=''>
          <VisitFor/>

        </div>
        <div>
          <VisitFor/>
        </div>
      </div>
      
      
      
        </div>
        
        
      </div>
      
      
    </>
  )
}

export default visit
