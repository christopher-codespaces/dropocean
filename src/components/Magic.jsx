import React from "react";

const MagicCard = () => (
  <div className=" mt-1 flex flex-col justify-center items-center">
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-8">
      <h2 className="text-4xl font-bold text-white mb-4">Talk to experts</h2>
      <p className="text-lg text-white mb-8">
        Get in contact with our expert team members to help you get started.
      </p>
      <a
        href="#"
        className="bg-white hover:bg-gray-200 text-purple-600 font-bold py-2 px-4 rounded">
        Grab a coffee
      </a>
    </div>
  </div>
);

export default MagicCard;
