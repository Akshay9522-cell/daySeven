'use client'

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../footer/page';
import Category from '../category';
import '../footer/page.css';

export default function Page() {
  return (
    <>
    
      <div className='fixed top-0 w-full bg-white shadow z-10'>
        <Navbar />
      </div>

  
      <div className='pt-24 px-4'>
        <div className='flex flex-wrap justify-center items-center gap-8 border border-red-600 rounded-2xl p-6'>
          {[
            { img: 'h1.webp', text: 'Same Day Delivery', link: 'sameday' },
            { img: 'h2.webp', text: 'Flowers', link: 'flower' },
            { img: 'h3.webp', text: 'Cakes', link: 'cake' },
            { img: 'h4.webp', text: 'Personalized', link: 'personalized' },
            { img: 'h5.webp', text: 'Plants', link: 'plants' },
            { img: 'h6.webp', text: 'New Arrivals',link:'newArrivals' },
            { img: 'h7.webp', text: 'International' },
            { img: 'h8.webp', text: 'Bulk/Corp. Gifts' },
          ].map((item, idx) => (
            <div key={idx} className='flex flex-col items-center w-20'>
              <img src={`/images/${item.img}`} alt={item.text} className='w-16 h-16 object-contain' />
              {item.link ? (
                <Link href={`/${item.link}`} className='text-black text-center text-sm mt-2'>{item.text}</Link>
              ) : (
                <p className='text-center text-sm mt-2'>{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>

   
      <div className='my-10'>
        <Carousel>
          {['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'].map((c, idx) => (
            <Carousel.Item key={idx}>
              <img src={`/images/${c}.webp`} className='w-full h-[300px] md:h-[500px] object-cover' alt={`Slide ${idx+1}`} />
              <Carousel.Caption>
                <h3>Slide {idx + 1} Label</h3>
                <p>Enjoy amazing offers and deals!</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <section className='text-center my-10'>
        <h1 className='text-3xl font-bold mb-6'>Your Favourite Picks</h1>
        <div className='flex flex-wrap justify-center gap-6'>
          <Link href='/cake'><img src='/images/b1.webp' alt='Cake' className='w-60 h-60 object-cover' /></Link>
          <Link href='/flower'><img src='/images/b2.webp' alt='Flower' className='w-60 h-60 object-cover' /></Link>
        </div>
      </section>

    
      <section className='flex flex-wrap justify-center gap-6 p-6'>
        {['d1', 'd2', 'd3', 'd4'].map((e, i) => (
          <img key={i} src={`/images/${e}.webp`} alt={`Deal ${i+1}`} className='w-40 md:w-52 h-40 object-cover' />
        ))}
      </section>

    
      <section className='p-6'>
        <h1 className='text-2xl font-semibold mb-6'>Gifts that Spark Joy</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {['g1','g2','g3','g4','g5','g6'].map((e, i) => (
            <img key={i} src={`/images/${e}.webp`} alt='Gift' className='w-full h-40 object-cover' />
          ))}
        </div>
      </section>

     
      <section className='p-6'>
        <h1 className='text-2xl font-semibold mb-6'>Same Day Delivery</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {['i1','i2','i3','i4','i5','i6','i7','i8'].map((e, i) => (
            <img key={i} src={`/images/${e}.webp`} alt='Item' className='w-full h-48 object-cover' />
          ))}
        </div>
      </section>

      <div className='flex justify-center my-10'>
        <img src='/images/banner.webp' alt='Banner' className='w-full max-w-5xl object-cover' />
      </div>

      
      

     
      <section className='p-6'>
        <h1 className='text-2xl font-semibold mb-4'>Send Surprise Overseas</h1>
        <div className='flex flex-wrap justify-center gap-6'>
          {['r1','r2'].map((r, idx) => (
            <img key={idx} src={`/images/${r}.webp`} alt='Overseas' className='w-60 h-40 object-cover' />
          ))}
        </div>
      </section>

      <section className='overflow-x-auto p-6'>
        <div className='flex gap-4'>
          {Array.from({length:9}, (_, i) => (
            <img key={i} src={`/images/z${i+1}.webp`} alt='Brand' className='w-40 h-20 object-cover' />
          ))}
        </div>
      </section>

     
      <section className='p-6'>
        <h1 className='text-2xl font-semibold'>Personalized to Perfection</h1>
        <p className='text-gray-600 mb-4'>Unique treasures that echo emotions</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {['p1.jpg','p2.webp','p3.webp','p4.jpg','p5.webp'].map((p, idx) => (
            <div key={idx} className='text-center'>
              <img src={`/images/${p}`} alt='Personalized' className='w-full h-40 object-cover' />
              <p className='mt-2'>Gift {idx+1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='p-6'>
        <h1 className='text-2xl font-semibold'>Sweet Surprises</h1>
        <p className='text-gray-600 mb-4'>Relish Scrumptious Cakes</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {['ck1','ck2','ck3','ck5','ck4'].map((ck, idx) => (
            <div key={idx} className='text-center'>
              <img src={`/images/${ck}.webp`} alt='Cake' className='w-full h-40 object-cover' />
              <p className='mt-2'>Cake {idx+1}</p>
            </div>
          ))}
        </div>
      </section>

   
      <section className='p-6'>
        <h1 className='text-2xl font-semibold mb-6'>Surprises For Little Ones</h1>
        <div className='flex flex-wrap justify-center gap-6'>
          {['s1','s2'].map((s, idx) => (
            <img key={idx} src={`/images/${s}.webp`} alt='Surprise' className='w-80 h-60 object-cover' />
          ))}
        </div>
      </section>

      
      <section className='p-6'>
        <h1 className='text-2xl font-semibold mb-6'>Treat Yourself to Celebration</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {['celi1','celi1b','celi2','celi2','celi4','celi4b','celi5','celi6'].map((c, idx) => (
            <img key={idx} src={`/images/${c}.webp`} alt='Celebration' className='w-full h-48 object-cover' />
          ))}
        </div>
      </section>

     
      <section className='bg-red-600 p-10 text-white text-center'>
        <h1 className='text-3xl font-bold'>Newsletter Updates!!</h1>
        <div className='flex justify-center mt-6 gap-4'>
          <input type='email' placeholder='Enter Email ID' className='p-2 rounded w-72' />
          <button className='bg-white text-red-600 font-bold px-6 py-2 rounded'>SUBMIT</button>
        </div>
      </section>

     
      <section className='p-10'>
        <h1 className='text-3xl font-bold mb-6'>Stats</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='text-center'>
            <p className='text-5xl font-bold text-gray-400'>400+</p>
            <p className='text-red-600'>Cities with Same Day Delivery</p>
          </div>
          <div className='text-center'>
            <p className='text-5xl font-bold text-gray-400'>100+</p>
            <p className='text-red-600'>Countries Served</p>
          </div>
          <div className='text-center'>
            <p className='text-5xl font-bold text-gray-400'>5M+</p>
            <p className='text-red-600'>Happy Customers</p>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 flex flex-col md:flex-row justify-around p-10 items-center'>
        <div>
          <p className='text-2xl font-bold mb-4'>Download our IGP App for Better Experience!!</p>
          <div className='flex gap-4'>
            <img src='/images/google.webp' alt='Google Play' className='w-32' />
            <img src='/images/apple.webp' alt='Apple Store' className='w-32' />
          </div>
        </div>
        <div className='flex gap-4 mt-6 md:mt-0'>
          {['fb1','insta','link'].map((icon, idx) => (
            <img key={idx} src={`/images/${icon}.jpg`} alt='Social' className='w-16 h-16 rounded-full' />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}