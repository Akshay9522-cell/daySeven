'use server'

import { PrismaClient } from "@prisma/client"

const prisma =new PrismaClient()

export async function POST(req){

    try {
        const data=await req.json()
        console.log(data)

        const{id}=data

        const vDetail=await prisma.vendor.findFirst({
            where:{id}
        })
        console.log(vDetail)

        return Response.json({success:true,message:'server  is fine',data:vDetail})

    } catch (error) {
        return Response.json({success:false,message:'server is in danger'})
    }
}