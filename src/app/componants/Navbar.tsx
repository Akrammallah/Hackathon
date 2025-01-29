'use client'
import React from 'react'
import SearchBar from './Search'
import { FaHeart } from "react-icons/fa6";
import { MdNotificationAdd } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import img from "@/Images/Profill (1).png"
// import { Bounce, ToastContainer, toast } from 'react-toastify';




const Navbar = () => {
  // toast.success('🦄 Wow so easy!', {
  //   position: "top-right",
  //   autoClose: 1500,
  //   hideProgressBar: false,
  //   closeOnClick: false,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   transition: Bounce,
  //   });
    
    
  return (
    <>
    {/* <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/> */}

    
    <div className=' container m-auto p-5 flex justify-between bg-white items-center border-b-2 border-blue-200 sticky z-10 top-0 backdrop:blur supports-[backdrop:filter]:bg-background/80 '>
      <div className='sm:flex grid-cols-1 mt-4 sm:mt-0'>
      <Link href={'/detailcar'}><h1 className='text-blue-700 text-4xl font-bold mr-24'>MORENT</h1></Link>
      <span className='mt-6 sm:mt-0'><SearchBar/></span>
      </div>
      <div className='sm:flex space-x-3'>
      <Link className='hidden sm:block' href={'/visit'}><FaHeart /></Link>
      <Link className='hidden sm:block' href={'/bill'}><MdNotificationAdd /></Link>
      <Link className='hidden sm:block' href={''}><IoMdSettings /></Link>
      <span className='block'><Image className='w-12 mr-12 sm:mr-0 text-center sm:w-5' src={img} alt='' width={20}/></span>



      </div>
    </div>
    </>
  )
}

export default Navbar
