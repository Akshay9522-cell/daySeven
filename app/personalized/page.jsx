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
      id: '9',
      proName: 'Personalized Mug',
      proImage: '/images/mug1.webp',
      proDesc:'A coffee mug with best material and best thing for gift',
      proPrice: 15.99,
    },
    {
      id: '22',
      proName: 'Custom T-Shirt',
      proImage: '/images/tshirt1.webp',
      proDesc:'A t-shirt for men,half-sleeves completely black',
      proPrice: 19.99,
    },
    {
      id: '33',
      proName: 'Engraved Pen',
      proImage: '/images/pen1.webp',
      proDesc:'A black vello pen which is very smooth gift',
      proPrice: 9.99,
    },
    {
      id: '47',
      proName: 'Personalized Notebook',
      proImage: '/images/notebook1.webp',
      proDesc:'A coffee mug with best material and best thing for gift',
      proPrice: 12.99,
    },
    {
      id: '59',
      proName: 'Custom Phone Case',
      proImage: '/images/phonecase1.webp',
      proDesc:'A coffee mug with best material and best thing for gift',
      proPrice: 14.99,
    },
    {
      id: '66',
      proName: 'Personalized Keychain',
      proImage: '/images/keychain1.webp',
      proDesc:'A coffee mug with best material and best thing for gift',
      proPrice: 7.99,
    },
    {
      id: '74',
      proName: 'Custom Calendar',
      proImage: '/images/calendar1.webp',
      proDesc:'A coffee mug with best material and best thing for gift',
      proPrice: 21.99,
    },
    {
      id: '82',
      proName: 'Engraved Watch',
      proImage: '/images/watch1.webp',
      proDesc:'A coffee mug with best material and best thing for gift',
      proPrice: 49.99,
    },
  ];

  return (
    <div>
      <div  className='fixed top-0 w-full bg-white shadow z-10 '  >
           <Navbar />
           </div>
      <h1>This is a personalized product page</h1>
      <div className="flex flex-wrap gap-5 m-auto pt-12">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img className="rounded-t-lg w-full h-48 object-cover" src={product.proImage} alt={product.proName} />
            <div className="p-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">{product.proName}</h5>
              <p className="text-gray-600 text-sm">{product.proDesc}</p>
              <p className="text-gray-600 text-sm">₹{product.proPrice}</p>
              <button
                onClick={() => handleAddToCart(product)} // Dispatch action with the product data
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              >
                Add to Cart
              </button>

                  <button
                     onClick={() => dispatch(addfav(product))} // Dispatch action with the product data
                       className= "  bg-red-700 text-white py-2 px-2 rounded hover:bg-red-600 focus:ring-4 focus:ring-blue-300"   >
                         Add to Wishlist
                    </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
