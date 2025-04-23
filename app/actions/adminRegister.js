
'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function adminRegister(prevState, formData) {
const name = formData.get('name');
const contact = formData.get('contact');
const email = formData.get('email');
const password = formData.get('password');

if (!name || !contact || !email || !password) {
  return { success: false, error: 'All fields are required' };
}

console.log(formData)

try {
    const users = await prisma.post.create({
        data: { name,contact,email,password } 
    });
    console.log(users,"good ")
    return { success: true, error: '' };
  } catch (error) {
    console.error('Error registering user:', error.message, error);
    return { success: false, error: 'Failed to register user' };
  }

 


}
