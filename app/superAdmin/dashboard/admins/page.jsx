'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {adminList} from '../../../actions/adminList'
import { approveAdmin } from '../../../actions/approveAdmin'
import { deleteAdmin } from '../../../actions/deleteAdmin'

export default function page() {
         
      const[show,setShow]=useState([])
      const[loading,setLoading]=useState(true)
      const[error,setError]=useState(null)

      useEffect(()=>{

        const fetchadmins=async()=>{

            try {
                const data= await adminList()
                setShow(data)
            } catch (error) {
                setError(err)
            } finally{
                setLoading(false)
            }
        }
        fetchadmins()
      },[])

      console.log(show)
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;

     
       const handleApprove=async(id)=>{
           
        try {
          await approveAdmin(id)

          setShow(prev=>
            prev.map((e)=>{
              e.id===id ?{...e,status:'approved'}:e
            })
          )
        } catch (error) {
          console.log("error")
        }
      }
   

  return (
    <div>
        <Link href='admins'></Link>
      <h1>All admins</h1>
      
      <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {show.map((e, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">{e.id}</td>
            <td className="border border-gray-300 px-4 py-2">{e.name}</td>
            <td className="border border-gray-300 px-4 py-2">{e.email}</td>
            <td className="border border-gray-300 px-4 py-2">{e.phone}</td>
            <td className="border border-gray-300 px-4 py-2">
            {e.status !== 'approved' ? (
            <>
            <button
            onClick={() => handleApprove(e.id)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2">
           Accept</button>
      <button onClick={() => deleteAdmin(e.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
        Reject
      </button>
    </>
  ) : (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-green-500 inline-block"></span>
      <span className="text-green-700 font-semibold">Active</span>
    </div>
  )}
</td>

          </tr>
        ))}
      </tbody>
    </table>
    
      
    </div>
  )
}
