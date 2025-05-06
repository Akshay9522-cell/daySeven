'use client';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { increaseQuantity, decreaseQuantity, remove } from '../redux/cartSlice';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import { useUser } from '@clerk/nextjs'; 
import {Toaster, toast } from 'react-hot-toast';

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addtocart.cart);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    const totalPrice = products.reduce((acc, product) => acc + product.quantity * product.proPrice, 0);
    setTotal(totalPrice);
  }, [products]);

  const handleCheckout = () => {
    if (products.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    if (!isSignedIn) {
      toast.error("You are not logged in, please login first!");
      router.push('/home')
      return;
    }
    router.push('/checkout');
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">🛒 Shopping Cart</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-red-200 text-gray-900">
              <tr>
                <th className="px-4 py-3 text-left text-sm">Image</th>
                <th className="px-4 py-3 text-left text-sm">Product</th>
                <th className="px-4 py-3 text-center text-sm">Quantity</th>
                <th className="px-4 py-3 text-right text-sm">Price</th>
                <th className="px-4 py-3 text-right text-sm">Amount</th>
                <th className="px-4 py-3 text-right text-sm">Remove</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100 transition-colors duration-300">
                  <td className="px-4 py-4">
                    <img
                      src={product.proImage}
                      alt={product.proName}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                  </td>
                  <td className="px-4 py-4 font-medium">{product.proName}</td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(product))}
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">{product.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(product))}
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-semibold text-gray-800">₹{product.proPrice }</td>
                  <td className="px-4 py-4 text-right font-semibold text-gray-800">₹{Number(product.quantity)}</td>
                  <td className="px-4 py-4 text-right">
                    <button
                      onClick={() => dispatch(remove(product))}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}

              {products.length > 0 && (
                <tr className="border-t border-gray-300">
                  <td colSpan={4} className="px-4 py-6 text-right text-xl font-bold">
                    Total:
                  </td>
                  <td className="px-4 py-6 text-right text-2xl font-extrabold text-indigo-600">
                    ₹{total.toFixed(2)}
                  </td>
                  <td className="px-4 py-6 text-right">
                    <button
                      onClick={handleCheckout}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition"
                    >
                      Proceed to Checkout
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {products.length === 0 && (
          <div className="mt-10 text-center text-gray-500 text-lg">
            Your cart is empty 🛒
          </div>
        )}
      </div>
      <Toaster/>
    </>
  );
};

export default CartPage;
