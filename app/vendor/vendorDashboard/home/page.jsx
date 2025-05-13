'use client';

import React, { useEffect, useState } from 'react';
import { getVendorWithProducts } from '../../../actions/vendoeReg'; 

export default function VendorDashboard() {
       
     const[show,setShow]=useState([])

  useEffect(() => {
      
    const id = localStorage.getItem('id');
    async function fetchVendor() {
      try {
        const response = await getVendorWithProducts(id); 
        console.log('Vendor with products:', response.vendor);
        setShow(response.vendor)
      } catch (error) {
        console.error('Failed to fetch vendor:', error);
      }
    }

    fetchVendor();
  }, []);



  return (
    <div >
      <h1>Products Details</h1>

      
      <div className="p-4">


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {show?.products?.length > 0 ? (
      show.products.map((e) => (
        <div
          key={e}
          className="border rounded-2xl shadow-md p-4 flex flex-col items-center bg-white hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">{e.name}</h2>
          <img
            src={e.image}
            alt={e.name}
            className="w-40 h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-2">Category: {e.category}</p>
          <p className="text-green-600 font-bold">${e.price}</p>
        </div>
      ))
    ) : (
      <h2 className="text-xl text-center text-gray-500">No products available.</h2>
    )}
  </div>
</div>


      

   
    </div>
  );
}
