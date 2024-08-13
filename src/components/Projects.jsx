"use client"
import React, { createContext } from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Blue Collar Haulers",
    date: "Jan 2024 - Feb 2024",
    description:
      "We redesigned the Blue Collar Haulers website using Webflow. The update included advanced booking systems, automation, Stripe integration, social media integration, SEO, and dynamic blog content. This transformation resulted in a 100% increase in website visitors and a 300% boost in sales.",
    tags: [
      "Webflow",
      "Booking",
      "Automation",
      "Stripe",
      "Social Media Integration",
      "SEO",
      "Blog Content",
    ],
    image: "/bluecollarhaulers.com.webm",
    links: [{ label: "Website", url: "#" }],
  },
  {
    title: "Friendly Firm",
    date: "March 2024 - Present",
    description:
      "For Friendly Firm, we developed and launched a new site with Webflow, incorporating booking features, automation, Stripe integration, and SEO. The enhanced functionality and design led to a 150% increase in traffic and doubled their sales.",
    tags: [
      "Webflow",
      "Booking",
      "Automation",
      "Stripe",
      "Social Media Integration",
      "SEO",
      "Blog Content",
    ],
    image: "/Friendlyfirm.webm",
    links: [{ label: "Website", url: "#" }],
  },
  {
    title: "Rogers Dumpsters",
    date: "July 2023 - October 2023",
    description:
      "The Rogers Dumpsters project involved a complete website overhaul using Webflow. Key features included advanced booking, automation, Stripe payments, and SEO. The revamped site saw a 200% increase in site visits and a 250% rise in sales.",
    tags: [
      "Webflow",
      "Booking",
      "Automation",
      "Stripe",
      "Social Media Integration",
      "SEO",
      "Blog Content",
    ],
    image: "/rogersdumpsters.com.webm",
    links: [{ label: "Website", url: "#" }],
  },
  {
    title: "Wpbabu",
    date: "November 2023 - Present",
    description:
      "The Wpbabu website redesign used Webflow to integrate booking systems, automation, and Stripe payments, complemented by social media features and SEO. This overhaul contributed to a 120% increase in visitors and a 300% growth in sales.",
    tags: [
      "Webflow",
      "Booking",
      "Automation",
      "Stripe",
      "Social Media Integration",
      "SEO",
      "Blog Content",
    ],
    image: "/wpbabu.com.webm",
    links: [{ label: "Website", url: "#" }],
  },
  {
    title: "Peach Tree Pools",
    date: "January 2023 - June 2023",
    description:
      "We revitalized the Peach Tree Pools website using Webflow, incorporating booking systems, automation, Stripe integration, and comprehensive SEO. These updates led to a 90% increase in web traffic and a 275% increase in sales.",
    tags: [
      "Webflow",
      "Booking",
      "Automation",
      "Stripe",
      "Social Media Integration",
      "SEO",
      "Blog Content",
    ],
    image: "/peachtreepools.com.webm",
    links: [{ label: "Website", url: "#" }],
  },
];


export default function Projects() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold">
          Check out my latest work
        </h1>
        <p className="text-white mt-2">
          worked on a variety of projects, from simple websites to complex web
          applications. Here are a few of my favorites.
        </p>
      </div>
      <div className="grid gap-4 mt-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            date={project.date}
            description={project.description}
            tags={project.tags}
            video={project.image}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
