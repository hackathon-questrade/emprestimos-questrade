'use client'

import About from "./UI/Organisms/About";
import FAQ from "./UI/Organisms/FAQ";
import Footer from "./UI/Organisms/Footer";
import Hero from "./UI/Organisms/Hero";
import Menu from "./UI/Organisms/Menu";
import Process from "./UI/Organisms/Process";
import Security from "./UI/Organisms/Security";

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <About />
      <Process />
      <Security />
      <FAQ />
      <Footer />
    </>
  )
}
