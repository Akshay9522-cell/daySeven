
'use client'
import Link from "next/link";
import '.././login/page.css';
import { Inter, Roboto_Mono } from 'next/font/google';

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs'
console.log(SignedIn)

import { Geist, Geist_Mono } from 'next/font/google'
import { useState } from "react";


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'], weight: '400', variable: '--font-inter' });
   const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400', variable: '--font-roboto-mono' });
   
   export { inter, robotoMono };

export default function Login({children}){
  
    const user=useUser()
    console.log(user)
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')

    

    async function logIn() {
        
        console.log(email,password)
          
    }

    return(
        <>
         <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
        <div className="w-full border-b-2 h-5 text-center ">
         <img src="/images/lgo.png" alt="" className="w-20 absolute top-1/16 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  />
         <img src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg" alt="" className="w-fit h-200" />
        </div>

        <div className=" p-12 absolute top-97 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-130 h-auto ">
         <div>
         <h1 className="text-2xl inter">Sign in</h1>
             
              <p>Don't have an account?  <span className="text-xl font-extrabold" > <SignUpButton /></span></p>
         </div>
         
         <div className="mt-10">
            <label htmlFor="" className="text-gray-600">Email ID or Mobile Number <sup>*</sup></label> <br />
            <input type="email" placeholder="Enter Email or Mobile Number"  value={email} onChange={(e)=>{setEmail(e.target.value)}} className="shadow-lg p-3 border border-gray-300 w-full" />
<br />
<br />
            <label htmlFor="" className="text-gray-600"  >Password <sup>*</sup></label> <br />
            <input type="password" placeholder="Enter Password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password"  className="shadow-lg p-3 border border-gray-300 w-full" />
         </div>
        
         <div className="btn"><SignInButton /></div>
         <div className="relative flex justify-end top-7">
         <p className="text-gray-500">Forgot Password ?</p>
         </div>
<br /><br />
         <div className="flex justify-center items-center gap-3">
            <div className="w-41 h-1 bg-gray-300"></div>
            <p className="text-2" >or Signin</p>
            <div className="w-41 h-1 bg-gray-300"></div>
         </div>

         <div className="flex gap-10 justify-center items-center">
            <div className="w-20 h-8 border border-black flex justify-center items-center "> github</div>  
            <div className="w-20 h-8 border border-black flex justify-center items-center  ">Google</div>
            <div className="w-20 h-8 border border-black flex justify-center items-center  " >Facebook</div>
         </div>
        </div>
        </>
    )
}