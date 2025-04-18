'use client'; // Needed only if you're using the Next.js App Router

import { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";



export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
          <img src="/images/igp.png" alt="" />
          </Link>

           <div className='flex justify-center items-center '>
                      <input type="search" placeholder='Search for gifts....' className='font-extrabold border border-grey-500 pr-50 rounded-2xl p-2' />
                      <IoSearchOutline  className='text-3xl relative right-9'/>
                      </div>



          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <div className="relative group">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                Menu ▾
              </button>
              {/* Dropdown */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-lg ${menuOpen ? 'block' : 'hidden'} group-hover:block`}>
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Services
                </Link>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Pricing
                </Link>
                <Link
                  href="/features"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Features
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>

            
            <div className='flex gap-5 justify-center items-center'>
             <div><img src="https://cdn.igp.com/raw/upload/assets/svg-icons/getSelect_redirect.svg" alt="" /></div>

         
             <div><img src="https://cdn.igp.com/raw/upload/assets/svg-icons/reminder-icon.svg" alt="" /> </div>
         
             <div className='text-2xl'><RiMoneyRupeeCircleFill /></div>

            <div className='text-2xl' ><FaHeart /></div>  
            <div className='text-2xl' ><FaOpencart /></div>
            <div className='text-2xl'  > <Link href='login' ><FaUserCircle  /></Link></div>

            </div>
           
          </div>

          

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleNav}>
              {navOpen ? (
               <MdCancel />

              ) : (
                <MdMenu />

              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <div>
            <button
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Menu ▾
            </button>
            {menuOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/services" className="block text-sm text-gray-700 hover:text-blue-600">
                  Services
                </Link>
                <Link href="/pricing" className="block text-sm text-gray-700 hover:text-blue-600">
                  Pricing
                </Link>
                <Link href="/features" className="block text-sm text-gray-700 hover:text-blue-600">
                  Features
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
