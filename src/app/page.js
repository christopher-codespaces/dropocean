import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Review } from "../components/Review";
import { Services } from "../components/OurSolutions";
import { OurProcess } from "../components/OurProcess";
import { CrazyHomeFooter } from "../components/CrazyHomeFooter";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cape Neto Design | Home</title>
        <meta
          name="description"
          content="Cape Neto Design offers exceptional web design and development services specializing in construction industry solutions. Our expertise includes advanced booking systems, automation, SEO, and more."
        />
        <meta
          name="keywords"
          content="Web design, construction websites, booking systems, automation, SEO, web development"
        />
        <meta property="og:title" content="Cape Neto Design | Home" />
        <meta
          property="og:description"
          content="Cape Neto Design provides top-notch web design and development services for the construction industry, focusing on advanced solutions like booking systems, automation, and SEO optimization."
        />
        <meta property="og:image" content="/path/to/your/og-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cape Neto Design | Home" />
        <meta
          name="twitter:description"
          content="Cape Neto Design specializes in web design and development for the construction industry, offering services such as advanced booking systems, automation, and SEO optimization."
        />
        <meta name="twitter:image" content="/path/to/your/twitter-image.jpg" />
        <link rel="canonical" href="https://www.capeneto.net" />
      </Head>
      <Hero />
      <Review />
      <Services />
      <OurProcess />
    </div>
  );
}
