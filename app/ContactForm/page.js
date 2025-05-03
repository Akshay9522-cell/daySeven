
'use client'
import { useState } from 'react';
import { sendEmail } from '../actions/sendEmail';

export default function ContactForm() {

     const[otp,setOtp]=useState('') 

  function generateOtp(){

       const myOtp= Math.floor(100000 + Math.random()*900000).toString()
       setOtp(myOtp)
       return myOtp
    
  }

  const handleSubmit = async (formData) => {

    
    const myOtp = generateOtp()

    formData.set('otp',myOtp)
    const result = await sendEmail(formData);
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required /> 
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Email</button>
    </form>
  );
}