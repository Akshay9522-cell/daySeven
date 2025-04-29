'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import { createOrder } from '../actions/CreateOrder';
import { verifyOrder } from '../actions/VerifyOrders';


const CheckoutPage = () => {
  const product = useSelector((state) => state.addtocart.cart);
  const [total, setTotal] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('name') || '';
    const email = localStorage.getItem('email') || '';
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
      user: {
        name: userInfo.name,
        email: userInfo.email,
        address,
        pincode,
        phoneNumber,
      },
    
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
        amount:Math.round(total * 100),
        currency: 'INR',
        order_id: order.id,
        name: "Flowers",
        description: product.map(p => `${p.proName} (x${p.quantity})`).join(", "),

        image:  product[0]?.image || '/images/lgo.png',
     
        handler: async (response) => {


            const razorpayPaymentId = response.razorpay_payment_id;
            const razorpayOrderId = response.razorpay_order_id;
            const razorpaySignature = response.razorpay_signature;
          const verifyRes = await verifyOrder(
            razorpayOrderId,
            razorpayPaymentId,
            razorpaySignature,
            orderData.user
          );
          console.log(paymentData.key)
        
          if (verifyRes.isOk) {
            alert('✅ Payment successful');
          } else {
            alert('❌ Payment verification failed');
          }
        },
        theme: {
          color: '#3399cc',
        },
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
      <div className="container mx-auto p-4">
        
        <div className="flex flex-col md:flex-row">
          {/* Cart Items */}
          <div className="w-full md:w-1/2 md:mr-4">
          <h2 className="text-3xl font-extrabold mb-6 text-red-600 border-b-2 border-red-300 pb-2 tracking-wide">
         🛒 Cart Items
        </h2>

            <table className="w-full">
            <thead>
           <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm uppercase tracking-wider">
          <th className="px-6 py-3 text-left">Image</th>
          <th className="px-6 py-3 text-left">Product Name</th>
          <th className="px-6 py-3 text-left">Price</th>
          <th className="px-6 py-3 text-left">Quantity</th>
          <th className="px-6 py-3 text-left">Total</th>
           </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
  {product.map((item, index) => (
    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <Image
          src={item.proImage}
          alt={item.proName}
          width={50}
          height={50}
          className="rounded-md border"
        />
      </td>
      <td className="px-6 py-4 text-gray-800 font-medium">{item.proName}</td>
      <td className="px-6 py-4 text-green-700 font-semibold">₹{item.proPrice}</td>
      <td className="px-6 py-4 text-center">{item.quantity}</td>
      <td className="px-6 py-4 text-blue-700 font-bold">₹{item.quantity * item.proPrice}</td>
    </tr>
  ))}
</tbody>

            </table>
             <div className="text-3xl font-extrabold text-green-600 mt-6 border-t pt-4 border-gray-200">
            <h3 >
            Total Price:<span className="inline-block bg-yellow-100 text-yellow-800 font-semibold text-xl px-3 py-1 rounded-md shadow-sm">
  ₹{total}
</span>
            </h3></div>
          </div>

          {/* Shipping Form */}
          <div className="w-full md:w-1/2 md:ml-4 bg-white shadow-md rounded-lg p-6 border border-gray-200">
  <h2 className="text-3xl font-extrabold mb-6 text-indigo-600 border-b pb-2 border-indigo-200">
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
        className={`w-full px-4 py-2 border ${
          readOnly ? 'bg-gray-100' : 'bg-white'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        required
      />
    </div>
  ))}

  <button
    onClick={handlePayment}
    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200"
  >
    💳 Proceed to Payment
  </button>
</div>

        </div>
      </div>

      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </>
  );
};

export default CheckoutPage;
