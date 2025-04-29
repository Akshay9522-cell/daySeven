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
      proName: 'Sunflower',
      proImage: '/images/fl1.jpeg',
      proPrice: 10.99,
    },
    {
      id: '2',
      proName: 'Lily',
      proImage: '/images/fl2.jpeg',
      proPrice: 12.99,
    },
    {
      id: '3',
      proName: 'Rose',
      proImage: '/images/fl3.jpeg',
      proPrice: 9.99,
    },
    {
      id: '4',
      proName: 'Margenta',
      proImage: '/images/fl4.jpeg',
      proPrice: 14.99,
    },
    {
      id: '5',
      proName: 'Chessy',
      proImage: '/images/fl5.jpeg',
      proPrice: 8.99,
    },
    {
      id: '6',
      proName: 'Phiana',
      proImage: '/images/fl6.jpeg',
      proPrice: 11.99,
    },
    {
      id: '7',
      proName: 'Eliana',
      proImage: '/images/fl7.webp',
      proPrice: 13.99,
    },
    {
      id: '8',
      proName: 'Crusty',
      proImage: '/images/fl8.jpeg',
      proPrice: 7.99,
    },
  ];

  return (
    <div>
     <div  className='fixed top-0 w-full bg-white shadow z-10 '  >
          <Navbar />
          </div>
          <div className='text-red-600'>
      <h1>This is a flower page</h1>
      </div>
      <div className="flex flex-wrap gap-5 ml-12  relative top-10 " >
        {products.map((product) => (
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover" src={product.proImage} alt={product.proName} />
            <div className="p-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">{product.proName}</h5>
              <p className="text-gray-600 text-sm">₹{product.proPrice}</p>
              <div className='flex gap-3'>
              <button
                onClick={() => handleAddToCart(product)} // Dispatch action with the product data
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              >
                Add to Cart
              </button>

              <button
              onClick={() => dispatch(addfav(product))} // Dispatch action with the product data
                className= " p-6 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 focus:ring-4 focus:ring-blue-300"
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
