import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Review } from "../components/Review";
import { Services } from "../components/OurSolutions";
import { OurWork } from "../components/OurWork";
import { OurProcess } from "../components/OurProcess";
import { CrazyHomeFooter } from "../components/CrazyHomeFooter";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
  <>
    <Hero/>
    <Review/>
    <Services/>
    <OurProcess/>
 </>
  );
}
