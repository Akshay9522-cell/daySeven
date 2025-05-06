'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function insertProduct(prevState,formData){

    const category= formData.get('category')
    const name= formData.get('name')
    const description= formData.get('description')
    const price= formData.get('price')
    const image= formData.get('image')
    const vendorId = formData.get('vendorId');

    if (!category || !name || !description || !price || !image) {
        return { success: false, error: 'All fields are required' };
      }
      console.log(category,name,description,price,image,vendorId)

      try {
        const newformData=new FormData()

        newformData.append('file',image)
        newformData.append('upload_preset','akshay_a')
        newformData.append('clou_name','dwa4fqbao')
  
        const cloudinaryResponse = await fetch("https://api.cloudinary.com/v1_1/dwa4fqbao/image/upload", {
          method: "POST",
          body: newformData
        });
        //  console.log("cloudinaryResponse :- ", cloudinaryResponse);
         
        const cloudinaryData = await cloudinaryResponse.json();
    
        if (!cloudinaryData.secure_url) {
          return { success: false, error: 'Image upload failed' };
        }
        const priceInt=parseInt(price)
        
        const product= await prisma.insertproduct.create({
            data:{
                category,
                name,
                description,
                price   ,
                image:cloudinaryData.secure_url,
                vendor: {
                  connect: { id: Number(vendorId) },
                },
            
            
            }
        })
          console.log('product saved', product);
          return { success: true, error: '' };
          
      } catch (error) {
        console.error('Server error:', error.message);
    return { success: false, error: 'Something went wrong!' };
      }
     
}