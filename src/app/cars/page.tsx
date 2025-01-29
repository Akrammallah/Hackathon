'use client'
import React,{ useState } from 'react'
import { useEffect } from 'react' 
import { client } from '@/sanity/lib/client'

import Image from 'next/image'
import { querry } from '../../sanity/schemaTypes/querry'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const Car = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchCars = async () => {
      const res = await client.fetch(querry);
      setCars(res);
    };
    fetchCars();
  },[])
  return (
    <>
    <div >
      <input className='w-[25%] h-12 ml-6 border-2 mt-4 border-gray-100 rounded-lg' type="text" placeholder='Search for a car' onChange={(e) => setSearchTerm(e.target.value)} />
    <div className=' container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between items-center mt-12 '>
      {cars.filter((car:CarCardProps) => car.name.toLowerCase().includes(searchTerm.toLowerCase())).map((car:CarCardProps) => (

       
        <div className='bg-white rounded-md hover:scale-90 duration-500 ease-in-out sm:w-[300px]  w-full  shadow-lg shadow-gray-400 mt-6 p-6 border-2 border-gray-300 ml-6'
        
        key={car.id}>
          <Link href={`/user/${car.slug}`}>
          <h1 className='font-semibold text-4xl sm:text-lg'>{car.name}</h1>
          <p>{car.tags}</p>
          <p>{car.title}</p>
          <p className='semibold'>{car.type}</p>
          <Image className='mt-6 w-[72vw] ml-16 sm:ml-0' src={car.imageUrl} alt={car.name} width={350} height={350} />
          </Link>
          <div className='flex justify-between items-center mt-4 p-2'>
            <p className='font-bold'>{car.fuelCapacity}</p>
            <p className='font-bold'>{car.seatingCapacity}</p>
          </div>
          <div className='flex justify-between items-center mt-6'>
          <p className='sm:font-semibold font-bold text-xl sm:text-sm '>{car.pricePerDay}</p>
          <p>{car.description}</p>
          
          <Link href={'/bill'}><Button className='bg-blue-700    '>Rent Now</Button></Link>
          </div>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Car
