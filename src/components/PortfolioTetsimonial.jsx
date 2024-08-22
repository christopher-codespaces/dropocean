"use client"
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn logo from react-icons
import Portfolio from "./Portfolio";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO at Company",
    text: "This is an amazing product. It has transformed the way we work.",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    position: "CTO at Another Company",
    text: "Fantastic service and support. Highly recommend to everyone!",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
  },
  // Add more testimonials here
];

const PortfolioTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <p className="text-lg font-semibold">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-sm text-gray-600">
            {testimonials[currentIndex].position}
          </p>
        </div>
        <p className="mb-4 text-gray-800">{testimonials[currentIndex].text}</p>
        <a
          href={testimonials[currentIndex].linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800">
          <FaLinkedin className="w-6 h-6 inline-block mr-2" />
          View on LinkedIn
        </a>
      </div>

      {/* Buttons */}
      <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
        <button
          onClick={prevTestimonial}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Previous
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Next
        </button>
      </div>
    </div>
  );
};

export default PortfolioTestimonial;
