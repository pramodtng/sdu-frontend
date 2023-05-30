/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import { Carousel } from "react-responsive-carousel";





const Testimonials = () => {
  return (
    <section className="home-testimonial lg:py-24 py-16 bg-no-repeat bg-contain bg-[left_center]">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full px-3">
            <p className="uppercase text-pink mb-3">clients Testimonial</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins">
              What our clients say about our Company.
            </h2>
          </div>
          <div className="lg:w-1/2 w-full px-3 ">
        
            <Carousel autoPlay={true} showStatus={false}>
              <div>
                <p className="mb-6">kinga sedl</p>
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src="/girl2.jpg"
                      alt="user"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-blue text-xl font-bold mb-1">
                      Mrs. Anika
                    </h5>
                    <p className="text-base">CEO of HB Group Ltd.</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-6">
                  I take their service and they are mostly responsible.
                  Recommend their for digital products.
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src="/girl2.jpg"
                      alt="user"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-blue text-xl font-bold mb-1">
                      Mrs. Anika
                    </h5>
                    <p className="text-base">CEO of HB Group Ltd.</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
