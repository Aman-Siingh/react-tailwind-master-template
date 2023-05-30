import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto text-center">
        <Link
          to="#"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          MyWebsite
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p>
        <ul className="flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white">
          <li>
            <Link to="/home" className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6">
              About
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-2022{" "}
          <Link to="#" className="hover:underline">
            MyWebsite™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
