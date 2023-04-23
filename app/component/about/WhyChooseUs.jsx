import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="home-service lg:py-24 py-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[380px]
      before:bg-contain before:z-[-1]">
      <div className="container max-w-6xl mx-auto px-2">
        <div className='mb-14'>
          <p className="uppercase text-pink text-center mb-3">we are awesome</p>
          <h2 className="text-blue font-semibold text-4xl font-poppins text-center">Why Choose Us</h2>
        </div>
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-6">
          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <Image
                src='/service-web.png'
                alt='service'
                width={96}
                height={96}
                className="mb-10 mx-auto"
              />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Reasearch and Analysis</h4>
            <p className='mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>
              <a href="#fd" className='flex items-center justify-center font-medium font-poppins'>Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <Image
                src='/service-logo.png'
                alt='service'
                width={96}
                height={96}
                className="mb-10 mx-auto"
              />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Negotiation and power</h4>
            <p className='mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>
              <a href="#fd" className='flex items-center justify-center font-medium font-poppins'>Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <Image
                src='/service-app.png'
                alt='service'
                width={96}
                height={96}
                className="mb-10 mx-auto"
              />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Creative and innovative solutions</h4>
            <p className='mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>
              <a href="#fd" className='flex items-center justify-center font-medium font-poppins'>Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <Image
                src='/service-ui-ux.png'
                alt='service'
                width={96}
                height={96}
                className="mb-10 mx-auto"
              />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Trasparency and ease of work</h4>
            <p className='mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>
              <a href="#fd" className='flex items-center justify-center font-medium font-poppins'>Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs