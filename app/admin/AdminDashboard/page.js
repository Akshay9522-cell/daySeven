'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
   
  const router=useRouter()


  useEffect(()=>{
    let name=localStorage.getItem('adminname')
     if(!name){
      router.push('/admin/login')
     } else{
      router.push('/admin/AdminDashboard')
     }
  },[])

  return (
    <div>
      <img src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg" alt="" />

    
    </div>
  )
}
