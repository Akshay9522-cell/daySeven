'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaEdit, FaUser } from 'react-icons/fa';
import { BsDisplay, BsShop, BsFillCartFill } from 'react-icons/bs';
import { MdOutlineRequestPage } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";





 export const Sidebar= ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
  className="fixed top-3 fixed left-4 z-30 text-white p-2 bg-[#1d466f]/70 hover:bg-[#1d466f]/90 transition rounded"
  onClick={toggleSidebar}
>
  <FaBars />
</button>

<div
  className={`fixed top-14 left-0 h-full w-64 bg-[#1d466f]/80 backdrop-blur-md shadow-lg p-4 transition-transform transform z-20 ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="flex flex-col">
    <ul className="mt-8 flex flex-col gap-5">
      <li>
        <Link
          href="/Admin/Admindashboard"
          className="text-white hover:underline text-lg font-medium flex items-center"
        >
          <FaHome className="mr-2" /> Home
        </Link>
      </li>
      <li>
        <Link
          href="/vendor/vendorDashboard/product"
          className="text-white hover:underline text-lg font-medium flex items-center"
        >
          <AiOutlineProduct className="mr-2" /> Product
        </Link>
      </li>
      <li>
        <Link
          href="/vendor/vendorDashboard/display"
          className="text-white hover:underline text-lg font-medium flex items-center"
        >
          <BsDisplay className="mr-2" /> Display
        </Link>
      </li>
      <li>
        <Link
          href="/vendor/vendorDashboard/search"
          className="text-white hover:underline text-lg font-medium flex items-center"
        >
          <BsDisplay className="mr-2" /> Search
        </Link>
      </li>
    </ul>
  </div>
</div>


{isOpen && <div className="ml-64 transition-all duration-300">{children}</div>}

    </>
  );
};

export default Sidebar;