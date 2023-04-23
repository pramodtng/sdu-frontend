/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
// import { Carousel } from "3d-react-carousal";
import Link from 'next/link';

export default function BannerSection() {
  let slides = [
    <img
      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="1"
    />,
    <img
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
      alt="2"
    />,
    <img
      src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="3"
    />,
    <img
      src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="4"
    />,

  ];
  const callback = function (index) {
    console.log("callback", index);
  };
  return (
    <section
      className="home-banner py-20 bg-[linear-gradient(to_bottom,#c7ecff_0,#f9efff_100%)] min-h-screen relative
      before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-no-repeat before:bg-contain before:z-0"
    >
      <div className="container max-w-6xl mx-auto relative z-10 px-2">
        <div className="grid grid-cols-[1fr_1fr] items-center gap-5 min-h-[calc(100vh-160px)]">
          <div>
            <h2 className="text-blue font-bold font-poppins lg:text-[52px] text-4xl lg:leading-[60px] leading-10 lg:mb-8 mb-6">
              Creative Web <br /> Development <br /> Company
            </h2>
            <p className="lg:text-xl text-base leading-7 mb-8">
              {/* We are a Web Development based IT company in Bangladesh who provides top quality service. */}
              We are a Software Development Unit based IT company in Thimphu who
              provides top quality service.
            </p>
            <p>
              <Link href="/products" className="btn btn-pink">
                View Products
              </Link>
            </p>
          </div>
          <div className="lg:block hidden">
            {/* <img src={bannerImg} alt="banner img" className='max-w-full h-auto' /> */}
            {/* <Carousel
              slides={slides}
              autoplay={true}
              interval={3000}
              onSlideChange={callback}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
