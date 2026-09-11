import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import { Trusted } from "@/components/home/trusted";
import { WhatWeDo } from "@/components/home/what-we-do";
import { Industries } from "@/components/home/industries";
import { FeaturedCases } from "@/components/home/featured-cases";
import { Approach } from "@/components/home/approach";
import { WhyUs } from "@/components/home/why-us";
import { CtaBanner } from "@/components/home/cta-banner";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <WhatWeDo />
      <Industries />
      <FeaturedCases />
      <Approach />
      <WhyUs />
      <CtaBanner />
    </>
  );
}
