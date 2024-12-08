"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import Home from './componants/Home'
import Hero from './componants/Hero'
// import Billing from './componants/Billing'
import Main from '@/app/componants/Main';
import Card from './componants/Card'
import Cars from './componants/Cars'
import Type from './componants/Type'


const page = () => {
  return (
    <>
    <div>
    <Home/>
    <Hero/>
    <Card/>
    <Cars/>
    {/* <Type/> */}
    {/* <Main/> */}
    {/* <Billing/> */}
    </div>
    </>
  )
}

export default page
