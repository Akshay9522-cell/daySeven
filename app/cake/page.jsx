'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
import { addfav } from '../redux/favSlice';

export default function Page() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the action with the product details and initial quantity of 1
    dispatch(add({ ...product, quantity: 1 }));
  };

  const products = [
    {
      id: '1',
      proName: 'Chocolate Cake',
      proImage: '/images/cake1.webp',
      proDesc:'A very adorable choclate cake with fresh cream',
      proPrice: 20.99,
    },
    {
      id: '2',
      proName: 'Vanilla Cake',
      proImage: '/images/cake2.jpeg',
      proDesc:'A very adorable choclate cake with fresh cream',
      proPrice: 22.99,
    },
    {
      id: '3',
      proName: 'Strawberry Cake',
      proImage: '/images/cake3.jpeg',
      proDesc:'A very adorable choclate cake with fresh cream',
      proPrice: 18.99,
    },
    {
      id: '4',
      proName: 'Carrot Cake',
      proImage: '/images/cake4.jpeg',
      proDesc:'A very adorable choclate cake with fresh cream',
      proPrice: 15.99,
    },
    {
      id: '5',
      proName: 'Cheesecake',
      proImage: '/images/cake5.jpeg',
      proDesc:'A very adorable choclate cake with fresh cream',
      proPrice: 25.99,
    },
    {
      id: '6',
      proName: 'Lemon Cake',
      proImage: '/images/cake6.jpeg',
      proDesc:'A very adorable choclate cake with fresh cream',
      proPrice: 19.99,
    },
    {
      id: '7',
      proName: 'Red Velvet Cake',
      proImage: '/images/cake7.webp',
      proDesc:'A very adorable choclate cake with fresh cream',
      proPrice: 21.99,
    },
    {
      id: '8',
      proName: 'Coffee Cake',
      proImage: '/images/cake8.jpeg',
      proDesc:'A very adorable choclate cake with fresh cream',
      proPrice: 17.99,
    },  
  ];

  return (
    <div>
     <div  className='fixed top-0 w-full bg-white shadow z-10 '  >
              <Navbar />
              </div>
      <h1 className='flex justify-center items-center p-6 shadow-lg text-red-500'  >Cake's </h1>
      <div className="flex flex-wrap gap-10 m-auto ">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover" src={product.proImage} alt={product.proName} />
            <div className="p-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">{product.proName}</h5>
              <p className="text-gray-600 text-sm">{product.proDesc}</p>
              <p className="text-gray-600 text-sm">{product.proPrice}</p>
               <div className='flex gap-3'>
                            <button
                              onClick={() => handleAddToCart(product)} // Dispatch action with the product data
                              className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                            >
                              Add to Cart
                            </button>
              
                            <button
                            onClick={() => dispatch(addfav(product))} // Dispatch action with the product data
                              className= "  bg-red-700 text-white py-2 px-2 rounded hover:bg-red-600 focus:ring-4 focus:ring-blue-300"
                            >
                              Add to Wishlist
                            </button>
                            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
