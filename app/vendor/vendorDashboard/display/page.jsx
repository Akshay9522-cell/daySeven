
'use client';
import { useState, useEffect } from 'react';
import { displayProduct } from '../../../actions/displayProduct';

export default function DisplayProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await displayProduct();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
console.log(products);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {<table className="min-w-full border-collapse border border-gray-300">
  <thead className="bg-gray-100">
    <tr>
      <th className="border border-gray-300 px-4 py-2 text-left">Product Name</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
    </tr>
  </thead>
  <tbody>
    {products.map((e, index) => (
      <tr key={index} className="hover:bg-gray-50">
        <td className="border border-gray-300 px-4 py-2">{e.name}</td>
        <td className="border border-gray-300 px-4 py-2">{e.category}</td>
        <td className="border border-gray-300 px-4 py-2">{e.description}</td>
        <td className="border border-gray-300 px-4 py-2">₹{e.price}</td>
        <td className="border border-gray-300 px-4 py-2">
          <img
            src={e.image}
            alt={e.name}
            className="w-20 h-20 object-cover rounded"
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>

      }
    </>
  );
}