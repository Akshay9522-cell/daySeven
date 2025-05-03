'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import { useEffect,useState } from 'react';
import { displayProduct } from '../actions/displayProduct';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
import { addfav } from '../redux/favSlice'
import { Toaster,toast} from 'react-hot-toast';
export default function Page() {
   const dispatch = useDispatch();
      
      
  
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
       useEffect(() => {
          const fetchProducts = async () => {
            try {
              const data = await displayProduct();
              setProduct(data);
            } catch (err) {
              setError(err);
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
         
        console.log(product)

  return (
    <div>
     <div  className='fixed top-0 w-full bg-white shadow z-10 '  >
          <Navbar />
          </div>
          <div className='text-red-600'>
      <h1>Same Day Delivery</h1>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {product
        .filter((e) => e.category === "sameday")
        .map((e, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white flex flex-col"
          >
            <img src={e.image} alt={e.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2">{e.name}</h2>
              <p className="text-sm text-gray-600 mb-1">{e.category}</p>
              <p className="text-sm text-gray-700 mb-2">{e.description}</p>
              <p className="text-base font-bold text-green-600 mb-4">₹{e.price}</p>
              <div className="mt-auto flex gap-2">
                <button
                  onClick={() => handleAddToCart(e)}
                  className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-sm"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(e)}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 focus:ring-4 focus:ring-red-300 text-sm"
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
    <Toaster/>
    </div>
  );
}
