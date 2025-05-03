import React from 'react'
import '../footer/page.css'
export default function Footer() {
  return (
    <>
     <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

  <div>
    <h4>About the E-commerce</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      Fugit neque veniam necessitatibus aut <br />
      ratione beatae eius praesentium voluptatum hic, <br />
      voluptas reprehenderit.
    </p>
    <div className="flex gap-4 mt-4">
      <img src="/images/fb1.jpg" alt="Facebook" className="w-20 h-20 rounded-2xl" />
      <img src="/images/insta.jpg" alt="Instagram" className="w-20 h-20 rounded-2xl" />
      <img src="/images/link.jpg" alt="LinkedIn" className="w-20 h-20 rounded-2xl" />
     
    </div>
  </div>


  <div className="flex flex-col items-center">
    <h5>SHOP</h5>
    <ul className="space-y-2">
      <li>All Products</li>
      <li>BriefCase</li>
      <li>HandBags</li>
      <li>BackPacks</li>
      <li>Pochettes</li>
    </ul>
  </div>


  <div>
    <h5>INFORMATION</h5>
    <ul className="space-y-2">
      <li>Contact Us</li>
      <li>About Us</li>
      <li>FAQ</li>
      <li>Our Blog</li>
    </ul>
  </div>
</div>

    </>
  )
}
