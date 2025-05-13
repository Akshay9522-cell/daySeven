'use server'

import { PrismaClient } from "@prisma/client"

const prisma =new PrismaClient()

 export async function GET(req){
       
    try {
      const data=await prisma.order.findMany()
      console.log(data)
        return Response.json({success:true,message:'server on processing',data:data})
    } catch (error) {
        return Response.json({success:false,message:'server alert '})
    }
 }


 