'use client'

import React, { useActionState } from 'react'

import  vendoeReg from '../../actions/vendoeReg'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Toaster,toast } from 'react-hot-toast'

export default function Sign() {

    const[state,formAction]=useActionState(vendoeReg)
  return (

    <>
    <Navbar/>
    <div className='footer'>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 rounded-md p-3 px-4">
  <form
    className="w-full max-w-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   shadow-md rounded-lg p-8 space-y-6"
    action={formAction}
  >
    <h2 className="text-2xl font-bold text-center text-gray-800">Vendor Registration</h2>

    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-900">
        Name <sup className="text-red-500">*</sup>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
        Email <sup className="text-red-500">*</sup>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-900">
        Password <sup className="text-red-500">*</sup>
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
        Phone Number <sup className="text-red-500">*</sup>
      </label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
        required
        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div className="text-sm text-center text-gray-800">
      Already have an account?{" "}
      <Link href="/vendor/login" className="text-white hover:underline font-medium">
        Click here
      </Link>
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-[#DD2745] text-white rounded-md hover:bg-red-600 transition-colors font-semibold"
    >
      Save
    </button>
  </form>
</div>

    </div>
    <Toaster/>
    </>
  )
}
