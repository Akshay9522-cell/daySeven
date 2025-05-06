'use client'
import Link from 'next/link'
import React, { useActionState,useState,useEffect } from 'react'
import insertProduct from '../../../actions/insertProduct'
const initialState = {
  success: false,
  error: ''
};
if (typeof window !== 'undefined') {
  const theme = localStorage.getItem('theme');
  console.log('User theme is:', theme);
}
export default function page() {
  const[state,formAction]=useActionState(insertProduct, initialState)
  const [vendorId, setVendorId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const VendorId = localStorage.getItem('id'); 
      if (VendorId) {
        setVendorId(VendorId);
      }
    }
  }, []);



  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <Link href='product' className="text-blue-500 hover:underline mb-4 block">

    </Link>
  
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
  <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Product</h2>

  <form action={formAction} className="space-y-5">
  <input type="hidden" name="vendorId" value={vendorId} />
   
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
        Category <span className="text-red-500">*</span>
      </label>
      <select
        name="category"
        id="category"
        required
        className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Choose category</option>
        <option value="flower">Flower</option>
        <option value="plants">plants</option>
        <option value="cake">cake</option>
        <option value="personalized">personalized</option>
        <option value="sameday">sameday</option>
        <option value="newArrival">New Arrival</option>
      </select>
    </div>


    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Product Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Enter product name"
        className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>


    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
        Description <span className="text-red-500">*</span>
      </label>
      <textarea
        id="description"
        name="description"
        required
        rows="3"
        placeholder="Enter product description"
        className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
      />
    </div>


    <div>
      <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
        Price (₹) <span className="text-red-500">*</span>
      </label>
      <input
        type="number"
        id="price"
        name="price"
        required
        placeholder="Enter product price"
        className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>


    <div>
      <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
        Upload Image <span className="text-red-500">*</span>
      </label>
      <input
        type="file"
        id="image"
        name="image"
        required
        accept="image/*"
        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
    </div>

 
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
    >
      Submit
    </button>
  </form>
</div>


    {state?.success && (
        <p className="mt-4 text-center text-green-600">
         Dear vendor your product is successfully inserted !
        </p>
      )}
      {state?.error && (
        <p className="mt-4 text-center text-red-600">{state.error}</p>
      )}
  </div>
  )
}
