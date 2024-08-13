import React from "react";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Alex",
    username: "@alex",
    body: "Our revenue has skyrocketed by 10x since launching the new website. Our clients absolutely love the user-friendly design and seamless functionality.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Sam",
    username: "@sam",
    body: "The website overhaul was a game changer for us. We've seen a massive increase in inquiries and our clients rave about the new look and features.",
    img: "https://avatar.vercel.sh/sam",
  },
  {
    name: "Taylor",
    username: "@taylor",
    body: "Incredible results! Our site now drives 10x more revenue, and the positive feedback from users has been overwhelming.",
    img: "https://avatar.vercel.sh/taylor",
  },
  {
    name: "Jordan",
    username: "@jordan",
    body: "The redesign transformed our business. We’re not only seeing a huge boost in revenue but also receiving great feedback from users about the new website.",
    img: "https://avatar.vercel.sh/jordan",
  },
  {
    name: "Casey",
    username: "@casey",
    body: "Amazing results! The new site helped us achieve 10x revenue growth, and our users are thrilled with the new features and design.",
    img: "https://avatar.vercel.sh/casey",
  },
  {
    name: "Morgan",
    username: "@morgan",
    body: "Our revenue has increased tenfold since the website redesign. The user experience is top-notch, and our clients are very impressed.",
    img: "https://avatar.vercel.sh/morgan",
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
      <h2 className="mt-6 text-4xl font-normal text-white sm:mt-10 mb-20 sm:text-5xl lg:text-6xl xl:text-8xl glow">
        Hear from our customers
      </h2>
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
