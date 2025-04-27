'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { increaseQuantity, decreaseQuantity,remove} from '../redux/cartSlice';
import { useRouter } from 'next/navigation';



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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cart</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left"> </th>
            <th className="px-6 py-3 text-left">Product</th>
            <th className="px-6 py-3 text-center">Quantity</th>
            <th className="px-6 py-3 text-right">Price</th>
            <th className="px-6 py-3 text-right relative left-35 ">Amount</th>
            <th className="px-6 py-3 text-right relative left-14 text-red-500 ">Remove</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="px-6 py-4">
                <Image src={product.proImage} alt={product.proName} width={100} height={100} />
              </td>
              <td className="px-6 py-4">{product.proName}</td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => dispatch(increaseQuantity(product))}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                >
                  +
                </button>
                {product.quantity}
                <button
                  onClick={() => dispatch(decreaseQuantity(product))}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                >
                  -
                </button>
              </td>
              <td className="px-6 py-4 text-right">{product.proPrice}</td>
              <td className="px-6 py-4 text-right">{product.quantity * product.proPrice}</td>
              <td className="px-6 py-4 text-right">
                <button
                  className=" hover:bg-amber-900 text-white font-bold py-1 px-1 rounded"
                  onClick={()=>dispatch(remove(product))}
                >
                 <img src="/images/delete.jpg" width={30} alt="" />
                
                </button>
                
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} className="px-6 py-4 text-right font-bold">
              Total: {total}
            </td>
            <td className="px-6 py-4 text-right">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => router.push('/checkout')}
              >
                Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
