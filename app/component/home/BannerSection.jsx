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
      <section className="home-banner py-20 bg-[linear-gradient(to_bottom,#c7ecff_0,#f9efff_100%)] min-h-screen relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-no-repeat before:bg-contain before:z-0">
        <div className="container max-w-6xl mx-auto relative z-10 px-2">
          <div className="grid grid-cols-[1fr_1fr] items-center gap-5 min-h-[calc(100vh-160px)]">
            <div>
              <h2 className="text-blue font-bold font-poppins lg:text-[52px] text-4xl lg:leading-[60px] leading-10 lg:mb-8 mb-6">
                Software <br /> Development <br /> Unit
              </h2>
              <p className="lg:text-xl text-base leading-7 mb-8">
                We are a Software Development Unit based IT company in Thimphu
                who provides top quality service.
              </p>
              <p>
                <Link href="/products" className="btn btn-pink">
                  View Products
                </Link>
              </p>
            </div>
            <div className="lg:block hidden">
              {/* <Carousel>
                <div>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673373289279-41ffe55f2f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                    alt="Carousel Image"
                  />
                  <p className="legend">Legend 1</p>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerSection;
