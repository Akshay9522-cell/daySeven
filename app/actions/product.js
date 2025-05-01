'use server'


import { PrismaClient } from "@prisma/client"

const prisma =new PrismaClient()


export async function vendorApproved(){

       try {
          const data=await prisma.vendor.findMany()
          
       } catch (error) {
        
       }
}