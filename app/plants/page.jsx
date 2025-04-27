'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';

export default function Page() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the action with the product details and initial quantity of 1
    dispatch(add({ ...product, quantity: 1 }));
  };

  const products = [
    {
      id: '1',
      proName: 'Snake Plant',
      proImage: '/images/snake-plant.jpeg',
      proPrice: 15.99,
    },
    {
      id: '2',
      proName: 'Money Plant',
      proImage: '/images/money-plant.webp',
      proPrice: 12.99,
    },
    {
      id: '3',
      proName: 'Aloe Vera',
      proImage: '/images/aloe-vera.webp',
      proPrice: 10.99,
    },
    {
      id: '4',
      proName: 'Peace Lily',
      proImage: '/images/peace-lily.webp',
      proPrice: 18.99,
    },
    {
      id: '5',
      proName: 'Spider Plant',
      proImage: '/images/spider-plant.jpeg',
      proPrice: 14.99,
    },
    {
      id: '6',
      proName: 'Bamboo Palm',
      proImage: '/images/bamboo-palm.jpg',
      proPrice: 20.99,
    },
    {
      id: '7',
      proName: 'Philodendron',
      proImage: '/images/philodendron.webp',
      proPrice: 22.99,
    },
    {
      id: '8',
      proName: 'Ficus Bonsai',
      proImage: '/images/ficus-bonsai.jpeg',
      proPrice: 25.99,
    },
  ];

  return (
    <div>
      <Navbar />
      <h1>This is a plant page</h1>
      <div className="flex flex-wrap gap-5 ml-12">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover" src={product.proImage} alt={product.proName} />
            <div className="p-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">{product.proName}</h5>
              <p className="text-gray-600 text-sm"></p>
              <button
                onClick={() => handleAddToCart(product)} // Dispatch action with the product data
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
