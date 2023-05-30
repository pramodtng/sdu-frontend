/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSection = ( image ) => {
  return (
    <section className="lg:py-20 py-12">
      <div className=" max-w-6xl mx-auto px-2">
        <Carousel className="">
          {image.image.data.map((image) => (
            <div key={image.id} style={{ height: "400px" }}>
              <img
                src={image.attributes.image.data.attributes.url}
                alt="Carousel Image"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <h3 className="legends">{image.attributes.caption} </h3>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ImageSection;
