import React from 'react'
import '@/app/footer/page.css'
export default function Footer() {
  return (
    <>
      <div className='footer'>
         
         <div>
            <h4>About the E-commerce</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit neque veniam necessitatibus aut <br /> ratione beatae eius praesentium  voluptatum hic, <br /> voluptas reprehenderit .</p>
            <img src="/images/fb1.jpg" alt="" className='w-20 h-20 rounded-2xl'  />
                <img src="/images/insta.jpg" alt=""  className='w-20 h-20 rounded-2xl' />
                <img src="/images/link.jpg" alt=""  className='w-20 h-20 rounded-2xl' />
                <img src="/images/twitter.jpg" alt=""  className='w-20 h-20 rounded-2xl' />
         </div>

         <div className='flex flex-col items-center'>
            <h5>SHOP</h5>
            <ul>
                <li>All Products</li>
                <li>BreifCase</li>
                <li>HandBags</li>
                <li>BackPacks</li>
                <li>Pochettes</li>
            </ul>
         </div>

         <div>
            <h5>INFORMATION</h5>
            <ul>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Our Blog</li>
            </ul>
         </div>

         <div>
            <h5>NEWSLETTER</h5>
            <p>Subscribe to get notified about product <br /> launches special offers and company news</p>

            <input type="email" placeholder='Enter your email address' id="" className='shadow-lg p-2' />

            <button className='rounded bg-pink-400 p-2'>SUBSCRIBE</button>
         </div>
      </div>
      
    </>
  )
}
