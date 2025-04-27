
'use client'

import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Category from '../category';
import '../footer/page.css'
import Footer from '../footer/page';
import Navbar from '../components/Navbar';
import Link from 'next/link';



export default function page() {
  return (
       
    
    <>
   <div  className='fixed top-0  w-full bg-white shadow z-10 '  >
        <Navbar />
        </div>
   
    <div className='p-10'>
      
      <div className=' h-25 flex gap-15 relative top-10 justify-center items-center border border-red-600 rounded-2xl '>
        <div className='flex' >
            <div >
            <img src="/images/h1.webp" className='w-10 flex justify-center items-center' alt="" />
          <Link href='sameday'  className='text-black no-underline' ><p>Same Day Delivery</p></Link>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-2  bg-red-100'></div>
            </div>
        </div>
        <div className='flex'>
            <div >
            <img src="/images/h2.webp" className='w-10 m-auto' alt="" />
          <Link href='flower' className='text-black no-underline'> <p>Flowers</p> </Link>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7  bg-red-100'></div>
            </div>
            
        </div>
        <div className='flex'>
            <div>
            <img src="/images/h3.webp" className='w-10' alt="" />
           <Link href='cake' className='text-black no-underline'> <p className='flex justify-center items-center'>Cakes</p></Link>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7 bg-red-100'></div>
            </div>
        </div>
        <div className='flex'>
            <div>
            <img src="/images/h4.webp" className='w-10 m-auto' alt="" />
          <Link href='personalized' className='text-black no-underline'>  <p  className='flex justify-center items-center' >Personalized</p></Link>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7  bg-red-100'></div>
            </div>
        </div>
        <div className='flex'>
            <div>
            <img src="/images/h5.webp" className='w-10 m-auto' alt="" />
         <Link href='plants'  className='text-black no-underline'><p>Plants</p></Link>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7  bg-red-100'></div>
            </div>
        </div>
        <div className='flex'>
            <div>
            <img src="/images/h6.webp" className='w-10 m-auto' alt="" />
            <p>New Arrivals</p>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7  bg-red-100'></div>
            </div>
        </div>
        <div className='flex'>
            <div> <img src="/images/h7.webp" className='w-10 m-auto' alt="" />
            <p className='m-auto'>International</p>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7  bg-red-100'></div>
            </div>

        </div>
        <div>
            <img src="/images/h8.webp" className='w-10 m-auto' alt="" />
            <p className='m-auto'>Bulk/Corp. Gifts</p>
        </div>
      </div>
      
    </div>

    <Carousel>
      <Carousel.Item>
      <img src="/images/c1.webp" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/images/c2.webp" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="/images/c3.webp" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="/images/c4.webp" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="/images/c5.webp" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="/images/c6.webp" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="/images/c7.webp" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


<div>
    <h1 className='text-2xl font-semibold flex justify-center items-center'>Your Favourite Picks</h1>
    <div className='flex '>
        <div className='w-100 p-10'>
            <img src="/images/b1.webp"  alt="" />
        </div>

        
        <div className='w-100 p-10'>
            <img src="/images/b2.webp" alt="" />
        </div>
    </div>
    </div>

    <div className='flex p-10 gap-5' >
        <div className=''>
            <img src="/images/d1.webp" alt="" />
        </div>
        
        <div>
            <img src="/images/d2.webp" alt="" />
        </div>
        
        <div>
            <img src="/images/d3.webp" alt="" />
        </div>
        
        <div>
            <img src="/images/d4.webp" alt="" />
        </div>
    </div>
   
    
    <h1>Gifts that Sparks Joy   </h1>
    <div className='flex p-10 gap-5' >
        <div className=''>
            <img src="/images/g1.webp" alt="" />
        </div>
        
        <div>
            <img src="/images/g2.webp" alt="" />
        </div>
        
        <div>
            <img src="/images/g3.webp" alt="" />
        </div>
        
        <div>
            <img src="/images/g4.webp" alt="" />
        </div>
        <div>
            <img src="/images/g5.webp" alt="" />
        </div>
        <div>
            <img src="/images/g6.webp" alt="" />
        </div>
    </div>
   

    <div>
        <h1>Same Day Delivery</h1>
        <div className=' flex flex-wrap-reverse gap-10 p-6 justify-center'>
            <div>
                <img src="/images/i1.webp" alt="" />
            </div>
            <div>
                <img src="/images/i2.webp" alt="" />
            </div>

            <div>
                <img src="/images/i3.webp" alt="" />
            </div>
            <div>
                <img src="/images/i4.webp" alt="" />
            </div>
            <div>
                <img src="/images/i5.webp" alt="" />
            </div>
            <div>
                <img src="/images/i6.webp" alt="" />
            </div>
            <div>
                <img src="/images/i7.webp" alt="" />
            </div>
            <div>
                <img src="/images/i8.webp" alt="" />
            </div>

        </div>
    </div>

    <div className='flex justify-center items-center'>
        <img src="/images/banner.webp" alt="" />
    </div>
    <Category/>

        <h1 className='py-4'>Send Surprise Overseas</h1>
      <div className='flex p-6'>
        <div>
            <img src="/images/r1.webp" alt="" />
        </div>

        
        <div>
            <img src="/images/r2.webp" alt="" />
        </div>
      </div>



      <div className='overflow-hidden '>
        <div className='flex w-45  p-4 gap-6'>
            
            <img src="/images/z1.webp" alt="" />
            <img src="/images/z2.webp" alt="" />
            <img src="/images/z3.webp" alt="" />
            <img src="/images/z4.webp" alt="" />
            <img src="/images/z5.webp" alt="" />
            <img src="/images/z6.webp" alt="" />
            <img src="/images/z7.webp" alt="" />
            <img src="/images/z8.webp" alt="" />
            <img src="/images/z9.webp" alt="" />
        </div>
      </div>

      {/* personalized and perfection */}

      <div>
        <h1>Personalized to Perfection</h1>
        <p>uniqure Teasute that Echo Emotions</p>

        <div className='flex'>
            <div>
            <img src="/images/p1.jpg" alt="" />
            <p className='flex justify-center'>Hampers</p>
            </div>
            <div>
            <img src="/images/p2.webp" alt="" />
            <p className='flex justify-center'>Photo Gifts</p>
            </div>
            <div>
            <img src="/images/p3.webp" alt="" />
            <p className='flex justify-center'>Name Gifts</p>
            </div>
            <div>
            <img src="/images/p4.jpg" alt="" />
            <p className='flex justify-center'>Fashion</p>
            </div>
            <div>
            <img src="/images/p5.webp" alt="" />
            <p className='flex justify-center'>Home and Living</p>
            </div>
        </div>
      </div>


       {/* cakes and cakes */}

       
      <div className='p-6'>
        <h1>Sweet Surprises</h1>
        <p>Relish Scrumptious Cakes</p>

        <div className='flex p-6'>
            <div>
            <img src="/images/ck1.webp" alt="" />
            <p className='flex justify-center'>Hampers</p>
            </div>
            <div>
            <img src="/images/ck2.webp" alt="" />
            <p className='flex justify-center'>Photo Gifts</p>
            </div>
            <div>
            <img src="/images/ck3.webp" alt="" />
            <p className='flex justify-center'>Name Gifts</p>
            </div>
            <div>
            <img src="/images/ck5.jpg" alt="" />
            <p className='flex justify-center'>Fashion</p>
            </div>
            <div>
            <img src="/images/ck4.webp" alt="" />
            <p className='flex justify-center'>Home and Living</p>
            </div>
        </div>
      </div>

      {/* surprises */}

      <div>
        <h1>Surprises For Little Ones</h1>

        <div className='flex gap-10 p-6'>
            <img src="/images/s1.webp" alt="" />
            <img src="/images/s2.webp" alt="" />
        </div>
      </div>



      {/* celebration */}
    <h1>Treat Yourself to  Celibration</h1>
      <div className='flex'>
        <div className='flex'>
         <div>
            <img src="/images/celi1.webp" alt="" />
             <img src="/images/celi1b.webp" alt="" />
         </div>
    
         <div>
            <img src="/images/celi2.webp" alt="" />
            <img src="/images/celi2.webp" alt="" />
         </div>
        </div>

        <div>
        <div className='flex'>
         <div>
            <img src="/images/celi4.jpg" alt="" />
            <img src="/images/celi4b.webp" alt="" />
         
         </div>
         <div>
            <img src="/images/celi5.webp" alt="" />
            <img src="/images/celi6.webp" alt="" />
         </div>
        </div>
        </div>
      </div>

      <div className='news flex'>
            
       <div className='text-white relative p-10 ml-50'>
        <h1>Newsletter <br /> Updates!!</h1>
       </div>
       <div className=' m-auto flex gap-10'>
        <input type="email" placeholder='Enter Email ID' className='bg-white h-10 w-70'  />
        <button className='bg-red-600 font-extrabold pl-3 p-2'>SUBMIT</button>
       </div>
      </div>

      <div className='p-20 flex'>
        <h1 className='sta'>Stats</h1>

        <div className='flex gap-5'>
        <span>
            <p className='text-9xl text-gray-400'>400+</p>
            <p className='text-red-700'>Cities having same day delivery</p>
        </span>

        <span>
            <p className='text-9xl text-gray-400'>100+</p>
            <p className='text-red-700'>Countries being served with happiness</p>
        </span>

        <span>
            <p className='text-9xl text-gray-400'> 5 <span className='text-3xl absolute left-230 '>Million</span>  +</p>
            <p className='text-red-700'>Countries being served with happiness</p>
        </span>

        </div>


      </div>


      


      <div  className='bg-gray-200 flex justify-around'>
             <div>
               <p className='text-2xl font-bold'>Download our IGP app for a better experience !!</p>

                <div className='flex p-10  gap-5'>
                    <img src="/images/google.webp" alt="" className='w-30 h-10'  />
                    <img src="/images/apple.webp" alt="" className='w-30 h-10' />
                </div>
             </div>

             <div className='flex justify-center items-center gap-10 rounded'>
                <img src="/images/fb1.jpg" alt="" className='w-20 h-20 rounded-2xl'  />
                <img src="/images/insta.jpg" alt=""  className='w-20 h-20 rounded-2xl' />
                <img src="/images/link.jpg" alt=""  className='w-20 h-20 rounded-2xl' />
                <img src="/images/twitter.jpg" alt=""  className='w-20 h-20 rounded-2xl' />
               
             </div>
      </div>
     
     <Footer/>
      
    </>
    
  )
}
