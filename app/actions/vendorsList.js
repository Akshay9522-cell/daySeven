'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function vendorsList() {
    
    try {
        const vendors= await prisma.vendor.findMany()
        return vendors
    } catch (error) {
        console.error("Error fetching products:", error);
    return [];
    }
}