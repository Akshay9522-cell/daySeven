
"use server"; 
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); 

export async function displayProduct() {
  try {
  
    const product = await prisma.insertproduct.findMany();
    return product; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}