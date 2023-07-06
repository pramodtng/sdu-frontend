/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ProductSection({res1, res2}) {
  return (
    <section
      className="bg-[#ECF5FF] lg:py-24 py-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[380px]
       before:z-[-1]"
    >
      <div className="container max-w-6xl mx-auto px-2 ">
        <div className="mb-14">
          <p className="uppercase text-pink text-center mb-3">our work</p>
          <h2 className="text-blue font-semibold text-4xl font-poppins text-center">
            Our Latest Creative Work
          </h2>
        </div>
        <div className="grid lg:grid-cols-[2fr_1fr] grid-1 gap-6 mb-8">
          {res1.data.map((post) => (
            <div key={post.id}>
              <div>
                <a href="#ed">
                  <img
                    src={post.attributes.image.data.attributes.url}
                    alt="product img"
                    className="w-full h-auto rounded-xl shadow-lg mb-6"
                  />
                </a>
                <h5 className="text-blue font-poppins font-semibold text-2xl mb-2">
                  <a href="#e">{post.attributes.title}</a>
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] grid-cols gap-6 mb-6">
          {res2.data.map((post1) => (
            <div key={post1.id}>
              <div>
                <a href="#ed">
                  <img
                    src={post1.attributes.image.data.attributes.url}
                    alt="product img"
                    className="w-full h-auto rounded-xl shadow-lg mb-6"
                  />
                </a>
                <h5 className="text-blue font-poppins font-semibold text-2xl mb-2">
                  <a href="#e">{post1.attributes.title}</a>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


