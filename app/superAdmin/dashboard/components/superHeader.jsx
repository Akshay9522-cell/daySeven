"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
export default function SuperHeader () {
  const router = useRouter();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = typeof window !== 'undefined' ? localStorage.getItem('name') : null;
      const email = typeof window !== 'undefined' ? localStorage.getItem('email') : null;
      setName(name || '')
      setEmail(email || '')
    }
  }, [])
  return (
    <div className="className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2 ">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl font-semibold ml-20 ">SuperAdmin Dashboard</h1>
       
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
          onClick={() => { localStorage.clear(), router.push('/') }  }>
          Logout
        </button>
      </div>
    </div>
  );
}

