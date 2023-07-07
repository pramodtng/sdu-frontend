// /* eslint-disable @next/next/no-img-element */
"use client";
import React, { Component } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Banner = () => {
  const particlesOptions = {
    background: {
      color: {
        value: "transparent"
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    particles: {
      color: {
        value: "#000",
      },
      links: {
        color: "#000",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "top",
        enable: true,
        outMode: "out",
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: "edge",
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  };
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <section className="lg:pt-28 mt-20 pt-20 lg:pb-1 pb-10 relative">
      {/* <Particles init={particlesInit} options={particlesOptions} className = "particles"/> */}
      <div className="particles-container">
        <Particles init={particlesInit} options={particlesOptions} className="particles" />
      </div>
      <div className="container max-w-6xl mx-auto px-2 relative">
        <h2 className="text-blue font-bold font-poppins text-5xl text-left">
          Gallery
        </h2>

        <nav
          className="flex py-3 text-gray-700  rounded-lg  "
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-black"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>

            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Gallery
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Banner;
