"use client"
import React, { createContext, useState } from "react";
import { motion } from "framer-motion";

export const CrazyHomeFooter = () => {
  return (
    <section className="grid place-content-center gap-2 bg-black px-8 py-24 text-white">
      <FlipLink href="/about" color="text-blue-500">
        About US
      </FlipLink>
      <FlipLink
        href="https://cal.com/nocodewithchrisagency/30min"
        color="text-blue-900">
        Coffee ?
      </FlipLink>
      <FlipLink
        href="/gallery"
        color="text-blue-900">
        Coffee ?
      </FlipLink>
      <FlipLink href="/our-work" color="text-pink-500">
        Portfolio
      </FlipLink>
    </section>
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
