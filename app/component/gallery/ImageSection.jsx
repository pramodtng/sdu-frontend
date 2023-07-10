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
            <div key={image.id}>
              <img className="mb-4" src={image.attributes.image.data.attributes.url} alt = "gallery-images" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
