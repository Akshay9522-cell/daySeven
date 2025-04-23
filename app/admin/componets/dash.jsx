'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useUser  } from '@clerk/nextjs';
import Display from '../display/page';
import { AiFillProduct } from "react-icons/ai";
import Product from '../product/page';
import Register from '../register/page';


export default function Admin() {
  const { user } = useUser ();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logOut = () => {
    localStorage.clear();
    router.push('/login');
    alert('Logout successfully');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center">
          <FaBars className="text-white text-3xl ml-2" onClick={toggleSidebar} />
          <h1 className="text-white text-xl ml-2">Dashboard</h1>
        </div>
        <button className="text-white text-2xl cursor-pointer" onClick={logOut}>
          Logout
        </button>
      </div>

      <div>
        <div
          className={`fixed top-25 left-0 h-full w-60 bg-gray-800 p-4 rounded-r-2xl shadow-lg transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
      
          {isSidebarOpen && (
              
            <div>
              <ul className="text-white space-y-2 relative top-10 text-2xl">
                <h5>Welcome:</h5>
                <p className="text-sky-300">{user?.fullName}</p>
               
                <li className="text-xl no-underline font-semibold hover:text-blue-500 transition duration-200">
                
    <Link href="/admin/product" className='flex gap-3 items-center'> <AiFillProduct />Product</Link>
  </li>
  <li className="text-xl font-semibold hover:text-blue-500 transition duration-200">
    <Link href="/admin/display">Display</Link>
  </li>

  <li className="text-xl font-semibold hover:text-blue-500 transition duration-200">
    <Link href="/admin/register">registration</Link>
  </li>
 
              </ul>
              
            </div>
           
          )}
       
          
        </div>
   </div>
 
      
    </>
  )
        }