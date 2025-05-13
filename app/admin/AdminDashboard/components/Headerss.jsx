"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { Toaster,toast } from 'react-hot-toast';
export default function Headerss () {
  const router = useRouter();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = typeof window !== 'undefined' ? localStorage.getItem('adminname') : null;
      const email = typeof window !== 'undefined' ? localStorage.getItem('adminemail') : null;
      setName(name || '')
      setEmail(email || '')
    }
  }, [])
  function logout() {
    const verifiedEmails = localStorage.getItem('verified_emails'); // notice plural (array)
  
    localStorage.clear();
  
    if (verifiedEmails) {
      localStorage.setItem('verified_emails', verifiedEmails);
    }
  
    router.push('/home');
    toast.success('Logged out successfully!');
  }
  
  return (
    <div className="className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2 ">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl font-semibold ml-20 ">Admin Dashboard</h1>
        {/* <p className="text-white ">User : {name}  </p>
        <p className="text-white ">Email: {email}    </p> */}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
          onClick={logout }>
          Logout
        </button>
      </div>
    </div>
  );
}

