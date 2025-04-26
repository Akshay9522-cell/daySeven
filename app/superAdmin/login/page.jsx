'use client'
import React, { useState } from 'react'
import { Toaster,toast} from'react-hot-toast'
import { useRouter } from 'next/navigation'
import SuperHeader from '../dashboard/components/superHeader'

export default function Login() {

     const router=useRouter()
     const[email,setEmail]=useState('')
     const[password,setPassword]=useState('')

      function loginAdmin(){

        if(email == 'akshaynamdev963@gmail.com' && password == 'shree9522'){
            toast.success('Successfully login!')
            localStorage.setItem('user',email)
            router.push('/superAdmin/dashboard')
        } else{
            toast.error('invalid email or password')
        }
      }
  return (
    <>
        <SuperHeader/>
    <div className="m-auto p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Hi, I am Superadmin</h1>
  
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
      />
    </div>
  
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your password"
      />
    </div>
  
    <button
      onClick={() => loginAdmin()}
      className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-200"
    >
      Log In
    </button>
    <Toaster/>
      </div>
      </>
  
  )
}
