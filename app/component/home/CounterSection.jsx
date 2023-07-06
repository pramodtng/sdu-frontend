/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import Counter from "react-number-increment";

function CounterSection() {
  return (
    <section className="lg:pt-0 py-16 ">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-6">
          <div className="flex items-center">
            <div className="h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4">
              <img src="/team.png" alt="icon" className="max-w-full h-auto" />
            </div>
            <div className="pl-5 text-blue">
              <Counter
                start={0} // starting
                end={17} // ends
                speed={1} // 100ms
                style={{ fontSize: "36px", fontWeight: 700 }} // add custom style
                child="+" // add childs ie + , - , *
                seperate="," // seperates number in comma
              />
              <p className="text-xl">Team Members</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4">
              <img src="/deal.png" alt="icon" className="max-w-full h-auto" />
            </div>
            <div className="pl-5 text-blue">
              <Counter
                start={0} // starting
                end={5} // ends
                speed={1} // 100ms
                style={{ fontSize: "36px", fontWeight: 700 }} // add custom style
                child="+" // add childs ie + , - , *
                seperate="," // seperates number in comma
              />
              <p className="text-xl">Happy Clients</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4">
              <img
                src="/computers.png"
                alt="icon"
                className="max-w-full h-auto"
              />
            </div>
            <div className="pl-5 text-blue">
              <Counter
                start={0} // starting
                end={10} // ends
                speed={1} // 100ms
                style={{ fontSize: "36px", fontWeight: 700 }}
                child="+" // add childs ie + , - , *
                seperate="," // seperates number in comma
              />
              <p className="text-xl">Projects Done</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-[80px] w-[80px] bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] p-4">
              <img
                src="/customer-service.png"
                alt="icon"
                className="max-w-full h-auto"
              />
            </div>
            <div className="pl-5">
              <h3 className="font-poppins font-bold text-blue text-4xl mb-1">
                24/7
              </h3>
              <p className="text-xl">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;