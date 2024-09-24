import React from "react";
import { motion } from "framer-motion";

// ProjectCard component
export function ProjectCard({
  title,
  date,
  description,
  tags = [],
  video,
  links = [],
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 text-white rounded-lg shadow-md mt-12 mr-12 overflow-hidden">
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
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">{date}</p>
        <p className="mt-2">{description}</p>
        {/* Render tags only if there are tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-800 text-white text-sm font-medium px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-2 mt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={`https://${link.url}`}  // Ensure it's a full URL
              target="_blank"  // Open in a new tab
              rel="noopener noreferrer"  // Security measure
              className="inline-block bg-cyan-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-black transition">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
