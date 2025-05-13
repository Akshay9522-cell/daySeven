'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaEdit, FaUser } from 'react-icons/fa';
import { BsDisplay, BsShop, BsFillCartFill } from 'react-icons/bs';
import { MdOutlineRequestPage } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import {Toaster,toast} from 'react-hot-toast';




 export const Sidebar= ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
    
      <button
        className="fixed top-3 left-4 z-20 text-white p-2 rounded className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md  transition-colors"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

     
      <div
        className={`absolute top-0 left-0 h-screen w-64 className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md  p-4 mt-18 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ marginRight: isOpen ? '0' : '64px' }}  
      >
        <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3 flex-col h-full ">
          <ul className=" mb-36 flex flex-col gap-5">
      
            <li>
              <Link
                href="/admin/AdminDashboard/home"
                className="text-white hover:underline text-lg font-semibold"
              >
                <FaHome className="inline-block mr-2" /> Home
              </Link>
            </li>
         
            <li>
              <Link
                href="/admin/AdminDashboard/vendors"
                className="text-white hover:underline text-lg font-semibold"
              >
                <BsDisplay className="inline-block mr-2" /> Vendor List
              </Link>
            </li>
       
            <li>
              <Link
                href="/admin/AdminDashboard/search"
                className="text-white hover:underline text-lg font-semibold"
              >
                <CiSearch className="inline-block mr-2" /> Vendor Search
              </Link>
            </li>
     
           
          
           
           
          </ul>
        </div>
      </div>

  
      {isOpen && (
        <div className="ml-64 transition-all duration-300 ease-in-out">
          {children}
        </div>
      )}
      <Toaster/>
    </>
  );
};

export default Sidebar;