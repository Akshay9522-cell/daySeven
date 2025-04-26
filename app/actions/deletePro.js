'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function deletePro(id){

     console.log(id)
     try {
        const data = await prisma.insertproduct.delete({where:{id}})
        console.log(data)
        return {success:true,data}
     } catch (error) {
        console.log('error fetching ',error)
        return{error:'something went wrong'}
     }
}