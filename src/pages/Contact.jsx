
import React from "react";

const Contact = () => {
  return (
    <div className="py-10 bg-white text-[#1D1616] dark:bg-[#1D1616] dark:text-white transition-all duration-300">
      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold">Contact Information</h2>
            <p className="text-lg">
              I’m available for collaboration, job opportunities, or just a
              friendly chat. Feel free to reach out to me!
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-4 text-violet-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>I2IT College Hostel, Pune</span>
              </p>
              <p className="flex items-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-4 text-violet-500"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 7974476699</span>
              </p>
              <p className="flex items-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-4 text-violet-500"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>anuragpatil.11831183@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            noValidate=""
            className="space-y-6 bg-gray-100 dark:bg-[#1D1616] p-6 rounded-md shadow-lg border-2 transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-4">Send a Message</h2>
            <label className="block">
              <span className="text-lg font-bold">Full Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="block w-full bg-white dark:bg-[#1D1616] dark:text-white mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-violet-600"
              />
            </label>
            <label className="block">
              <span className="text-lg font-bold">Email Address</span>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="block w-full bg-white dark:bg-[#1D1616] dark:text-white mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-violet-600"
              />
            </label>
            <label className="block">
              <span className="text-lg font-bold">Message</span>
              <textarea
                rows="4"
                placeholder="Your message here..."
                className="block w-full bg-white dark:bg-[#1D1616] dark:text-white mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-violet-600"
              ></textarea>
            </label>
            <button
              type="submit"
              className="w-full py-3 bg-violet-600 text-white rounded-md text-lg font-semibold hover:bg-violet-700 focus:ring-4 focus:ring-violet-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
