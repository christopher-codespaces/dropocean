import React from "react";
import { FaHtml5, FaTools, FaCode } from "react-icons/fa";
import Magic from "./Magic"

const services = [
  {
    title: "Webflow Expertise",
    description:
      "Leverage our Webflow expertise to create stunning, responsive websites tailored to your brand.",
    icon: <FaHtml5 className="h-12 w-12 fill-current" />,
  },
  {
    title: "Automated CRM Solutions",
    description:
      "Automate and manage client interactions with customized CRM solutions that streamline your workflow.",
    icon: <FaTools className="h-12 w-12 fill-current" />,
  },
  {
    title: "High-Quality Web Applications",
    description:
      "Deliver high-quality, optimized web applications designed to meet your business needs and exceed user expectations.",
    icon: <FaCode className="h-12 w-12 fill-current" />,
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="relative overflow-hidden rounded-lg border  bg-white select-none hover:shadow hover:shadow-teal-200 p-4">
    <div className="flex flex-col justify-between h-[180px] p-6">
      {icon}
      <div className="space-y-2 mt-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export function Services() {
  return (
    <section
      id="features"
      className="container mx-auto mt-40 px-4 space-y-6 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-white leading-[1.1] sm:text-3xl md:text-6xl">
          Our Services
        </h2>
        <p className="max-w-[85%] leading-normal text-white text-muted-foreground sm:text-lg sm:leading-7">
          We specialize in Webflow, offering automated CRM solutions and
          delivering high-quality, optimized web applications.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="mt-12">
            <Magic/>
      </div>
    </section>
  );
}
