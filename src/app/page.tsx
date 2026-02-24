
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { StatsLogoWall } from "@/components/home/StatsLogoWall";
import { SolutionCards } from "@/components/home/SolutionCards";
import { EasyEditDifferentiator } from "@/components/home/EasyEditDifferentiator";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CaseStudyGrid } from "@/components/home/CaseStudyGrid";
import { InsightsCards } from "@/components/home/InsightsCards";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* B) Hero */}
        <Hero />
        
        {/* C) Trust (Klijenti + Brojke) */}
        <StatsLogoWall />
        
        {/* D) Rješenja */}
        <SolutionCards />
        
        {/* E) EasyEdit CMS (Diferencijator) */}
        <EasyEditDifferentiator />
        
        {/* F) Proces (Agile/Scrum) */}
        <ProcessSection />
        
        {/* G) Case Studies + Testimonial */}
        <CaseStudyGrid />
        
        {/* H) Resursi (Insights + Newsletter) */}
        <InsightsCards />
        
        {/* I) Final CTA / Kontakt */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
