'use client'
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
      id: '1',
      proName: 'Sunflower',
      proImage: '/images/fl1.jpeg',
      proDesc: 'Add a touch of sunshine to any space with the classic sunflower, known for its bold yellow petals and tall, sturdy stems. Sunflowers are not only eye-catching but also easy to grow, making them perfect for gardens, landscapes, or floral arrangements. Loved for their vibrant look and symbolism of positivity and warmth, they bring joy wherever they bloom.',
      proPrice: 10.99,
    },
    {
      id: '2',
      proName: 'Lily',
      proImage: '/images/fl2.jpeg',
      proDesc: 'The lily is a graceful flower known for its large, trumpet-shaped blooms and sweet fragrance. Available in a variety of colors including white, pink, orange, and yellow, lilies symbolize purity, love, and renewal. Perfect for gardens, bouquets, or special occasions, these elegant flowers bring a touch of sophistication and serenity to any setting.',
      proPrice: 12.99,
    },
    {
      id: '3',
      proName: 'Rose',
      proImage: '/images/fl3.jpeg',
      proDesc: 'The rose is one of the most beloved and timeless flowers, cherished for its soft petals, rich fragrance, and deep symbolism. Available in a stunning array of colors—each with its own meaning—roses are perfect for expressing love, admiration, or celebration. Whether in a garden, bouquet, or special event, roses bring classic beauty and heartfelt emotion to any moment.',
      proPrice: 9.99,
    },
    {
      id: '4',
      proName: 'Margenta',
      proImage: '/images/fl4.jpeg',
      proDesc: 'Magenta flowers captivate with their bold, vibrant hue—a stunning blend of pink and purple that symbolizes creativity, passion, and transformation. Whether showcased in a bouquet, garden, or decorative arrangement, magenta blooms bring energy, elegance, and a modern touch to any space.',
      proPrice: 14.99,
    },
    {
      id: '5',
      proName: 'Orchid ',
      proImage: '/images/fl5.jpeg',
      proDesc: 'Orchids are among the most exquisite and diverse flowers in the world, known for their intricate patterns, delicate petals, and wide range of stunning colors, including magenta, white, purple, and yellow. These elegant blooms symbolize love, beauty, and strength, making them perfect for gifting or decorating special occasions. Orchids thrive in indoor environments, adding a touch of sophistication and exotic charm to any space.',
      proPrice: 8.99,
    },
    {
      id: '6',
      proName: 'Cosmos',
      proImage: '/images/fl6.jpeg',
      proDesc: 'Cosmos are delicate, airy flowers known for their graceful, daisy-like petals and vibrant colors, including shades of magenta, pink, red, and white. These easy-to-grow annuals thrive in full sun and produce abundant blooms from summer to fall. With their feathery foliage and long stems, Cosmos are perfect for adding a touch of elegance and a splash of color to gardens, wildflower meadows, or floral arrangements.',
      proPrice: 11.99,
    },
    {
      id: '7',
      proName: 'Petunia',
      proImage: '/images/fl7.webp',
      proDesc: 'Petunias are beloved for their vibrant, colorful flowers that bloom in an array of shades including magenta, purple, red, white, and pink. Known for their soft, velvety petals and delightful fragrance, petunias add charm and brightness to gardens, hanging baskets, and containers. These hardy, low-maintenance plants thrive in sunny spots and are perfect for adding a burst of color to any outdoor space.',
      proPrice: 13.99,
    },
    {
      id: '8',
      proName: 'Bougainvillea',
      proImage: '/images/fl8.jpeg',
      proDesc: 'Bougainvillea is a stunning tropical vine known for its vibrant, papery bracts that come in shades of magenta, pink, purple, orange, and white. These colorful blooms surround tiny white flowers, creating a dramatic display. Hardy and drought-tolerant, Bougainvillea thrives in sunny climates and is perfect for walls, trellises, fences, or containers. Its vivid color and lush growth make it a favorite for adding a bold, exotic touch to gardens and landscapes.',
      proPrice: 7.99,
    },
  ];

  return (
    <div>
     <div  className='fixed top-0 w-full bg-white shadow z-10 '  >
          <Navbar />
          </div>
          <div className='text-red-600'>
      <h1>This is a flower page</h1>
      </div>
      <div className="flex flex-wrap gap-5 m-auto ml-12 " >
        {products.map((product) => (
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img className="rounded-t-lg w-full h-68 object-cover" src={product.proImage} alt={product.proName} />
            <div className="p-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">{product.proName}</h5>

              <p className="text-gray-600 text-md">{product.proDesc}</p>
              <p className="text-gray-600 text-lg">₹{product.proPrice}</p>
              <div className='flex gap-3'>
              <button
                onClick={() => handleAddToCart(product)} // Dispatch action with the product data
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              >
                Add to Cart
              </button>

              <button
              onClick={() => dispatch(addfav(product))} // Dispatch action with the product data
                className= " p-6 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 focus:ring-4 focus:ring-blue-300"
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
