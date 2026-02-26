import { motion } from "framer-motion";
import {
  OverviewSection,
  ChallengeSection,
  SolutionSection,
  ResultsSection,
  TechStackSection,
  ContributionsSection,
  FutureSection
} from "./sections";

interface MainContentPFASProps {
  activeSection: string;
}

export const MainContentPFAS = ({ activeSection }: MainContentPFASProps) => {
  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "challenge":
        return <ChallengeSection />;
      case "solution":
        return <SolutionSection />;
      case "results":
        return <ResultsSection />;
      case "tech-stack":
        return <TechStackSection />;
      case "contributions":
        return <ContributionsSection />;
      case "future":
        return <FutureSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderSection()}
      </motion.div>
    </div>
  );
};
