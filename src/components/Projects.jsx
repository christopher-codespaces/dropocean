"use client";
import React, { useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import Cal, { getCalApi } from "@calcom/embed-react";

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
    links: [{ label: "Website", url: "bluecollarhaulers.com" }],
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
    links: [{ label: "Website", url: "rogersdumpsters.com" }],
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
    links: [{ label: "Website", url: "https://peachtreepools.com/" }],
  },
];

export default function  Projects () {
  return (
    <div className="container mt-20 mx-auto p-4">
      <div className="text-center">
        <h3 className="text-6xl font-bold  text-white font-bold">Portfolio</h3>
        <p className="text-white mt-2">Setting Industry Standards</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Project Cards Column */}
        <div className="flex-1">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                tags={project.tags}
                video={project.image}
                links={project.links}
              />
            ))}
          </div>
        </div>
        {/* Cal.com Schedule Column */}
        <div className="flex-none md:w-1/3">
          <Cal
            namespace="30min"
            calLink="nocodewithchrisagency/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
}
