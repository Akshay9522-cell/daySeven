'use client';
import { FaBars } from "react-icons/fa";
import React, { useState } from 'react';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sidebar } from "./Sidebar";
import { useSelector } from 'react-redux';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const product = useSelector((state) => state.addtocart.cart);
  const favs = useSelector((state) => state.addtofav.fav);

  return (
    <>
    <div >
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-red-200 border border-grey">

        <div className="flex items-center gap-4">
         
          <button className="text-3xl md:hidden" onClick={toggleSidebar}>
            <HiMiniBars3CenterLeft className="text-white" />
          </button>

        
          <div className="w-16">
            <img src="/images/lgo.png" alt="logo" className="w-full" />
          </div>

      
          <div className="hidden lg:flex items-center gap-2 bg-indigo-100 p-2 border border-indigo-400 rounded-2xl">
            <img src="/images/india.png" alt="India" className="w-7 h-5" />
            <p className="text-sm">Where to Deliver?</p>
          </div>
        </div>

     
        <div className="flex items-center mt-3 md:mt-0 w-full md:w-auto md:flex-1 md:mx-6  hidden">
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search for gifts..."
              className="w-full md:w-96 border border-gray-500 rounded-2xl p-2 pl-4 pr-10 font-medium text-sm"
            />
            <IoSearchOutline className="absolute right-3 top-2.5 text-xl text-gray-700" />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <img
            src="https://cdn.igp.com/raw/upload/assets/svg-icons/getSelect_redirect.svg"
            alt="Redirect"
            className="w-5 h-5 hidden sm:block"
          />
          <img
            src="https://cdn.igp.com/raw/upload/assets/svg-icons/reminder-icon.svg"
            alt="Reminder"
            className="w-5 h-5 hidden sm:block"
          />
          <RiMoneyRupeeCircleFill className="text-2xl hidden sm:block" />

        
          <div onClick={() => router.push('/wishlist')} className="relative cursor-pointer text-red-600">
            <FaHeart className="text-2xl" />
            <span className="absolute text-xs text-black-500 -top-2 -right-3">{favs.length}</span>
          </div>

          
          <div onClick={() => router.push('/addToCart')} className="relative cursor-pointer">
            <FaOpencart className="text-2xl" />
            <span className="absolute text-xs text-black-500 -top-2 -right-3">{product.length}</span>
          </div>

          
          <Link href="/login">
            <FaUserCircle className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
