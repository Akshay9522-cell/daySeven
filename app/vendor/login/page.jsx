'use client'
import React, { useActionState,useEffect } from 'react'
import vendorLog from '../../actions/vendorLog';
import { useRouter } from 'next/navigation'


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
          localStorage.setItem("name",state.vendor.name)
          localStorage.setItem('id',state.vendor.id)
          router.push("/vendor/vendorDashboard");
        }
      }, [state.success, router]);
  return (
    <div className='m-auto w-50' >
      <form action={formAction} className="m-auto">

      <div className="flex flex-col mb-3">
            <label htmlFor="name" className="text-gray-600">
              Email <sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email"
              className="shadow-lg p-3 border border-gray-300 w-full"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="name" className="text-gray-600">
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Name"
              className="shadow-lg p-3 border border-gray-300 w-full"
            />
          </div>

          <button type='submit'  className="btn" style={{ backgroundColor: "#DD2745", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "20px" }}>Login</button>
        
      </form>

      
    </div>
  )
}
