"use client";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Build Your Future with Us
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Expert Construction Web Solutions
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At Cape Neto Web Solutions, we specialize in creating
                high-performance, visually stunning websites tailored for the
                construction industry. Our team delivers customized solutions
                that showcase your projects and drive business growth.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Construction Showcase"
            src="/Macbook-Air-peachtreepools.com.png"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Our approach focuses on delivering exceptional results through
                seamless construction web design and development. From
                showcasing your completed projects to integrating client
                management systems, we handle every aspect of your project with
                precision and expertise.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Custom Construction Web Designs.
                    </strong>{" "}
                    Tailored solutions that highlight your projects and
                    expertise, creating a compelling online presence for your
                    construction business.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Advanced Interactive Features.
                    </strong>{" "}
                    Implementing interactive elements and animations that engage
                    visitors and showcase your projects effectively.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Robust Performance and Reliability.
                    </strong>{" "}
                    Ensuring fast load times, responsive design, and dependable
                    performance for a seamless user experience across all
                    devices.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Partner with us to elevate your construction business with
                cutting-edge web solutions. Our commitment to quality and client
                satisfaction sets us apart as a leading agency in the
                construction niche.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Ready to Build Your Online Presence?
              </h2>
              <p className="mt-6">
                Contact us today to discuss how we can help you achieve your
                digital goals. With our expertise in construction web
                development, we’ll create a website that not only meets but
                exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
