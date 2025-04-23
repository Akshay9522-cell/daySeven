"use client";


import Link from "next/link";
import React from 'react'
import { useActionState } from "react";
import { registerUser } from '../../actions/registerUser';




export default function Product() {
   
  const[state,formAction]=useActionState(registerUser)
  
  return (
    <>
      <form action={formAction}>
      Name:
      <input
        type="text"
        name="name"
        
      />
      Age:
      <input
        type="text"
        name="age"
       
      />
      <button type="submit">save</button>
      </form>
      <Link href="product"></Link>
      <h1 className="relative left-75 top-40">product</h1>
      
    </>
  );
}
