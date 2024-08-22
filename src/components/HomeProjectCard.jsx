import React from "react";
import { motion } from "framer-motion";

// ProjectCard component
export function HomeProjectCard({ title, date, description, tags, video, links }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white rounded-lg shadow-md mt-12 mr-12 overflow-hidden">
      <motion.video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-48 object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="p-4">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-gray-400">{date}</p>
        <p className="mt-2">{description}</p>

        <div className="flex gap-2 mt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="inline-block bg-blue-600 border border-blue-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-500 transition">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
