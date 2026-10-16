import React from "react";
import HeroSection from "@/components/HeroSection";
import AudienceSelector from "@/components/AudienceSelector";
import PartnersMarquee from "@/components/PartnersMarquee";
import SignalDashboard from "@/components/SignalDashboard";
import SalaryRoiCalculator from "@/components/SalaryRoiCalculator";
import CareerFlowBridge from "@/components/CareerFlowBridge";
import JourneyTimeline from "@/components/JourneyTimeline";
import ServicesGrid from "@/components/ServicesGrid";
import ToolsPreview from "@/components/ToolsPreview";
import IndustriesBento from "@/components/IndustriesBento";
import InteractiveCaseStudies from "@/components/InteractiveCaseStudies";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlansSection from "@/components/PlansSection";
import OfficesShowcase from "@/components/OfficesShowcase";
import FaqAccordion from "@/components/FaqAccordion";
import FinalCta from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSelector />
      <PartnersMarquee />
      <SignalDashboard />
      <SalaryRoiCalculator />
      <CareerFlowBridge />
      <JourneyTimeline />
      <ServicesGrid />
      <ToolsPreview />
      <IndustriesBento />
      <InteractiveCaseStudies />
      <TestimonialsSection />
      <PlansSection />
      <OfficesShowcase />
      <FaqAccordion limit={4} />
      <FinalCta />
    </>
  );
}
