import React from "react";
import { motion } from "framer-motion";

// ProjectCard component
export function ProjectCard({ title, date, description, tags, video, links }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md  mt-12 mr-12 overflow-hidden">
      <motion.video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-48 object-fit"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{date}</p>
        <p className="mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-black text-white text-sm font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="inline-block bg-black border border-blue-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-500 hover:text-black transition">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
