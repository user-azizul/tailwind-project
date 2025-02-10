import React, { useState } from "react";
import "./index.css";

function NavSection() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5">
      <div className="flex flex-wrap items-center justify-between max-w-screen mx-auto px-4">
        <a href="#logo" className="flex items-center z-60">
          <span className="self-center font-semibold text-xl whitespace-nowrap">
            Company Logo
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <a
            href=""
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium text-sm rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
          >
            <button>Download</button>
          </a>
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="text-xl font-bold">☰</span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 md:w-96 bg-white md:shadow-md lg:shadow-none lg:static lg:w-auto lg:flex transition-transform duration-300 ease-in-out ${
            isMobile ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row mt-10 font-medium lg:mt-0 lg:space-x-8 p-4 items-start text-left">
            {[
              "Home",
              "Company",
              "Marketplace",
              "Features",
              "Team",
              "Contacts"
            ].map((item) => (
              <li key={item} className="w-full">
                <a
                  href="#"
                  className="block w-full pl-4 py-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700"
                  onClick={() => setIsMobile(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavSection;
