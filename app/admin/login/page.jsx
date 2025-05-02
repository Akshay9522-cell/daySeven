'use client'
import React, { useActionState,useEffect} from 'react'
import adminLog from '../../actions/adminLog'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Toaster,toast } from 'react-hot-toast'

const initialState = {
    success: false,
    error: ''
  };


export default function page() {
    const[state,formAction]=useActionState(adminLog ,initialState)
     
      

     
      

 const router=useRouter()
    useEffect(() => {
        if (state.success && state.admin.status=='approved' ) {
           console.log(state.admin);
          localStorage.setItem("adminemail",state.admin.email)
          localStorage.setItem("adminname",state.admin.name)
          localStorage.setItem('id',state.admin.id)
          router.push("/admin/AdminDashboard");
          toast.success('Login Successfully')
        }
      }, [state.success, router]);
     

   

  return (
    <>
    
    <div className='footer'>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <form
    action={formAction}
    className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg space-y-6"
  >
    <h1 className="text-2xl font-bold text-center text-gray-800">Admin Login</h1>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

    <div className="text-sm text-center text-gray-600">
      Don’t have an account?{" "}
      <Link href="/admin/Sign" className="text-blue-600 hover:underline font-medium">
        Register here
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
