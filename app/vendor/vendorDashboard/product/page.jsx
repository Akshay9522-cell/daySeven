'use client'
import Link from 'next/link'
import React, { useActionState } from 'react'
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



  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <Link href='product' className="text-blue-500 hover:underline mb-4 block">

    </Link>
  
    <form  action={formAction} className="space-y-4">
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="category"
          id="category"
        
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Choose category</option>
          <option value="birthday gift">Birthday gift</option>
          <option value="aniversary gift">Aniversary gift</option>
          <option value="wedding gift">Wedding gift</option>
          <option value="festival gift">Festivals gift</option>
          <option value="education gift">Educational gift</option>
        </select>
      </div>
  
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          name='name'
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter product name"
        />
      </div>
  
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          id="description"
          name='description'
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter product description"
        />
      </div>
  
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          name='price'
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter product price"
        />
      </div>
  
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image
        </label>
        <input
          type="file"
          id="image"
          name='image'
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
  
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>

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
