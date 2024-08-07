import React from "react";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="relative w-64 mr-10 mt-8 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-white hover:bg-gray-200 sm:w-56 xs:w-48">
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-600">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-black text-sm">{body}</blockquote>
    </figure>
  );
};

export function Review() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg mt-20 md:shadow-xl">
      <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 mb-20 sm:text-5xl lg:text-6xl xl:text-8xl glow">
        Hear from our customers
      </h1>
      <Marquee pauseOnHover={true} speed={400}>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse={true} pauseOnHover={true} speed={400}>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
    </div>
  );
}
