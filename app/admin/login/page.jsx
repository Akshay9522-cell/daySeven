'use client'
import React, { useActionState,useEffect } from 'react'
import adminLog from '../../actions/adminLog'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

const initialState = {
    success: false,
    error: ''
  };


export default function page() {
    const[state,formAction]=useActionState(adminLog ,initialState)

 const router=useRouter()
    useEffect(() => {
        if (state.success) {
          console.log(state.admin);
          localStorage.setItem("adminemail",state.admin.email)
          localStorage.setItem("name",state.admin.name)
          localStorage.setItem('id',state.admin.id)
          router.push("/admin/AdminDashboard");
        }
      }, [state.success, router]);
     

   

  return (
    <>
    <Navbar/>
    <div className='m-auto relative top-30 w-50' >
     
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

          <span>don't have an Account</span><Link href='/admin/Sign'> Register Here</Link>

          <button type='submit'  className="btn" style={{ backgroundColor: "#DD2745", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "20px" }}>Login</button>
        
      </form>

      
    </div>
    </>
  )
}
