/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AboutSection = () => {
  return (
    <section className="home-about lg:py-24 py-12">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
          <div>
            <img
              src="/about.JPG"
              alt="about img"
              className="max-w-full h-auto border-[#dee2e6] rounded p1 border-solid"
            />
          </div>
          <div>
            <p className="uppercase text-pink mb-3">About Us</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
              About Agency
            </h2>
            <p className="mb-8">
              At our web development agency, we pride ourselves on providing
              top-notch web development services that meet the needs of our
              clients. We have a team of experienced web developers who are
              skilled in a variety of programming languages, including HTML,
              CSS, JavaScript, PHP, and more.
              <br />
              We work closely with our clients to understand their business
              goals, target audience, and desired outcomes.
            </p>
            <p className="font-medium font-poppins px-5 py-6 bg-slate-100 border-l-4 border-[#e60072]">
              Our web development agency is committed to providing high-quality
              web development services that meet the needs of our clients. We
              take pride in our work and are dedicated to helping our clients
              succeed online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection