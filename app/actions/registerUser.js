// 'use server';
// import {prisma} from '../../lib/prisma'



// export async function registerUser ( formData) {
//     const name = formData.get('name')
//     const age = formData.get('age') 

//     // Validate input
//     if (!name || !age) {
//         return { error: 'All fields are required' };
//     }

//     // Convert age to an integer
//     const ageInt = parseInt(age, 10);
//     if (isNaN(ageInt)) {
//         return { error: 'Age must be a valid number' };
//     }

//     try {
//         const user = await prisma.post.create({
//             data: {
//                 name:name,
//                 age: ageInt, // Store age as an integer
//             },
//         });
//         console.log('User  created:', user);
//         console.log(formData,"formData")
//         return { success: true, user }; // Return the created user for confirmation
//     } catch (error) {
//         console.error('Error creating user:', error);
//         return { error: 'Failed to create user' }; // Return a user-friendly error message
//     } finally {
//         await prisma.$disconnect(); // Ensure the Prisma client is disconnected
//     }
// }
  'use server';

  import { PrismaClient } from '@prisma/client';

  const prisma = new PrismaClient();

export async function registerUser(prevState, formData) {
  const name = formData.get('name');
  const age = formData.get('age');

  if (!name || !age) {
    return { success: false, error: 'All fields are required' };
  }
 console.log(name,age)
  const ageInt = parseInt(age, 10);
  


  try {
    const user = await prisma.post.create({
      data: { name, age:ageInt } 
    });
    console.log(user,"good ")
    return { success: true, error: '' };
  } catch (error) {
    console.error('Error registering user:', error.message, error);
    return { success: false, error: 'Failed to register user' };
  }
}
