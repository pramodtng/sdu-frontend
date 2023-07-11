/* eslint-disable @next/next/no-img-element */
"use client"
import React, { Component } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

class BannerSection extends Component {
  render() {
    const callback = function (index) {
      console.log("callback", index);
    };

    return (
        <section className="py-28  min-h-screen relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-no-repeat before:bg-contain before:z-0 ">
        <div className="container max-w-6xl mx-auto relative z-10 px-2">
          <div className="grid lg:grid-cols-[1fr_1fr] sm:grid-cols-1 items-center gap-5 min-h-[calc(100vh-160px)] ">
            <div className="pt-2">
              <h2 className="text-white font-bold font-poppins lg:text-[52px]  text-4xl lg:leading-[60px] leading-10 lg:mb-8 mb-6 lg:text-left md:text-center text-center">
                Software <br /> Development <br /> Unit
              </h2>
              <p className="lg:text-xl text-base leading-7 mb-8 lg:text-left md:text-center text-center">
                We are a Software Development Unit based IT compassny in Thimphu
                who provides top quality service.
              </p>
              <p className="lg:text-left md:text-center text-center">
                <Link href="/products" className="btn bg-[#007bff] ">
                  View Products
                </Link>
              </p>
            </div>
            <div className="lg:block hidden">
              <Carousel showThumbs={false} showStatus={false}>
                <div>
                  <img src="/slider/eSIM.jpg" alt="Carousel Image" />
            
                </div>
                <div>
                 
                  <img src="/slider/NQRC .jpg" alt="Carousel Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerSection;
