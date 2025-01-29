'use client'
import Hero from '@/app/componants/Hero'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import { MdPeopleAlt } from "react-icons/md";

import { FaRegDotCircle } from "react-icons/fa";
import Type from '../componants/Type'
import { querry2 } from '@/sanity/schemaTypes/querry'
import { client } from '@/sanity/lib/client'



const detailcar = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const res = await client.fetch(querry2);
      setCar(res);
      
    };
    fetchCars();
  }, []);
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
    <div className=''> 
      <div className='container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between items-center mt-12'>
      {car.map((car:any) => (
        <div className='bg-white  rounded-md hover:scale-90 duration-500 ease-in-out sm:w-[250px] w-[96%] shadow-lg shadow-gray-400 mt-6 p-6 border-2 border-gray-300'
        key={car._id}>
          <h1 className='font-semibold text-4xl sm:text-lg'>{car.name}</h1>
          <p className='text-xl sm:text-sm'>{car.tags}</p>
          <p>{car.title}</p>
          <p className='font-bold'>{car.type}</p>
          <Image className='mt-6 w-[72vw] ml-16 sm:ml-0' src={car.imageUrl} alt={car.name} width={300} height={300} />
          <p className='font-semibold mt-6 text-2xl sm:text-sm'>{car.pricePerDay}</p>
          <p>{car.description}</p>
          <Button className='bg-blue-700 w-full mt-6  '>Rent Now</Button>
        </div>
      ))}

</div>
    </div>
  </div>
</div>
      
    </>
  )
}

export default detailcar;
