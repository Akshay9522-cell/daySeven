'use server';

import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient()

export async function updateProduct(id, data) {
  return await prisma.insertproduct.update({
    where: { id },
    data: {
      name: data.name,
      category: data.category,
      description: data.description,
      price: String(data.price),
      image: data.image,
    },
  });
}
