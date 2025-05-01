'use server'

import { PrismaClient } from "@prisma/client"

const prisma= new PrismaClient()

export async function approveAdmin(id){
    
    try {
        const admin=await prisma.admin.update({
            where:{id},
             data:{status:'approved'}
        })
        console.log(admin)
        return{success:true,admin}
    } catch (error) {
        console.log(error)
        return{error:'something went wrong'}
    }
}