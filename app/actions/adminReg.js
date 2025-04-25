'use server'

import { PrismaClient } from "@prisma/client"
const prisma= new PrismaClient()

export default async function adminReg(prevState,formData) {
     
    const name = formData.get('name') 
    const email = formData.get('email') 
    const password = formData.get('password') 
    const phone = formData.get('phone') 
console.log(name,email,password,phone)  

try {
    const adminInf=await prisma.admin.create({
        data:{name,email,password,phone}
    })
    return { success: true };
} catch (error) {
    console.error('Error creating product:', error);
        return { error: 'Failed to create product' };
}
    
}