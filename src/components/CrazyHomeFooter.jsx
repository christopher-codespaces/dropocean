"use client";
import React from "react";
import { motion } from "framer-motion";

export const CrazyHomeFooter = () => {
  return (
    <footer className="bg-black text-white py-24 px-8">
      <div className="hidden md:grid place-content-center gap-2">
        <FlipLink href="/about" color="text-blue-500">
          About US
        </FlipLink>
        <FlipLink
          href="https://cal.com/nocodewithchrisagency/30min"
          color="text-blue-900">
          Coffee ?
        </FlipLink>
        <FlipLink href="/gallery" color="text-blue-900">
          Gallery
        </FlipLink>
        <FlipLink href="/our-work" color="text-pink-500">
          Portfolio
        </FlipLink>
      </div>
      <div className="md:hidden grid place-content-center gap-2">
        <SimpleLink href="/about">About US</SimpleLink>
        <SimpleLink href="https://cal.com/nocodewithchrisagency/30min">
          Coffee ?
        </SimpleLink>
        <SimpleLink href="/gallery">Gallery</SimpleLink>
        <SimpleLink href="/our-work">Portfolio</SimpleLink>
      </div>
    </footer>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, color }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative block overflow-hidden whitespace-nowrap ${color} text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl`}
      style={{
        lineHeight: 0.75,
      }}>
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const SimpleLink = ({ children, href }) => {
  return (
    <a href={href} className="text-blue-500 text-2xl font-semibold uppercase">
      {children}
    </a>
  );
};
