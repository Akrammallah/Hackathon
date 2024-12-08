import React from 'react'
import SearchBar from './Search'
import { FaHeart } from "react-icons/fa6";
import { MdNotificationAdd } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import img from "@/Images/Profill (1).png"




const Navbar = () => {
  return (
    <div className=' container m-auto p-5 flex justify-between items-center border-b-2 border-blue-200'>
      <div className='sm:flex grid-cols-1 mt-4 sm:mt-0'>
      <h1 className='text-blue-500 text-4xl font-bold mr-24'>MORENT</h1>
      <SearchBar/>
      </div>
      <div className='flex space-x-3'>
      <Link href={'/visit'}><FaHeart /></Link>
      <Link href={'/bill'}><MdNotificationAdd /></Link>
      <IoMdSettings />
      <span><Image src={img} alt='' width={20}/></span>



      </div>
    </div>
  )
}

export default Navbar
