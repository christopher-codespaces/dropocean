"use client";
import React, { useState } from "react";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-4 sm:py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="/" title="" className="flex">
              <span className="logo-text">Cape Neto Solutions</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}>
              <span hidden={expanded} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>

              <span hidden={!expanded} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>

          <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
            <a
              href="/our-work"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white">
              Our Work
            </a>

            <a
              href="/about"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white">
              About Us
            </a>

            <a
              href="/portfolio"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white">
              Portfolio
            </a>
            <a
              href="/gallery"
              title=""
              className="text-base font-normal text-white transition-all duration-200 hover:text-white">
              Gallery
            </a>
          </nav>
        </div>

        {expanded && (
          <nav>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <a
                href="/our-work"
                title=""
                className="expanded-nav-link transition-all duration-200 ">
                Our Work
              </a>

              <a
                href="/about"
                title=""
                className="expanded-nav-link transition-all duration-200 ">
                About Us
              </a>

              <a
                href="/portfolio"
                title=""
                className="expanded-nav-link transition-all duration-200 ">
                Portfolio
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default NavBar;
