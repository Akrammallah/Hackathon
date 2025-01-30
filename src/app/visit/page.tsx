'use client'
import React,{useState} from 'react'
import { useEffect } from 'react'
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
import { querry2 } from '@/sanity/schemaTypes/querry'
import { client } from '@/sanity/lib/client'



const Visit = () => {
  const [data, setData] = useState([])
useEffect(()=>{
  const res = async ()=>{
    const data = await client.fetch(querry2)
    setData(data)

  };
  res();
})


  return (
    <>
      <div className='flex justify-between items-start ' id='visit'>
        <div className='w-[100%]'><Type/></div>
        <div className='mr-48'>
        <div className='text-sm '>
        <Hero />
      </div>
      
      <div className='flex w-[75%] '>
        <div className='p-5 bg-white mt-6 text-white      '>
          <div className='bg-blue-600   sm:w-[28vw] w-[76vw] h-[250px]   mt-6 p-4 rounded-md  '>
          <h1 className=''>
            <span className='text-2xl'>Sports cars wit the best <br />designs and acceleration</span>
            <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit.</p>
          <Image src={img} alt='' width={200} height={200} className='sm:ml-28 '/>
          </h1>
          </div>
          <span className='flex mt-8  sm:ml-0 '>
          <Image src={img1} alt='' width={100} height={100} className='sm:mr-10 mr-4 w-[24vw] sm:w-[7vw]'/>
          <Image src={img2} alt=''width={100} height={100} className='sm:mr-10 mr-4 w-[24vw] sm:w-[7vw]'/>
          <Image src={img3} alt='' width={100} height={100} className='bg-blue-500 p-4 rounded-md w-[24vw] sm:w-[8vw]'/>
          </span>
          </div>
          <div className=' hidden sm:block bg-gray-200  mt-4 rounded-md   text-gray-950  p-12 w-[36vw]'>
      <h1 className='text-xl font-bold'>Nissan GT-R</h1>
        <p className='mt-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates natus atque quia blanditiis quidem facere quibusda</p>

        <div className='flex items-center space-x-6 mt-4'>
          <p>TYPE</p>
          <p className='font-bold'>Sport</p>
          <p>CAPICITY</p>
          <p>2PERSON</p>
        </div>
        <div className='flex space-x-6 mt-4'>
          <p>Steering</p>
          <p className='font-bold'>Manual</p>
          <p>CAPICITY</p>
          <p>70L</p>
        </div>
        <div className='flex justify-between items-center   mt-4'>
          <p>$80.00/ days <br /><span className='line-through'>$100.00</span></p>
          <Button className='bg-blue-700'>Rent Now</Button>
          
        </div>
      </div>
      </div>
      <div className=' mt-6 mr-36 sm:mr-0'>
      <h1 className='font-bold ml-4 sm:ml-0'>Review <span className='bg-blue-700 rounded-full text-lg p-2 ml-2'>13</span></h1>
        <div className='flex items-center mt-8'>
          <Image src={img5} alt=''/>
          <h1 className='font-bold ml-2 '>Alex Stanton <br /> <span className='font-thin'>CEO at Buklish</span></h1></div>
          <p className='p-4 sm:ml-12'>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Fugiat numquam atque <br />sapiente rem sequi molestiae architecto pariatur minus, adipisci laudantium?
          </p>
          <div className='flex items-center mt-8'>
          <Image src={img4} alt=''/>
          <h1 className='font-bold ml-2 '>Skylar Dias <br /> <span className='font-thin'>CEO of Amazon</span></h1></div>
          <p className=' sm:ml-12 w-[96vw] sm:w-[50vw] '>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Fugiat numquam atque <br />sapiente rem sequi molestiae architecto pariatur minus, adipisci laudantium?
          </p>
          
          
        </div>
      </div>
      
      
      
        </div>
        <div className='container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between items-center mt-12 sm:ml-12 '>
          {data.map((car:any)=>(
          <div className='bg-white  rounded-md hover:scale-90 duration-500 ease-in-out sm:w-[250px] w-[96%] shadow-lg shadow-gray-400 mt-6 p-6 border-2 border-gray-300'
                  key={car.id}>
                    <h1 className='font-semibold text-4xl sm:text-lg'>{car.name}</h1>
                    <p className='text-xl sm:text-sm'>{car.tags}</p>
                    <p>{car.title}</p>
                    <p className='font-bold'>{car.type}</p>
                    <Image className='mt-6 w-[72vw] ml-16 sm:ml-0' src={car.imageUrl} alt={car.name} width={350} height={350} />
                    <p className='font-semibold mt-6 text-2xl sm:text-sm'>{car.pricePerDay}</p>
                    <p>{car.description}</p>
                    <Button className='bg-blue-700 w-full mt-6  '>Rent Now</Button>
                  </div>
          
          ))}

        </div>
        <div>
        
        
      </div>
      
      
    </>
  )
}

export default Visit
