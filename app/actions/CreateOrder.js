'use server';

import Razorpay from 'razorpay';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  throw new Error("Missing Razorpay environment variables.");
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function createOrder(amount, user, products) {
  if (!amount || !user?.name || !user?.email || !products?.length) {
    throw new Error("Missing required order information.");
  }

  const options = {
    amount: Math.round(Number(amount)),
    currency: 'INR',
    receipt: `receipt_order_${Date.now()}`,
    notes: {
      productNames: products.map(p => p.proName).join(', '), // Adjust naming as needed
      user: user?.id || 'anonymous',
      products: JSON.stringify(products),
    },
  };

  try {
    const orders = await razorpay.orders.create(options);

    if (!orders || !orders.id) {
      throw new Error('Order creation failed: No order ID received.');
    }

    await prisma.order.create({
      data: {
        razorpayOrderId: orders.id,
        razorpayPaymentId: '',
        amount,
        userName: user.name,
        userEmail: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        pincode: user.pincode,
        products: JSON.stringify(products),
      }
    });

    return orders;
  } catch (err) {
    console.error('Error during order creation:', err);
    throw new Error('Order creation failed');
  }
}
