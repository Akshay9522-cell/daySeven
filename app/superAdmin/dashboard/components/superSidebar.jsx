'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaEdit, FaUser } from 'react-icons/fa';
import { BsDisplay, BsShop, BsFillCartFill } from 'react-icons/bs';
import { MdOutlineRequestPage } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";




 export  const SuperSidebar= ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-3 left-4 z-20 text-white  p-2 rounded"
        onClick={toggleSidebar}
      >
        <FaBars />

      </button>
      <div
        className={`absolute top-0 left-0 h-screen w-64 bg-[#1d466f] p-4 mt-18 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ marginRight: isOpen ? 0 : '64px' }}  
      >
        <div className="flex bg-[#184572] flex-col">
          <ul className="mt-4 flex flex-col gap-5 justify-center items-center">
            <li>
              <Link href="/superAdmin/dashboard" className="text-white hover:underline text-lg font-semibold">
                <FaHome className="inline-block mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link href="/superAdmin/dashboard/vendors" className="text-white hover:underline text-lg font-semibold">
                <BsDisplay className="inline-block mr-2" /> Vendor list
              </Link>
            </li>
    
            <li>
              <Link href="/superAdmin/dashboard/admins" className="text-white hover:underline text-lg font-semibold">
                <BsShop className="inline-block mr-2" /> Admin list
              </Link>
            </li>
            <li>
              <Link href="/superAdmin/dashboard/vendor" className="text-white hover:underline text-lg font-semibold">
                <BsShop className="inline-block mr-2" /> request
              </Link>
            </li>
           

          </ul>
        </div>
      </div>
      {isOpen ? <div className="ml-64">{children}</div> : null}
    </>
  );
};

