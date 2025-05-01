"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
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
    <div className="bg-gray-700 ">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl font-semibold ml-20 ">vendor Dashboard</h1>
        {/* <p className="text-white ">User : {name}  </p>
        <p className="text-white ">Email: {email}    </p> */}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
          onClick={() => { localStorage.clear(), router.push('/') }  }>
          Logout
        </button>
      </div>
    </div>
  );
}

