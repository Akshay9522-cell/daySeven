'use client';

import React, { useEffect } from 'react';
import { getVendorWithProducts } from '../../../actions/vendoeReg'; 

export default function VendorDashboard() {


  useEffect(() => {
      
    const id = localStorage.getItem('id');
    async function fetchVendor() {
      try {
        const response = await getVendorWithProducts(id); 
        console.log('Vendor with products:', response.vendor);
      } catch (error) {
        console.error('Failed to fetch vendor:', error);
      }
    }

    fetchVendor();
  }, []);

  return (
    <div >
      <h1>Vendor Dashboard</h1>

   
    </div>
  );
}
