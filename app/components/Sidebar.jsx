import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

import Link from 'next/link';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed left-0 top-0 w-64 bg-white h-full shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5">
          <h1 className="text-2xl mb-5">akki</h1>
          <ul className="space-y-4">
            <li>
             
            </li>
          </ul>
          <button onClick={toggleSidebar} className="mt-5 text-blue-500 text-xl" ><IoIosCloseCircle className='text-3xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;