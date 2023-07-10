/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSection = (image) => {
  return (
    <section className="lg:py-10 py-12 bg-white">
      <div className=" max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {image.image.data.map((image) => (
            <div className="p-1" key={image.id}>
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <a href="#" className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                  <img src= {image.attributes.image.data.attributes.url} alt = "gallery-images" />
                </a>
                <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-700">
                  <h6 className="text-slate-400"> {image.attributes.caption} </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
