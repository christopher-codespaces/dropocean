import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { CrazyHomeFooter } from "../components/CrazyHomeFooter";
import { Metadata } from "next";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Best Web Design Agency In New York | Cape Neto Solutions ",
  description:"Cape Neto Design specializes in top-tier web design and development for the construction industry, offering advanced solutions such as booking systems, automation, and SEO optimization. Our expertise ensures that construction businesses gets high converting leads for your business, high-performance websites.",
  keywords:
    "Web design, construction websites, booking systems, automation, SEO, web development",
  openGraph: {
    title: "Cape Neto Design | Home",
    description:
      "Cape Neto Design provides top-notch web design and development services for the construction industry, focusing on advanced solutions like booking systems, automation, and SEO optimization.",
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
      "Cape Neto Design specializes in web design and development for the construction industry, offering services such as advanced booking systems, automation, and SEO optimization.",
    image: "/ui.png",
  },
  canonical: "https://www.capeneto.net",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <CrazyHomeFooter />
        <Script
          id="clarity-script"
          type="text/javascript"
          strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nnqsbeispl");
          `}
        </Script>
      </body>
    </html>
  );
}
