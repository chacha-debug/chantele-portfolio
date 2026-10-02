import About from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import WhatIDo from "@/components/WhatIDo";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav home />
      <main id="main">
        <Hero />
        <WhatIDo />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
