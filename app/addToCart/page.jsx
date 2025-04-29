'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { increaseQuantity, decreaseQuantity,remove} from '../redux/cartSlice';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';



const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addtocart.cart);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.quantity * product.proPrice;
    });
    setTotal(totalPrice);
  }, [products]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
    <Navbar />
    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">Shopping Cart</h1>
    
    <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <thead className="bg-indigo-600 text-white">
        <tr>
          <th className="px-6 py-3 text-left">Image</th>
          <th className="px-6 py-3 text-left">Product</th>
          <th className="px-6 py-3 text-center">Quantity</th>
          <th className="px-6 py-3 text-right">Price</th>
          <th className="px-6 py-3 text-right">Amount</th>
          <th className="px-6 py-3 text-right">Remove</th>
        </tr>
      </thead>
  
      <tbody className="text-gray-700">
        {products.map((product) => (
          <tr key={product.id} className="hover:bg-gray-50 transition duration-200">
            <td className="px-6 py-4">
              <Image src={product.proImage} alt={product.proName} width={100} height={100} className="rounded-md" />
            </td>
            <td className="px-6 py-6">{product.proName}</td>
            <td className="px-6 py-4 text-center flex items-center justify-center space-x-2">
             <div className='relative top-10'>
              <button
                onClick={() => dispatch(increaseQuantity(product))}
                className="bg-green-600 rounded-3 hover:bg-green-700 text-white font-semibold py-1 px-3  transition"
              >
                +
              </button>
              <span className='px-4'>{product.quantity}</span>
              <button
                onClick={() => dispatch(decreaseQuantity(product))}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-3 rounded-3 transition"
              >
                -
              </button>
              </div>
            </td>
            <td className="px-6 py-4 text-right text-lg font-semibold">{`₹ ${product.proPrice.toFixed(2)}`}</td>
            <td className="px-6 py-4 text-right text-lg font-semibold">{`₹ ${(product.quantity * product.proPrice).toFixed(2)}`}</td>
            <td className="px-6 py-4 text-right">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-4 transition"
                onClick={() => dispatch(remove(product))}
              >
                <img src="/images/delete.jpg" width={30} alt="Delete" className="inline-block" />
              </button>
            </td>
          </tr>
        ))}
        
        <tr className="border-t border-gray-300">
          <td colSpan={4} className="px-6 py-4 text-right text-xl font-bold">
            Total: <span className="text-indigo-600">{`₹ ${total.toFixed(2)}`}</span>
          </td>
          <td colSpan={2} className="px-6 py-4 text-right">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition"
              onClick={() => router.push('/checkout')}
            >
              Proceed to Checkout
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  );
};

export default CartPage;
