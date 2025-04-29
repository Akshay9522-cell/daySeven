'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import '../../app/login/page.css'
export default function page() {

    const[inp,setInp]=useState({})

    function handleInp(e){
        let name=e.target.name
        let value=e.target.value

        setInp(values=>({...values,[name]:value}))

    }

    async function signUp(){
       console.log(inp)
    }
   
  return (
    
    <>
    <div className="w-full border border-gray-500 h-13 text-center ">
     <img src="/images/lgo.png" alt="" className="w-20 absolute top-1/22 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  />
     <img src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg" alt="" />
    </div>

    <div className=" p-12 absolute top-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-130 h-auto ">
     <div>
     <h1 className="text-2xl inter"> Sign Up</h1>
     <p>Already have an account?  <span  className="text-blue-600 relative left-2.5 font-bold"> <Link href='login'>Sign in</Link></span></p>
     </div>

  <div className='flex gap-10'>
     <div>
     <label htmlFor="">Title<sup>*</sup></label> <br />
     <select name="title" onChange={handleInp} className='border border-black p-2'>
        <option>Mr.</option>
        <option>Mrs.</option>
     </select>
     </div>

     <div>
     <label htmlFor="">Full Name<sup>*</sup></label> <br />
     <input type="text" name="name" onChange={handleInp} className='border border-black p-2 w-79' />
     </div>

     </div>
<br />
     <div className=''>
        <div>
            <label htmlFor="">Email ID<sup>*</sup></label> <br />
            <input type="email" name="email" onChange={handleInp} className='border border-black p-2 w-full' />
        </div>
          <div>
         <label htmlFor="">Password<sup>*</sup></label> <br />
         <input type="password" name="password" onChange={handleInp} className='border border-black p-2 w-full' />
         </div>
     </div>

     <div className='flex justify-between'>
     <div>
     <label htmlFor="">Mobile Number<sup>*</sup></label> <br />
     <input type="number" name="phone" onChange={handleInp} className='border border-black p-2 w-full' />
     <select name="code" onChange={handleInp} className='border border-black p-2'>
        <option><span className='font-bold'>(+91) </span>india</option>
        <option ><span>(+11) </span>canada</option>
        <option><span>(+51) </span>Australia</option>
        <option><span>(+81) </span>spain</option>
        <option><span>(+23) </span>france</option>
        <option><span>(+45) </span>finland</option>
        <option><span>(+44) </span>sweeden</option>
        <option><span>(+99) </span>hungry</option>
        <option><span>(+87) </span>austria</option>
        <option><span>(+11) </span>germany</option>
        <option><span>(+43) </span>africa</option>
        <option><span>(+90) </span>america</option>
     </select>
     </div>

     <div>
        <label htmlFor="">Date of Birth</label> <br />
        <input type="date" name="date" onChange={handleInp} className='border border-black p-2 w-full' />
     </div>
     </div>


     <div className='flex gap-3 p-2 '>
        <input type="checkbox" className='w-5' />
        <p className='flex justify-center items-center '>I agree to receive special updates,offers,promotions from IGP.com</p>
     </div>
     
    
     <div className="btn"><button onClick={signUp}>SIGN UP</button></div>
     <div className="relative flex justify-end top-7">
    
     </div>
<br /><br />
     <div className="flex justify-center items-center gap-3">
        <div className="w-41 h-1 bg-gray-300"></div>
        <p>or Signin</p>
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
