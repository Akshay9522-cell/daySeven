'use client'
import React, { useEffect, useState } from 'react'
import { vendorsList } from '../../../actions/vendorsList'
import axios from 'axios'

export default function page() {

  const[vendor,setVendor]=useState([])
  const[search,setSearch]=useState('')
  const[filter,setFilter]=useState([])
  const [now, setNow] = useState(null);
  const[show,setShow]=useState([])

    
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

    async function vendorDetail(id){
         
       let api='/api/vendorDetails'

       await axios.post(api,{id:id}).then((res)=>{
            console.log(res.data)
            setShow(res.data.data)
       })
            
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
     <div className=' rounded-lg shadow-md p-4'>
                 <h1 className='text-xl font-semibold mb-2'>    {show.name}</h1>
                 <p className='text-sm text-gray-600 '>    {show.email} </p>
                <p className='text-sm text-gray-600 ' >  {show.phone} </p>
                 <p className='text-sm text-green-600 ' >  {show.status} </p>
                    </div>
        {
         filter.length>0 ?(

            
                filter.map((e)=>{
                    return(
                        <>
                        <ul>
                        <li key={e.id} className="border-b py-2">
                        <p className="font-semibold">{e.name}</p>
                     
                          <div className="bg-gradient-to-r from-sky-400 to-gray-500 text-white p-2 w-20  hover rounded-lg shadow-lg">
                            <button onClick={()=>{vendorDetail(e.id)}} >Get Detail</button>
                           </div>
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
