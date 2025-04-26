
'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getPendingVendors() {
  return await prisma.vendor.findMany({
    where: { status: 'pending' },
  });
}

export async function updateVendorStatus(id, status) {
  return await prisma.vendor.update({
    where: { id },
    data: { status },
  });
}
