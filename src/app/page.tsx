import React from "react";

import Home from "./componants/Home";
import Hero from "./componants/Hero";
// import Billing from './componants/Billing'
// import Main from '@/app/componants/Main';
// import Card from "./componants/Card";

import Link from "next/link";
import Car from './cars/page';



// import { Contact, Fuel, Heart, ShipWheel } from "lucide-react";
// import { GoPeople } from "react-icons/go";
// import { Button } from "@/components/ui/button";
// import Type from './componants/Type'
// import FooterSec from './componants/Last'



 const page =  () => {
  
  return (
    <>
      <div>
        <Home />
        <Hero />
        
        <Car/>
        
        </div>
        
        {/* <Card/> */}
        {/* <Cars/>  */}
        {/* <Type/> */}
        {/* <Main/> */}
        {/* <Billing/> */}
        {/* <FooterSec/> */}
      
      {/* <div className=" container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between items-center   gap-x-10">
        {data.map((res: any, id: any) => (
          <div key={id} className=" bg-gray-400  rounded-md w-full ">
            <h1 className="font-bold text-xl flex mt-2  ">
              {res.title}
              <span className="text-red-800 ml-36">
                <Heart />
              </span>
            </h1>
            <h3 className="font-bold mb-6">{res.slug}</h3>
            <Image
              className="mb-4"
              src={urlFor(res.image).url()}
              alt=""
              width={300}
              height={300}
            />
            <h1 className="flex items-center">
              <span className="flex">
                <Fuel />
                {res.data}
              </span>{" "}
              <span className="ml-8 mr-9 flex gap-2">
                <ShipWheel />
                {res.manual}
              </span>{" "}
              <span className="gap-2 flex items-center">
                <GoPeople />
                {res.people}
              </span>
            </h1>
            <div className="mt-2">
              <h1 className="space-x-16">
                {" "}
                <span className=" flex gap-x-28 ml-2 items-center ">
                  ${res.price}/day
                  <Button className="bg-blue-800">Rent Now</Button>
                </span>
              </h1>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default page;
