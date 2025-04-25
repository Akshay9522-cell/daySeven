'use server'

import { PrismaClient } from "@prisma/client"

const prisma= new PrismaClient()



export default async function vendorLog(prevState,formData){

    const email= formData.get('email')
    const password=formData.get('password')

    try {
        const vendor = await prisma.vendor.findFirst({
            where: {
                email,
                password
            }
        });
        console.log(vendor)
        if (vendor) {
            return { success: true, vendor };
         
        } else {
            return { error: 'Invalid email or password' };
        }
    
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}