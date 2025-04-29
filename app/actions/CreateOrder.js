'use server';

import Razorpay from 'razorpay';

import { PrismaClient } from '@prisma/client';

const prisma=new PrismaClient()

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
  
});
console.log(process.env.RAZORPAY_KEY_ID);



export async function createOrder(amount, user, products) {
    const options = {
      
      amount: String(amount), 
      currency: 'INR',
      receipt: `receipt_order_${Date.now()}`,
      notes: {
        productName: products.map(p => p.productName).join(', '),
        user: user?.id || 'anonymous',
        products: JSON.stringify(products),
      },
    };
   console.log(options)
    try {
      const orders = await razorpay.orders.create(options);
  
      if (!orders || !orders.id) {
        throw new Error('Order creation failed: No order ID received.');
      }
  
     
      await prisma.order.create({
        data: {
          razorpayOrderId: orders.id,
          razorpayPaymentId: '', // Razorpay payment ID will be updated later after successful payment
          amount,
          userName: user.name,
          userEmail: user.email,
          phoneNumber: user.phoneNumber,
          address: user.address,
          pincode: user.pincode,
          products: JSON.stringify(products), // Save the products in a string format
        }
      });
  
      return orders;
  
    } catch (err) {
      console.error('Error during order creation:', err);
      throw new Error('Order creation failed');
    }
  
  } 

  