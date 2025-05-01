'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
     const router=useRouter()
    useEffect(()=>{
       let name=localStorage.getItem('vendor')

       if(!name){
          router.push('/vendor/login')
       } else{
         router.push('/vendor/vendorDashboard')
       }
    })

  return (
    <div>
    
     <h1>Welcome! <span className='text-red-600'>{localStorage.getItem('vendor')}</span></h1> <br></br>

     <h1>Welcome to <span className='text-red-600' >Your DASHBOARD</span></h1>
    <img src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg" alt="" />

    </div>
  )
}
