'use client'
import { FaBars } from "react-icons/fa";

import React from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sidebar } from "./Sidebar";
import { useState } from 'react';
import { useSelector } from 'react-redux';


export default function Navbar() {

     const router=useRouter()

      function logIn(){
        router.push('/login')
      }

      const [isOpen, setIsOpen] = useState(false);

      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

      const product = useSelector((state) => state.addtocart.cart);
      const prolen = product.length;

  return (
    <> <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className='flex justify-evenly border border-grey bg-blue-100 '>
          <div className='flex gap-5 justify-center items-center' >
           <div className='text-3xl' ><HiMiniBars3CenterLeft onClick={toggleSidebar} className="p-4 text-white fixed top-4 left-4 z-50"/>
           {isOpen ? 'Close Menu' : <FaBars />
           }  </div>
          
           <div className='w-20'><img src="/images/igp.png" alt="" /></div>
           <div className='flex gap-2.5 bg-indigo-100  p-2 border border-indig0-400 rounded-2xl'>
            <img src="images/india.png" alt="" className='w-7 h-5' />
            <p>where to Deliver?</p>
           </div>
           </div>

           <div className='flex justify-center items-center '>
            <input type="search" placeholder='Search for gifts....' className='font-extrabold border border-grey-500 pr-50 rounded-2xl p-2' />
            <IoSearchOutline  className='text-3xl relative right-9'/>
            </div>
        
        <div className='flex gap-5 justify-center items-center'>
             <div><img src="https://cdn.igp.com/raw/upload/assets/svg-icons/getSelect_redirect.svg" alt="" /></div>

         
             <div><img src="https://cdn.igp.com/raw/upload/assets/svg-icons/reminder-icon.svg" alt="" /> </div>
         
             <div className='text-2xl'><RiMoneyRupeeCircleFill /></div>

            <div className='text-2xl' ><FaHeart /></div>  
            <div className='text-2xl' onClick={() => router.push('/addToCart')}>
              <FaOpencart  />
              <span className='text-sm'>{prolen}</span>
            </div>
            <div className='text-2xl'  ><Link href='login'> <FaUserCircle onClick={logIn} /> </Link>
          
              </div>

            </div>

            

    
      </div>
    </>
  )
}
