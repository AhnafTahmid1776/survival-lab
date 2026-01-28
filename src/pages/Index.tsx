import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import ProcessSection from "@/components/ProcessSection";
import EngagementSection from "@/components/EngagementSection";
import FilterSection from "@/components/FilterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <ProblemSection />
      <DifferentiationSection />
      <ProcessSection />
      <EngagementSection />
      <FilterSection />
      <FooterSection />
    </main>
  );
};

export default Index;
