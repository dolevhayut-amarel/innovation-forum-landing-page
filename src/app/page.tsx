import { HeroSection } from "@/components/HeroSection";
import { ClientsBar } from "@/components/ClientsBar";
import { BrandStatement } from "@/components/BrandStatement";
import { LeadsToSuccess } from "@/components/LeadsToSuccess";
import { WhyStudySection } from "@/components/WhyStudySection";
import { CtaBar } from "@/components/CtaBar";
import { StudyProgramsSection } from "@/components/StudyProgramsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhatStudySection } from "@/components/WhatStudySection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main dir="rtl" className="w-full overflow-x-hidden">
      <HeroSection />
      <ClientsBar />
      <BrandStatement />
      <LeadsToSuccess />
      <WhyStudySection />
      <CtaBar />
      <StudyProgramsSection />
      <TestimonialsSection />
      <WhatStudySection />
      <FooterSection />
    </main>
  );
}
