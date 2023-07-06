/* eslint-disable @next/next/no-img-element */
import React from "react";

const ServiceOverview = (service) => {
  return (
    <section className="lg:py-20 py-12">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="">
          <div>
            {service.service.data.map(function (services) {
              return (
                <div
                  key={services.id}
                  className="grid lg:grid-cols-[2fr_3fr] grid-cols-1 gap-12 items-start"
                >
                  <div className="relative">
                    <img
                      src={services.attributes.image.data.attributes.url}
                      alt="overview img"
                      className="w-100 h-auto rounded-2xl shadow-lg"
                    />
                    {/* <img src= '/overview-round-shape.png' alt="shape img" className='absolute -bottom-14 lg:-right-14 -z-10' /> */}
                    {/* <img src='/overview-square-shape.png' alt="shape img" className='absolute -left-14 -top-14 -z-10' /> */}
                  </div>
                  <div>
                    <p className="uppercase text-pink mb-3">overview</p>
                    <p className="text-justify align-middle">{services.attributes.description}</p>
                  </div>
                  <br></br>
                </div>
             
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
