'use client';


import AcademySection from "@/components/Academy";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <AcademySection />
    </main>
  )
}
