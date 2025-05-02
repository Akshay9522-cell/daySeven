'use client';
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
      id: '11',
      proName: 'Snake Plant',
      proImage: '/images/snake-plant.jpeg',
      proPrice: 15.99,
    },
    {
      id: '21',
      proName: 'Money Plant',
      proImage: '/images/money-plant.webp',
      proPrice: 12.99,
    },
    {
      id: '30',
      proName: 'Aloe Vera',
      proImage: '/images/aloe-vera.webp',
      proPrice: 10.99,
    },
    {
      id: '43',
      proName: 'Peace Lily',
      proImage: '/images/peace-lily.webp',
      proPrice: 18.99,
    },
    {
      id: '65',
      proName: 'Spider Plant',
      proImage: '/images/spider-plant.jpeg',
      proPrice: 14.99,
    },
    {
      id: '46',
      proName: 'Bamboo Palm',
      proImage: '/images/bamboo-palm.jpg',
      proPrice: 20.99,
    },
    {
      id: '27',
      proName: 'Philodendron',
      proImage: '/images/philodendron.webp',
      proPrice: 22.99,
    },
    {
      id: '18',
      proName: 'Ficus Bonsai',
      proImage: '/images/ficus-bonsai.jpeg',
      proPrice: 25.99,
    },
  ];

  return (
    <div>
        <div  className='fixed top-0 w-full bg-white shadow z-10 '  >
      <Navbar />
      </div>
      <h1>This is a plant page</h1>
      <div className="flex flex-wrap gap-25 m-auto  ">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover" src={product.proImage} alt={product.proName} />
            <div className="p-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">{product.proName}</h5>
              <p className="text-gray-600 text-sm">₹{product.proPrice}</p>
               <div className='flex gap-3'>
                            <button
                              onClick={() => handleAddToCart(product)} // Dispatch action with the product data
                              className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                            >
                              Add to Cart
                            </button>
              
                            <button
                            onClick={() => dispatch(addfav(product))} // Dispatch action with the product data
                              className= " p-6 bg-red-700 text-white py-2 px-2 rounded hover:bg-red-600 focus:ring-4 focus:ring-blue-300"
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
