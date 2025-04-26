'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function adminList() {
    
    try {
        const admins= await prisma.admin.findMany()
        return admins
    } catch (error) {
        console.error("Error fetching products:", error);
    return [];
    }
}