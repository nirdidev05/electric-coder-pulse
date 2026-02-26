import { Database, GitBranch, TrendingUp, Brain, Target, Lightbulb, LineChart } from "lucide-react";

export const pfasSections = [
  { id: "overview", title: "Executive Summary", icon: Brain },
  { id: "challenge", title: "Scientific Challenge", icon: Target },
  { id: "solution", title: "Technical Solution", icon: Lightbulb },
  { id: "results", title: "Key Results", icon: TrendingUp },
  { id: "tech-stack", title: "Technology Stack", icon: Database },
  { id: "contributions", title: "Scientific Contributions", icon: LineChart },
  { id: "future", title: "Future Perspectives", icon: GitBranch },
];
