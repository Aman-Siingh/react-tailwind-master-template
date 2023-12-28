import React from "react";
import { Link } from "react-router-dom";

const Contacthero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mb-4 font-light">
            Have questions or want to get in touch? Reach out to us using the
            information below or fill out the contact form, and we'll get back
            to you as soon as possible.
          </p>
          <div className="mb-4">
            <p className="font-medium">Email: mywebsite@gmail.com</p>
            <p className="font-medium">Phone: +1 123-456-7890</p>
            <p className="font-medium">
              Address: Dwarka Sec 10 , Delhi , India 
            </p>
          </div>
          <Link
            to="#"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Learn more
            <svg
              className="w-6 h-6 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contacthero;
