'use client'
import { client } from "@/sanity/lib/client";
import { querry } from "@/sanity/schemaTypes/querry";
import React,{useState} from "react";
import { useEffect } from "react";



const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchData, setSearchData] = useState<any>(searchTerm);
  useEffect(() => {
    const data = async () => {
      const res = await client.fetch(querry);
      setSearchTerm(res);
      setSearchData(res)
      
    };
    data();
    const filter = (e:any)=>{
      setSearchData(searchTerm.filter((item:any) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
      
    }
    
  },[])
  return (
    <div className="flex items-center border rounded-lg px-4 py-2 w-full max-w-md mx-auto shadow-md bg-white">
      {/* {
        searchData.map((item:any) => (
          <div key={item._id}>{item.name}</div>
        ))
      } */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m2.85-6.65a8 8 0 11-16 0 8 8 0 0116 0z"
        />
      </svg>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search something here"
        // value={''}
        // onChange={(e:any) => setSearchTerm(e.target.value)}
        className="flex-grow px-4 py-1 text-sm text-gray-700 focus:outline-none"
      />

      {/* Filter Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5 text-gray-500 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-8.586L3.293 6.707A1 1 0 013 6V4z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
