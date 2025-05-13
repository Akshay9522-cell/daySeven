'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function page() {

  const[show,setShow]=useState([])
  
     async function allOrder(){
         let api='/api/orders'

         await axios.get(api).then((res)=>{
             console.log(res.data)
             setShow(res.data.data)
         })
     }

     useEffect(()=>{
        allOrder()
     },[])

    
  return (
    <div>
      All Ordere
  {
    show.map((e)=>{
        return(
            <>
       <table className="min-w-full border border-gray-300 text-center">
  <thead className="bg-gray-100">
    <tr>
      <th className="py-3 px-6 border-b">User Name</th>
      <th className="py-3 px-6 border-b">Email</th>
      <th className="py-3 px-6 border-b">Address</th>
      <th className="py-3 px-6 border-b">Phone</th>
      <th className="py-3 px-6 border-b">Payment</th>
      <th className="py-3 px-6 border-b">Products</th>
    </tr>
  </thead>
  <tbody>
    <tr key={e.id} className="hover:bg-gray-50">
      <td className="py-4 px-6 border-b">{e.userName}</td>
      <td className="py-4 px-6 border-b">{e.userEmail}</td>
      <td className="py-4 px-6 border-b">{e.address}</td>
      <td className="py-4 px-6 border-b">{e.phoneNumber}</td>
      <td className="py-4 px-6 border-b">{e.paymentStatus}</td>
      <td className="py-4 px-6 border-b">
        <div className="flex  gap-4">
          {JSON.parse(e.products).map((pro) => (
            <div
              key={pro.productId}
              className="flex-col items-center gap-2 bg-gray-100 rounded-lg"
            >
              <img
                src={pro.image}
                alt={pro.productName}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="text-left  ">
                <p className="font-semibold">{pro.productName}</p>
              
              </div>
             
            </div>
   
          
          ))}
        </div>
      </td>
    
    </tr>
  </tbody>
</table>


            </>
        )
    })
  }

    </div>
  )
}
