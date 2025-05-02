'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import { createOrder } from '../actions/CreateOrder';
import { verifyOrder } from '../actions/VerifyOrders';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const router = useRouter();
  const product = useSelector((state) => state.addtocart.cart);
  const [total, setTotal] = useState(0);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('adminname') || '';
    const email = localStorage.getItem('adminemail') || '';
    setUserInfo({ name, email });

    let totalPrice = 0;
    product.forEach((p) => {
      totalPrice += p.quantity * p.proPrice;
    });
    setTotal(totalPrice);
  }, [product]);

  const handlePayment = async (e) => {
    e.preventDefault();

    const orderData = {
      user: { name: userInfo.name, email: userInfo.email, address, pincode, phoneNumber },
      amount: total * 100,
      products: product.map((item) => ({
        productId: item.id,
        productName: item.proName,
        quantity: item.quantity,
        price: item.proPrice,
        image: item.proImage,
      })),
    };

    try {
      const order = await createOrder(orderData.amount, orderData.user, orderData.products);

      const paymentData = {
        key: "rzp_test_fCPksDjKiWCo2X",
        amount: Math.round(total * 100),
        currency: 'INR',
        order_id: order.id,
        name: "Flowers",
        description: product.map(p => `${p.proName} (x${p.quantity})`).join(", "),
        image: product[0]?.image || '/images/lgo.png',
        handler: async (response) => {
          const verifyRes = await verifyOrder(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature,
            orderData.user
          );
          if (verifyRes.isOk) {
            alert('✅ Payment successful');
          } else {
            alert('❌ Payment verification failed');
          }
        },
        theme: { color: '#3399cc' },
      };

      if (typeof window !== 'undefined' && window.Razorpay) {
        const paymentObject = new window.Razorpay(paymentData);
        paymentObject.open();
      } else {
        alert('Razorpay SDK not loaded.');
      }
    } catch (err) {
      console.error('Error during payment handling:', err);
      alert('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-red-600 border-b-2 border-red-300 pb-2">
              🛒 Cart Items
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-sm border">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs md:text-sm uppercase tracking-wider">
                    <th className="px-4 py-3 text-left">Image</th>
                    <th className="px-4 py-3 text-left">Product Name</th>
                    <th className="px-4 py-3 text-left">Price</th>
                    <th className="px-4 py-3 text-left">Quantity</th>
                    <th className="px-4 py-3 text-left">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <Image src={item.proImage} alt={item.proName} width={50} height={50} className="rounded-md border" />
                      </td>
                      <td className="px-4 py-4 font-medium text-gray-800">{item.proName}</td>
                      <td className="px-4 py-4 font-semibold text-green-700">₹{item.proPrice}</td>
                      <td className="px-4 py-4 text-center">{item.quantity}</td>
                      <td className="px-4 py-4 font-bold text-blue-700">₹{item.quantity * item.proPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-xl md:text-2xl font-extrabold text-green-600">
              Total Price: <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md">₹{total}</span>
            </div>
          </div>

          {/* Shipping Form */}
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-indigo-600 border-b pb-2">
              🚚 Shipping Details
            </h2>

            {[
              { id: 'name', label: 'Name', value: userInfo.name, readOnly: true },
              { id: 'email', label: 'Email', value: userInfo.email, readOnly: true },
              { id: 'address', label: 'Address', value: address, onChange: setAddress },
              { id: 'pincode', label: 'Pincode', value: pincode, onChange: setPincode },
              { id: 'phoneNumber', label: 'Phone Number', value: phoneNumber, onChange: setPhoneNumber },
            ].map(({ id, label, value, readOnly, onChange }) => (
              <div key={id} className="mb-4">
                <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">
                  {label}:
                </label>
                <input
                  type={id === 'email' ? 'email' : 'text'}
                  id={id}
                  value={value}
                  readOnly={readOnly}
                  onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                  className={`w-full px-4 py-2 border ${readOnly ? 'bg-gray-100' : 'bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                />
              </div>
            ))}

            <button
              onClick={handlePayment}
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
            >
              💳 Proceed to Payment
            </button>
          </div>
        </div>
      </div>

      <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default CheckoutPage;
