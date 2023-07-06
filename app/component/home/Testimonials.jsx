/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Testimonials = ({ test }) => {
  return (
    <section className="home-testimonial pb-0 lg:py-16 py-16 bg-no-repeat bg-contain bg-[left_center] bg-[#ecf5ff]">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full ">
            <p className="uppercase text-pink mb-3">clients Testimonial</p>
            <h2 className="text-blue font-semibold text-3xl font-poppins">
              What our clients say about our Company.
            </h2>
          </div>
          <div className="lg:w-1/2 w-full px-3  ">
            <Carousel autoPlay={true} showStatus={false} showArrows={false}>
              {test.data.map((data) => {
                return (
                  <div className="p-3 border-l-4 border-blue-100" key={data.id}>
                    <div className="flex text-left gap-4">
                      <div>
                        <img
                          src={data.attributes.image.data.attributes.url}
                          alt="user"
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-blue text-xl font-bold mb-1">
                          {data.attributes.name}
                        </h5>
                        <p className="text-base">
                          {data.attributes.designation}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-left pb-6">
                      {data.attributes.content}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
