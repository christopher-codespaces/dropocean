import React from 'react'
import AboutUs from '../../components/AboutUs'
import NavBar from '../../components/NavBar'
import Team from '../../components/Team'
import { Metadata } from "next";
import OurMission from '../../components/Mission';


export const metadata = {
  title: "The Best Web Design Agency In New York | About Us ",
  description:
    "Cape Neto Design specializes in top-tier web design and development for the home improvement industry, offering advanced solutions such as booking systems, automation, and SEO optimization. Our expertise ensures that home improvement businesses gets high converting leads for your business, high-performance websites.",
  keywords:
    "Web design, home improvement websites, booking systems, automation, SEO, web development",
  openGraph: {
    title: "Cape Neto Design | Home",
    description:
      "Cape Neto Design provides top-notch web design and development services for the home improvement industry, focusing on advanced solutions like booking systems, automation, and SEO optimization.",
    url: "https://www.capeneto.com",
    images: [
      {
        url: "/Macbook-Air-peachtreepools.com.png",
        width: 1200,
        height: 630,
        alt: "Cape Neto Design Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Neto Design ",
    description:
      "Cape Neto Design specializes in web design and development for the home improvement industry, offering services such as advanced booking systems, automation, and SEO optimization.",
    image: "/ui.png",
  },
  canonical: "https://www.capeneto.net",
};;
function page() {
  return (
    <div>
      <AboutUs/>
      <OurMission/>
      <Team/>
    </div>
  )
}

export default page
