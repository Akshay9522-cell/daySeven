'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function deleteVendor(id){

     try {
        const vendors= await prisma.vendor.delete({where:{id}})
        console.log(vendors)
        return {succeess:true,vendors}
     } catch (error) {
         console.log(error,'something went wrong')
         return{error:'server failed ,check server carefully'}
     }
}