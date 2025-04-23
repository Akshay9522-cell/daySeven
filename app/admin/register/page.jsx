'use client'
import Link from 'next/link'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useActionState } from "react";

import { adminRegister } from '../../actions/adminRegister';
export default function Register() {

  const[state,formAction]=useActionState(adminRegister)

  console.log(process.env.DATABASE_URL)
  return (
    <div>
      <Link href='regsiter'  ></Link>
<div className='w-60 m-auto'>
      
    <form action={formAction}>
      Name:
      <input
        type="text"
        name="name"
        
      />
      contact:
      <input
        type="number"
        name="contact"
       
      />
       email:
      <input
        type="email"
        name="email"
       
      />
       password:
      <input
        type="password"
        name="password"
       
      />
      <button type="submit">save</button>
      </form>
    </div>
    
    </div>
  )
}
