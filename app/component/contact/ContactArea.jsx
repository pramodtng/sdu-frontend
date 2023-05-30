"use client"
import React,{useState} from 'react'

const ContactArea = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (details.length <= 0) {
      tempErrors["details"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          name: name,
          email: email,
          details: details,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="w-full pb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.369511712398!2d89.65689839897728!3d27.439530976956146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1947356583663%3A0x61e66f7cf7b34a78!2sState%20Trading%20Corporation%20of%20Bhutan%20Limited%20(STCBL)!5e1!3m2!1sen!2sbt!4v1684823845631!5m2!1sen!2sbt"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
                  <a href="mailto:assuretechbd@gmail.com">info@tashicell.com</a>
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
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <div className="w-1/2">
                  <input
                    type="text"
                    className="p-2 border-b-2 border-gray-400 w-full text-black"
                    placeholder="Your Name"
                    name="name"
                    id="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                  {errors?.name && (
                    <p className="text-red-500">Name cannot be empty.</p>
                  )}
                </div>
                <div className="w-1/2">
                  <input
                    type="email"
                    className="p-2 border-b-2 border-gray-400 w-full text-black"
                    placeholder="Your Email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  {errors?.email && (
                    <p className="text-red-500">Email cannot be empty.</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  rows="4"
                  className="p-2 border-b-2 border-gray-400 w-full text-black"
                  placeholder="How can we help you?"
                  required
                  name="details"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                ></textarea>
                {errors?.details && (
                  <p className="text-red-500">Details cannot be empty.</p>
                )}
              </div>
              <div className="mt-8">
                {/* <button type="submit" className="btn btn-pink px-8">
                  Submit
                </button> */}

                {/* {showSuccessMessage && (
                  <p className="text-blue font-semibold text-sm my-2">
                    Thank you! Your Message has been delivered.
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-blue">
                    Oops! Something went wrong, please try again.
                  </p>
                )} */}

                <div className="flex flex-row items-center justify-start">
                  <button
                    type="submit"
                    className="px-10 mt-2 py-2 bg-[#007bff] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                  >
                    {buttonText}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="text-cyan-500 ml-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-left">
                  {showSuccessMessage && (
                    <p className="text-blue font-semibold text-sm my-2">
                      Thank you! Your Message has been delivered.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className="text-blue">
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactArea