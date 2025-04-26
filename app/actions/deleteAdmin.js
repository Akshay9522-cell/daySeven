'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function deleteAdmin(id){

     try {
        const admins= await prisma.admin.delete({where:{id}})
        console.log(admins)
        return {succeess:true,admins}
     } catch (error) {
         console.log(error,'something went wrong')
         return{error:'server failed ,check server carefully'}
     }
}