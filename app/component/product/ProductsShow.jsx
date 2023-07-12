/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import classNames from "classnames"; 
// import { Tab, initTE } from "tw-elements";
// initTE({ Tab });

const ProductsShow = (product) => {
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
 

  const openModal = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  return (
    <section className="py-10 lg:py-20 bg-white relative z-10">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 ">
          {product.product.data.map(function (products) {
            return (
              <div
                key={products.id}
                className="flex justify-center items-center border rounded"
              >
                <a>
                  <img
                    src={products.attributes.image.data.attributes.url}
                    alt="product img"
                    className="w-100 rounded-lg mb-4 hover:scale-110 h-[300px] w-[300px] object-cover p-2"
                  />
                  <h4 className="text-blue font-semibold text-xl font-poppins mb-4 capitalize">
                    {products.attributes.name}
                  </h4>
                  <div className="flex pb-2">
                    <button
                      onClick={() => openModal(products)}
                      className="block mx-auto w-full md:w-auto  text-black bg-[#e0f2fe] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
                      type="button"
                    >
                      read more
                    </button>
                  </div>
                </a>
              </div>
            );
          })}

          {modal && selectedProduct && (
            <div
              className={classNames(
                "flex justify-center items-center overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                {
                  "bg-opacity-75 bg-gray-500": modal,
                }
              )}
            >
              <div
                className={classNames(
                  "flex flex-col max-w-6xl max-h-screen px-4 mx-auto sm:px-6",
                  {
                    "bg-opacity-75 ": modal, // Apply background blur class when modal is open
                  }
                )}
              >
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start p-2 border-b border-solid  rounded-t">
                    <button
                      className="bg-transparent border-0 text-black float-left"
                      onClick={() => setModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-sm block bg-white-300 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="text-gray-900 bg-white">
                    <section className="flex flex-col max-w-6xl min-h-96 px-4 mx-auto sm:px-6">
                      <h2 className="mr-10 text-xl font-bold leading-none md:text-xl text-center pb-5">
                        {selectedProduct.attributes.name}
                      </h2>
                      <div className="flex flex-wrap">
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-full flex flex-col ">

                          <ReactMarkdown
                            children={selectedProduct.attributes.content}
                            remarkPlugins={[remarkGfm]}
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

{/* <div class="flex items-start">
  <ul
    class="mr-4 flex list-none flex-col flex-wrap pl-0"
    role="tablist"
    data-te-nav-ref>
    <li role="presentation" class="flex-grow text-center">
      <a
        href="#pills-home03"
        class="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
        id="pills-home-tab03"
        data-te-toggle="pill"
        data-te-target="#pills-home03"
        data-te-nav-active
        role="tab"
        aria-controls="pills-home03"
        aria-selected="true"
        >Home</a
      >
    </li>
    <li role="profile" class="flex-grow text-center">
      <a
        href="#pills-profile03"
        class="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
        id="pills-profile-tab03"
        data-te-toggle="pill"
        data-te-target="#pills-profile03"
        role="tab"
        aria-controls="pills-profile03"
        aria-selected="false"
        >Profile</a
      >
    </li>
    <li role="contact" class="flex-grow text-center">
      <a
        href="#pills-contact03"
        class="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
        id="pills-contact-tab03"
        data-te-toggle="pill"
        data-te-target="#pills-contact03"
        role="tab"
        aria-controls="pills-contact03"
        aria-selected="false"
        >Contact</a
      >
    </li>
    <li role="disabled" class="flex-grow text-center">
      <a
        href="#pills-disabled03"
        class="pointer-events-none my-2 block rounded bg-neutral-200 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 dark:bg-neutral-600 dark:text-neutral-500"
        id="pills-disabled-tab03"
        data-te-toggle="pill"
        data-te-target="#pills-disabled03"
        role="tab"
        aria-controls="pills-disabled03"
        aria-selected="false"
        >Disabled</a
      >
    </li>
  </ul>

  <div class="my-2">
    <div
      class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="pills-home03"
      role="tabpanel"
      aria-labelledby="pills-home-tab03"
      data-te-tab-active>
      Tab 1 content vertical
    </div>
    <div
      class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="pills-profile03"
      role="tabpanel"
      aria-labelledby="pills-profile-tab03">
      Tab 2 content vertical
    </div>
    <div
      class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="pills-contact03"
      role="tabpanel"
      aria-labelledby="pills-contact-tab03">
      Tab 3 content vertical
    </div>
    <div
      class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="pills-disabled03"
      role="tabpanel"
      aria-labelledby="pills-disabled-tab03">
      Tab 4 disabled vertical
    </div>
  </div>
</div> */}
      </div>
    </section>
  );
};

export default ProductsShow;
