import Image from "next/image";
import Hero from "./Components/Hero";
import About from "./Components/About";
import OrbitHero from "./Components/OrbitHero";
import RecentWork from "./Components/RecentWork";
import ContactSection from "./Components/ContactSection";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <RecentWork />
      <ContactSection />
    </>
  );
}
