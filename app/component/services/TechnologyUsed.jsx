/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const TechnologyUsed = () => {
//   new Swiper('.swiper-container', {
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 32,
//     autoplay: {
//       delay: 8000,
//     },
//     breakpoints: {
//       640: {
//         centeredSlides: true,
//         slidesPerView: 1.25,
//       },
//       1024: {
//         centeredSlides: false,
//         slidesPerView: 1.5,
//       },
//     },
//     navigation: {
//       nextEl: '.next-button',
//       prevEl: '.prev-button',
//     },
//   })
// });

return (
  <>
    <section className="pt-16 pb-16 bg-slate-100 relative z-10">
      <div className="container max-w-4xl mx-auto px-2">
        <div className="grid lg:grid-cols-7 grid-cols-3 gap-8 items-center">
          <div className='flex items-center h-full bg-white rounded-full px-6 py-5 shadow-lg border-4 border-solid border-white hover:border-zinc-200'>
            <img src='/technologies/bootstrap.png' alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full bg-white rounded-full px-2 py-2 shadow-lg border-4 border-solid border-white hover:border-zinc-200'>
            <img src='/technologies/tailwindcss.png' alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full bg-white rounded-full px-6 py-5 shadow-lg border-4 border-solid border-white hover:border-zinc-200'>
            <img src='/technologies/reactjs.png' alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full bg-white rounded-full px-6 py-5 shadow-lg border-4 border-solid border-white hover:border-zinc-200'>
            <img src='/technologies/js.png' alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full bg-white rounded-full px-6 py-5 shadow-lg border-4 border-solid border-white hover:border-zinc-200'>
            <img src='/technologies/php.png' alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full bg-white rounded-full px-6 py-5 shadow-lg border-4 border-solid border-white hover:border-zinc-200'>
            <img src='/technologies/mysql.webp' alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full bg-white rounded-full px-6 py-5 shadow-lg border-4 border-solid border-white hover:border-zinc-200'>
            <img src='/technologies/wordpress.png' alt="technology img" className='w-100 h-auto' />
          </div>
        </div>
      </div>
    </section>

  </>
)
}

export default TechnologyUsed