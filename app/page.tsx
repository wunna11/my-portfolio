"use client"

import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import TrackingPage from "@/components/TrackingCount"
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
