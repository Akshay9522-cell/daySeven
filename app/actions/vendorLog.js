'use server'

import { PrismaClient } from "@prisma/client"

const prisma= new PrismaClient()



export default async function vendorLog(prevState,formData){

    const email= formData.get('email')
    const password=formData.get('password')

    try {
        const vendor = await prisma.vendor.findFirst({
            where: {
                email
            }
        });
        console.log(email)

         if(!vendor){
            return{success:false,error:'user not found'}
         }

         if(vendor.password!=password){
            return{success:false,error:"password is invalid"}
         }

         if(vendor.status!=='accepted'){
            return{success:false,error:"invalid"}
         }

      
         return { success: true, vendor };
         
      
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}