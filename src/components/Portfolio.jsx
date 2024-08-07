"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain", // Ensures the full image is shown
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Prevents image repetition
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Portfolio;

const cards = [
  {
    url: "/dash.png",
    title: "Dashboard",
    id: 1,
  },
  {
    url: "/dating.png",
    title: "Dating App",
    id: 2,
  },
  {
    url: "/delivery.png",
    title: "Delivery App",
    id: 3,
  },
  {
    url: "/Figma.png",
    title: "Figma Design",
    id: 4,
  },
  {
    url: "/forex.png",
    title: "Forex Trading",
    id: 5,
  },
  {
    url: "/lulep.png",
    title: "Lulep Project",
    id: 6,
  },
  {
    url: "/shopify-app.png",
    title: "Shopify App",
    id: 7,
  },
  {
    url: "/shopify.png",
    title: "Shopify Store",
    id: 8,
  },
  {
    url: "/ui.png",
    title: "UI Design",
    id: 9,
  },
];
