'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { vendorsList } from '../../../actions/vendorsList'
import { deactivateVendorStatus } from '../../../actions/vendorActions'

export default function page() {
         
      const[show,setShow]=useState([])
      const[loading,setLoading]=useState(true)
      const[error,setError]=useState(null)
      const [vendors, setVendors] = useState([]);

      useEffect(()=>{

        const fetchVendors=async()=>{

            try {
                const data= await vendorsList()
                setShow(data)
            } catch (error) {
                setError(err)
            } finally{
                setLoading(false)
            }
        }
        fetchVendors()
      },[])

      console.log(show)
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;


    async  function vendorInfo(id,status){
      
         await deactivateVendorStatus(id,status)
         setVendors(vendors.filter(v => v.id !== id));
      }

  return (
    <div>
        <Link href='vendors'></Link>
      <h1>All vendors</h1>
      
      <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
          <th className="border border-gray-300 px-4 py-2 text-left">About </th>
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
             
             <button className='rounded bg-sky-400 px-3 py-2 hover:bg-sky-800' onClick={()=>{vendorInfo(e.id),'rejected'}}>active </button>



            </td>
              

          </tr>
        ))}
      </tbody>
    </table>
    
      
    </div>
  )
}
