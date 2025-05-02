'use client'
import Link from 'next/link'
import React from 'react'

export default function page() {
  
   let name=localStorage.getItem('adminname')
   let email=localStorage.getItem('adminemail')
  return (
    <div>
        <h1>Welcone Admin! <span className='text-red-500'>{name} </span> </h1>
    </div>
  )
}
