/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';



export default function ServiceSection() {
  return (
    <section className="home-service lg:py-24 py-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[380px]
      before:bg-contain before:z-[-1]">
      <div className="container max-w-6xl mx-auto px-2">
        <div className='mb-14'>
          <p className="uppercase text-pink text-center mb-3">Services We provide</p>
          <h2 className="text-blue font-semibold text-4xl font-poppins text-center">Our Technological Services</h2>
        </div>
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-6">
          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src='/service-web.png' alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Custom Website</h4>
            <p className='mb-5'>Build custom website with your favourite design and required functionalities.</p>
            <p>
              <Link href="/contact" className='flex items-center justify-center font-medium font-poppins'>Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src='/service-logo.png' alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Web Development</h4>
            <p className='mb-5'>We can design and develop websites at your budget with latest technologies</p>
            <p>
              <Link href="/contact" className='flex items-center justify-center font-medium font-poppins'>Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src='/service-app.png' alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Mobile App</h4>
            <p className='mb-5'>Build  cross platform mobile app which can be install in any device (Android/iOS).</p>
            <p>
              <Link href="/contact" className='flex items-center justify-center font-medium font-poppins'>Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </p>
          </div>
          
          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src='/service-ui-ux.png' alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Web Maintenance</h4>
            <p className='mb-5'>Maintain regularly your website and update features when needed.</p>
            <p>
              <Link href="/contact" className='flex items-center justify-center font-medium font-poppins'>Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
