import React from 'react'

const ContactArea = () => {
  // const handleSubmitForm = (e) => {
  //   e.preventDefault();

  //   alert("Thank you for your interest!");
  // }
  return (
    <section className="py-10 lg:py-20">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="w-full pb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d870.042595356303!2d89.65756815485162!3d27.440238831986537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbt!4v1682061215303!5m2!1sen!2sbt"
            title="map"
            scrolling="no"
            frameborder="0"
            width="100%"
            height="300px"
            className=""
            loading="lazy"
          />
        </div>
        <div className="grid lg:grid-cols-[1fr_3fr] grid-cols-1">
          <div className="border-solid border p-6">
            <h4 className="text-blue font-semibold text-2xl font-poppins mb-4">
              Contact Information
            </h4>
            <ul>
              <li className="flex gap-4 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-6 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Email</h5>
                  <a href="mailto:assuretechbd@gmail.com">help@gmail.com</a>
                </div>
              </li>
              <li className="flex gap-4 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-6 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Phone</h5>
                  <a href="tel:+8801679383667">+975 77889977</a>
                </div>
              </li>
              <li className="flex gap-4 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-6 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  ></path>
                </svg>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Address</h5>
                  <a href="https://goo.gl/maps/SHkRe94QMEhs8iKRA">
                    Thimphu, Bhutan
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <h4 className="text-blue font-semibold text-3xl font-poppins mb-3">
              Get in touch
            </h4>
            <p>We will catch you as early as we receive the message</p>
            <form className="mt-6">
              <div className="flex gap-8">
                <div className="w-1/2">
                  <input
                    type="text"
                    className="p-2 border-b-2 border-gray-400 w-full text-black"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="email"
                    className="p-2 border-b-2 border-gray-400 w-full text-black"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  rows="4"
                  className="p-2 border-b-2 border-gray-400 w-full text-black"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <div className="mt-8">
                <button type="submit" className="btn btn-pink px-8">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactArea