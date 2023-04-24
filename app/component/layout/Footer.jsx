"use client"
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Footer = () => {
  const [text, count] = useTypewriter({
    words: [
      'Software',
      'Development',
      'Unit'
    ],
    delaySpeed: 1000,
    typeSpeed: 100,
    loop: true,
  })
  return (
    <>
      <div className="lg:py-12 py-8 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-2">
          <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 lg:gap-5 gap-2">
            <div className="text-center">
              <h3 className="text-blue text-xl font-bold font-sans mb-3">
                <span>{text}</span>
                <Cursor cursorColor="#027bc1" />
              </h3>
              <p className=" text-gray-700 text-sm">
                We are a Software Development Unit based IT company in Thimphu
                who provides top quality service.
              </p>
            </div>
            <div className="text-center">
              <h5 className="text-blue font-medium font-sans text-xl mb-3">
                Contact Us
              </h5>
              <ul className="text-sm">
                <li className="flex justify-center gap-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    {/* <h5 className="text-xl font-semibold">Email</h5> */}
                    <a href="#ds">help@gmail.com</a>
                  </div>
                </li>
                <li className="flex justify-center gap-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    {/* <h5 className="text-xl font-semibold">Phone</h5> */}
                    <a href="#f">+975 - 7777777</a>
                  </div>
                </li>
                <li className="flex justify-center gap-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div>
                    {/* <h5 className="text-xl font-semibold">Address</h5> */}
                    <a href="#fs">Thimphu, Bhutan</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h5 className="text-blue font-medium font-sans text-xl mb-3">
                Company
              </h5>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/about">Our Company</Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h5 className="text-blue font-medium font-sans text-xl mb-3">
                Our Policy
              </h5>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link href="/coming-soon">Terms of use</Link>
                </li>
                <li className="mb-2">
                  <Link href="/coming-soon">Privacy policy</Link>
                </li>
                <li className="mb-2">
                  <Link href="/coming-soon">Refund policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-4 bg-gray-100">
        <p className="text-center text-xs  font-light uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()}. All Rights Reserved by{" "}
          <span className="text-sky-700">SDU</span>
        </p>
      </div>
    </>
  );
}

export default Footer