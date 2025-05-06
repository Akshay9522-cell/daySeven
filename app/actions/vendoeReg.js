'use server'

import { PrismaClient } from "@prisma/client"

const prisma= new PrismaClient()

export default async function vendoeReg(prevState,formData){

    const name = formData.get('name') 
    const email = formData.get('email') 
    const password = formData.get('password') 
    const phone = formData.get('phone') 
console.log(name,email,password,phone)  

try {
    const vendorInfo=await prisma.vendor.create({
        data:{name,email,password,phone,status: "pending",}
    })
    return { success: true,vendorInfo };
} catch (error) {
    console.error('Error creating product:', error);
        return { error: 'Failed to create vendor' };
}
    
}

export async function getVendorWithProducts(vendorId) {
    try {
        const vendorProducts = await prisma.vendor.findUnique({
            where: { id: Number(vendorId) },
            include: {
                products: true, 
            },
        });

        console.log(vendorProducts);

        return { success: true, vendor: vendorProducts };
    } catch (error) {
        console.error('Error fetching vendor and products:', error);
        return { success: false, error: 'Failed to fetch vendor details' };
    }
}