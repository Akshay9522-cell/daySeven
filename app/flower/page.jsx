'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { displayProduct } from '../actions/displayProduct';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
import { addfav } from '../redux/favSlice';
import { toast } from 'react-hot-toast';

export default function FlowerPage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await displayProduct();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(add({
      id: product.id,
      proImage: product.image,
      proName: product.name,
      proPrice: product.price,
      quantity: 1,
    }));
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    dispatch(addfav({
      id: product.id,
      proImage: product.image,
      proName: product.name,
      proPrice: product.price,
    }));
    toast.success(`${product.name} added to wishlist!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
   
      <div className="fixed top-0 w-full bg-white shadow z-10">
        <Navbar />
      </div>

 
      <div className="pt-24 px-4">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-8">🌸 Flower Collection</h1>

        {loading ? (
          <div className="text-center text-gray-600 text-lg">Loading products...</div>
        ) : error ? (
          <div className="text-center text-red-500 text-lg">{error}</div>
        ) : products.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">No flowers available.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((e) => e.category === 'flower')
              .map((e, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white flex flex-col"
                >
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold mb-2">{e.name}</h2>
                    <p className="text-sm text-gray-600 mb-1 capitalize">{e.category}</p>
                    <p className="text-sm text-gray-700 mb-2">{e.description}</p>
                    <p className="text-base font-bold text-green-600 mb-4">₹{e.price}</p>

                    <div className="mt-auto flex gap-2">
                      <button
                        onClick={() => handleAddToCart(e)}
                        className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 p-2 rounded-lg"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleAddToWishlist(e)}
                       className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 p-2 rounded-lg"
                      >
                        Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
