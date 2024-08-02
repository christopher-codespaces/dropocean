import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Review } from "../components/Review";
import { Services } from "../components/OurSolutions";

export default function Home() {
  return (
  <>
    <NavBar/>
    <Hero/>
    <Review/>
    <Services/>
 </>
  );
}
