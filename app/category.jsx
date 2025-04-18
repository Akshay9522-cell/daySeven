import React from 'react'

export default function Category() {
  return (
    <>
    <div>
      <div className='flex gap-5 p-6'>
        <div className='flex border border-gray-200 p-3 gap-5'>
            <img src="/images/k1.webp" className='rounded' alt="" />
            <div>
            <h5 className='text-2xl'>Cakes</h5>
                <ul className='text-gray-400'>
                
                    <li>Birthday Cakes</li>
                    <li>Choclate Cakes</li>
                    <li>Pinta Cakes</li>
                    <li>Truffle Cakes</li>
                </ul>
            </div>
        </div>

        <div className='flex border border-gray-200 p-3 gap-5'>
            <img src="/images/k2.jpg" className='rounded' alt="" />
            <div >
            <h5>Flowers</h5>

                <ul  className='text-gray-400'>
                    <li>Aniversary flowers</li>
                    <li>Birthday flowers</li>
                    <li>Roses </li>
                    <li>Orchids</li>
                </ul>
            </div>
        </div>
      </div>



      <div className='flex gap-1'>
        <div className='flex border border-gray-200 gap-8 p-6'>
            <img src="/images/k3.webp" className='rounded w-60 ' alt="" />
            <div>
            
                <ul className='text-gray-400'>
                <span className='text-black'><h5>Personalized</h5></span>
                    <li>Collectibles</li>
                    <li>Fashion Accessories</li>
                    <li>Sippers</li>
                    <li>LED Lights</li>
                </ul>
            </div>
        </div>

        <div className='flex border border-gray-200 p-6 '>
            <img src="/images/k4.webp" className='rounded w-60' alt="" />
            <div >
        

                <ul  className='text-gray-400'>
                <span className='text-black'><h5>Hamper</h5></span>
                    <li>Personalized Hamper</li>
                    <li>Food Hamper</li>
                    <li>Birthday Hamper</li>
                    <li>Aniversary Hamper</li>
                </ul>
            </div>
        </div>
        <div className='flex border border-gray-200  p-6'>
            <img src="/images/k5.webp" className='rounded w-60' alt="" />
            <div >
           

                <ul  className='text-gray-400'>
                <span className='text-black'><h5>Plants</h5></span> 
                    <li>Indoor Plants</li>
                    <li>Air Purifying Plants</li>
                    <li>Succulents</li>
                    <li>Personalized planteres</li>
                </ul>
            </div>
        </div>
      </div>
    </div>

    </>
  )
}
