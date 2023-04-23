/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function CounterSection() {
  return (
    <section className='lg:py-24 py-16 bg-[linear-gradient(to_bottom,#c7ecff_0,#f9efff_100%)]'>
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-6">
          <div className='flex items-center'>
            <div className='h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4'>
              <img src='/team.png' alt="icon" className="max-w-full h-auto" />
            </div>
            <div className='pl-5'>
              <h3 className='font-poppins font-bold text-blue text-4xl mb-1'>17</h3>
              <p className='text-xl'>Team Members</p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4'>
              <img src='/deal.png' alt="icon" className="max-w-full h-auto" />
            </div>
            <div className='pl-5'>
              <h3 className='font-poppins font-bold text-blue text-4xl mb-1'>5+</h3>
              <p className='text-xl'>Happy Clients</p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4'>
              <img src='/computers.png' alt="icon" className="max-w-full h-auto" />
            </div>
            <div className='pl-5'>
              <h3 className='font-poppins font-bold text-blue text-4xl mb-1'>10+</h3>
              <p className='text-xl'>Projects Done</p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4'>
              <img src='/customer-service.png' alt="icon" className="max-w-full h-auto" />
            </div>
            <div className='pl-5'>
              <h3 className='font-poppins font-bold text-blue text-4xl mb-1'>24/7</h3>
              <p className='text-xl'>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
