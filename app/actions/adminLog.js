'use server'

import { PrismaClient } from "@prisma/client"
import { error } from "console"

const prisma= new PrismaClient()



export default async function adminLog(prevState,formData){

    const email= formData.get('email')
    const password=formData.get('password')

    try {
        const admin = await prisma.admin.findFirst({
            where: {email}
        });
        console.log(admin)
        if (!admin) {
            return { success: false, error:'user not found' };
        }

        if(admin.password!== password){
            return { success: false, error:'password not found' };
        }
        if (admin.status !== 'approved') {
            return { success: false, error: 'Account not approved yet' };
          }
         
          return {success:true,admin}
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}