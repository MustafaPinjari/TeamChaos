"use client";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import ProblemStatement from "@/components/sections/ProblemStatement";
import OurApproach from "@/components/sections/OurApproach";
import TeamChaos from "@/components/sections/TeamChaos";
import TurningPoint from "@/components/sections/TurningPoint";
import Architecture from "@/components/sections/Architecture";
import Features from "@/components/sections/Features";
import WinMoment from "@/components/sections/WinMoment";
import LastSignal from "@/components/sections/LastSignal";
import Learnings from "@/components/sections/Learnings";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <SmoothScroll>
        <Navbar />
        <main className="pb-24 md:pb-28">
          <Hero />
          <Marquee />
          <ProblemStatement />
          <OurApproach />
          <TeamChaos />
          <TurningPoint />
          <Architecture />
          <Features />
          <WinMoment />
          <LastSignal />
          <Learnings />
          <CTA />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
