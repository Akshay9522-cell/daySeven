"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Toaster,toast } from 'react-hot-toast';


export default function Headerv () {
  const router = useRouter();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = typeof window !== 'undefined' ? localStorage.getItem('vendor') : null;
      const email = typeof window !== 'undefined' ? localStorage.getItem('email') : null;
      setName(name || '')
      setEmail(email || '')
    }
  }, [])
  return (
    <div  className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 text-white  rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl font-semibold ml-20 ">vendor Dashboard</h1>
        <p className="text-white ">User : {name}  </p>
        <p className="text-white ">Email: {email}    </p>
        <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 px-2 rounded-lg"
          onClick={() => { localStorage.clear(), router.push('/vendor/login'),toast.success('Logout successfully') }  }>
          Logout
        </button>
      </div>
    </div>
  );
}

