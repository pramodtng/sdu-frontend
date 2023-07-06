/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const routeChange = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header
        className={`py-5 fixed top-0 left-0 right-0 z-[1000] transition-none ${
          scrolled ? "bg-white shadow-sm h-[120px]" : ""
        }`}
      >
        <div className="container max-w-full md:px-4 lg:px-6 px-2">
          <div className="grid lg:grid-cols-[2fr_5fr] grid-cols-[4fr_1fr] items-center ">
            <div>
              <h3 className="font-bold text-3xl font-poppins text-slate-800">
                <Link href="/">
                  {" "}
                  <img
                    className=" w-[100px] h-[90px]"
                    src="/sdu_logo.png"
                    alt="logo"
                  />
                </Link>
              </h3>
            </div>
            <div className="lg:block hidden ">
              <ul className="text-right font-sans text-sm tracking-wider font-semibold ">
                <li className="inline-block px-3 group  transition-all duration-300 ease-in-out ">
                  <Link
                    href="/about"
                    className=" font-medium py-2 text-blue uppercase  bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out "
                  >
                    About
                  </Link>
                </li>
                <li
                  className="inline-block px-3 
                 group  transition-all duration-300 ease-in-out"
                >
                  <Link
                    href="/services"
                    className=" font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out "
                  >
                    Services
                  </Link>
                </li>
                <li className="inline-block px-3   group  transition-all duration-300 ease-in-out">
                  <Link
                    href="/products"
                    className=" font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out "
                  >
                    Products
                  </Link>
                </li>
                <li className="inline-block px-3   group  transition-all duration-300 ease-in-out">
                  <Link
                    href="/blogs"
                    className=" font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out "
                  >
                    Blogs
                  </Link>
                </li>
                <li className="inline-block px-3  group  transition-all duration-300 ease-in-out">
                  <Link
                    href="/gallery"
                    className=" font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="inline-block px-3  group  transition-all duration-300 ease-in-out">
                  <Link
                    href="/contact"
                    className=" font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out"
                  >
                    Contact
                  </Link>
                </li>
                <li className="inline-block ">
                  <a
                    href="tel:+77889977"
                    className="btn btn-1 ml-4 flex bg-[#007bff] items-center"
                  >
                    Call Us Now
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:hidden block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000"
                className="bi bi-list ml-auto cursor-pointer"
                viewBox="0 0 16 16"
                onClick={toggleMenu}
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <div></div>
            <div
              className={`lg:hidden block bg-white ${
                menuVisible ? "slide-in" : "slide-out"
              }`}
              style={{ maxHeight: menuVisible ? "1000px" : "0" }}
            >
              <ul className="text-left font-sans text-s tracking-wider font-semibold p-2">
                <li
                  className=" mb-2 group transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  <Link
                    href="/about"
                    className="font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    About
                  </Link>
                </li>
                <li
                  className="  mb-2 group transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  <Link
                    href="/services"
                    className="font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    Services
                  </Link>
                </li>
                <li
                  className=" mb-2  group transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  <Link
                    href="/products"
                    className="font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    Products
                  </Link>
                </li>
                <li
                  className="mb-2   group transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  <Link
                    href="/blogs"
                    className="font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    Blogs
                  </Link>
                </li>
                <li
                  className="mb-2   group transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  <Link
                    href="/gallery"
                    className="font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    Gallery
                  </Link>
                </li>
                <li
                  className="mb-2  group transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  <Link
                    href="/contact"
                    className="font-medium py-2 text-blue uppercase bg-left-bottom bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
