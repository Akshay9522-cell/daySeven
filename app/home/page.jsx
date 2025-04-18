
'use client'

import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Category from '../category';



export default function page() {
  return (
       
    
    <>
   
    <div className='p-10'>
      
      <div className=' h-25 flex gap-15 justify-center items-center border border-red-600 rounded-2xl '>
        <div className='flex' >
            <div >
            <img src="/images/h1.webp" className='w-10 flex justify-center items-center' alt="" />
            <p>Same Day Delivery</p>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-2  bg-red-100'></div>
            </div>
        </div>
        <div className='flex'>
            <div >
            <img src="/images/h2.webp" className='w-10 m-auto' alt="" />
            <p>Flowers</p>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7  bg-red-100'></div>
            </div>
            
        </div>
        <div className='flex'>
            <div>
            <img src="/images/h3.webp" className='w-10' alt="" />
            <p className='flex justify-center items-center'>Cakes</p>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7 bg-red-100'></div>
            </div>
        </div>
        <div className='flex'>
            <div>
            <img src="/images/h4.webp" className='w-10 m-auto' alt="" />
            <p  className='flex justify-center items-center' >Personalized</p>
            </div>
            <div>
                <div className='min-w-1 h-20 relative top-1 left-7  bg-red-100'></div>
            </div>
        </div>
        <div className='flex'>
            <div>
            <img src="/images/h5.webp" className='w-10 m-auto' alt="" />
            <p>Plants</p>
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
    </>
    
  )
}
