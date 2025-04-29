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
    <h1>akshay dash</h1>
    </div>
  )
}
