
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProblemCards } from "@/components/home/ProblemCards";
import { SolutionCards } from "@/components/home/SolutionCards";
import { EasyEditDifferentiator } from "@/components/home/EasyEditDifferentiator";
import { TrustPillars } from "@/components/home/TrustPillars";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CaseStudyGrid } from "@/components/home/CaseStudyGrid";
import { StatsLogoWall } from "@/components/home/StatsLogoWall";
import { InsightsCards } from "@/components/home/InsightsCards";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemCards />
        <SolutionCards />
        <EasyEditDifferentiator />
        <TrustPillars />
        <ProcessSection />
        <CaseStudyGrid />
        <StatsLogoWall />
        <InsightsCards />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
