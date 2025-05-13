'use client'
import React, { useActionState,useEffect } from 'react'
import vendorLog from '../../actions/vendorLog';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { Toaster,toast } from 'react-hot-toast';


const initialState = {
    success: false,
    error: ''
  };


export default function page() {
    const[state,formAction]=useActionState(vendorLog ,initialState)

 const router=useRouter()
    useEffect(() => {
        if (state.success) {
          console.log(state.vendor);
          localStorage.setItem("email",state.vendor.email)
          localStorage.setItem("vendor",state.vendor.name)
          localStorage.setItem('id',state.vendor.id)
          router.push("/vendor/vendorDashboard");
          toast.success('logged in Successfully')
        }
      }, [state.success, router]);
  return (
    <>
    <Navbar/>
    <div className='footer'>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 rounded-md p-3  px-4">
  <form
    action={formAction}
    className="w-full max-w-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  shadow-md rounded-lg p-8 space-y-6"
  >
    <h2 className="text-2xl font-bold text-center text-gray-800">Vendor Login</h2>

    {state?.error && (
      <div className="text-red-600 text-sm font-medium text-center">
        {state.error}
      </div>
    )}

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-9 00">
        Email <sup className="text-red-500">*</sup>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Enter your email"
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
        required
        placeholder="Enter your password"
        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div className="text-sm text-gray-800">
      <span>Don't have registration? </span>
      <Link href="/vendor/signup" className="text-white hover:underline font-medium">
        Click here
      </Link>
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-[#DD2745] text-white rounded-md hover:bg-red-600 transition-colors font-semibold"
    >
      Login
    </button>
  </form>
</div>

    </div>
    <Toaster/>
    </>
  )
}
