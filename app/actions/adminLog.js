'use server'

import { PrismaClient } from "@prisma/client"

const prisma= new PrismaClient()



export default async function adminLog(prevState,formData){

    const email= formData.get('email')
    const password=formData.get('password')

    try {
        const admin = await prisma.admin.findFirst({
            where: {
                email,
                password
            }
        });
        console.log(admin)
        if (admin) {
            return { success: true, admin };
         
        } else {
            return { error: 'Invalid email or password' };
        }
    
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}