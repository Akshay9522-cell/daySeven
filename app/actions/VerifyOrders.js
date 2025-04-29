'use server';

import crypto from 'crypto';

import { PrismaClient } from '@prisma/client';
const prisma=new PrismaClient()




export async function verifyOrder(orderId, razorpayPaymentId, razorpaySignature, user) {
    const body = `${orderId}|${razorpayPaymentId}`;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');
  
    console.log('Expected Signature:', expectedSignature);
    console.log('Received Razorpay Signature:', razorpaySignature);
  
    if (expectedSignature === razorpaySignature) {
 
      await prisma.order.update({
        where: {
          razorpayOrderId: orderId, 
        },
        data: {
          razorpayPaymentId: razorpayPaymentId,
          razorpaySignature: razorpaySignature,
          paymentStatus: "paid",
        }
        
      });
      return { isOk: true };
    } else {
      console.error('Signature mismatch!');
      return { isOk: false };
    }
  }
  