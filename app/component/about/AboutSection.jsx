/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AboutSection = () => {
  return (
    // <section className="home-about lg:py-24 py-12 relative  bg-white z-20">
    //   <div className="container max-w-6xl mx-auto px-2">
    //     <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
    //       <div>
    //         <img
    //           src="/about.JPG"
    //           alt="about img"
    //           className="max-w-full h-auto border-[#dee2e6] rounded p1 border-solid"
    //         />
    //       </div>
    //       <div>
    //         <p className="uppercase text-pink mb-3">About Us</p>
    //         <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
    //           About Agency
    //         </h2>
    //         <p className="mb-8">
    //           At our web development agency, we pride ourselves on providing
    //           top-notch web development services that meet the needs of our
    //           clients. We have a team of experienced web developers who are
    //           skilled in a variety of programming languages, including HTML,
    //           CSS, JavaScript, PHP, and more.
    //           <br />
    //           We work closely with our clients to understand their business
    //           goals, target audience, and desired outcomes.
    //         </p>
    //         <p className="font-medium font-poppins px-5 py-6 bg-slate-100 border-l-4 border-[#e60072]">
    //           Our web development agency is committed to providing high-quality
    //           web development services that meet the needs of our clients. We
    //           take pride in our work and are dedicated to helping our clients
    //           succeed online.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div class="home-about lg:py-24 py-12 relative  bg-white z-20">
      <div class="container max-w-6xl mx-auto px-2">
        <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold ">
          Software Development Unit
        </h2>
        <p class="mt-3 text-gray-800 ">
          At our unit, we pride ourselves on providing
          top-notch web development services that meet the needs of our
          clients. We have a team of experienced web developers who are
          skilled in a variety of programming languages, including HTML,
          CSS, JavaScript, PHP, and more.
        </p>
        <p class="mt-3 text-gray-800 ">
          At our web development agency, we pride ourselves on providing
          top-notch web development services that meet the needs of our
          clients. We have a team of experienced web developers who are
          skilled in a variety of programming languages, including HTML,
          CSS, JavaScript, PHP, and more.
        </p>
      </div>




      <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8 px-2">
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img class="rounded-xl" src="/tashicel.jpg" alt="Image Description" />
        </div>

        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80" alt="Image Description" />
        </div>


        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80" alt="Image Description" />
        </div>


        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="/about.JPG" alt="Image Description" />
        </div>

      </div>

    </div>

  );
}

export default AboutSection