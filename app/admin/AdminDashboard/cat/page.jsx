'use client'
import React from 'react'

export default function page() {

   function addCater(){
    alert("product added successfully")
    
   }
  return (
    <div>
      <h1>akshay namdev</h1>
      <div class="flex flex-col md:flex-row items-center gap-4 p-4">
  <label class="text-lg font-medium">Add Category:</label>
  <input
    type="text"
    class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter category"
  />
  <button
    class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
    onClick={()=>{addCater()}}
  >
    ADD
  </button>
</div>

    </div>
  )
}
