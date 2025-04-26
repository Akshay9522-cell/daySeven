'use client'
import React, { useEffect, useState } from 'react'
import { vendorsList } from '../../../actions/vendorsList'
export default function page() {

  const[vendor,setVendor]=useState([])
  const[search,setSearch]=useState('')
  const[filter,setFilter]=useState([])
  const [now, setNow] = useState(null);

    
  useEffect(()=>{
    setNow(Date.now())
     const fetchVendors=async()=>{

        const ven=await vendorsList()
        setVendor(ven)
        setFilter(ven)
        console.log(ven)
     }
   fetchVendors()
  },[])

   function handleSrch(){
       
      const srch=search.toLowerCase()
      const result = vendor.filter((e) => {
        return e.name.toLowerCase().includes(srch) || e.email.toLowerCase().includes(srch);
      });
      
      setFilter(result)
   } 

  return (
    <>
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 mt-10">
    <h1 className="text-xl font-semibold text-gray-800 mb-4">Search Vendor Here</h1>
  
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Enter vendor name or email"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSrch}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      
      >
        Search
      </button>
    </div>


  </div>

     <div>
        {
         filter.length>0 ?(

            
                filter.map((e)=>{
                    return(
                        <>
                        <ul>
                        <li key={e.id} className="border-b py-2">
                        <p className="font-semibold">{e.name}</p>
                        <p>{e.email}</p>
                          <p className="text-sm text-gray-500">Status: {e.status}</p>
                        </li>
                        </ul>
                        </>
                    )
                })
             
         ):(

            <p className="text-gray-500">No vendors found.</p>
         )    
        }
     </div>
  </>  
  )
}
