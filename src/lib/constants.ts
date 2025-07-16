import { Brain, Zap, Database, Cpu, BarChart3, GitBranch, CheckCircle } from "lucide-react"

export const sections = [
  { id: "overview", title: "Vue d'Ensemble", icon: Brain },
  { id: "data-augmentation", title: "Augmentation de Données", icon: Database },
  { id: "gan-architecture", title: "Architecture GAN", icon: Cpu },
  { id: "mathematics", title: "Fondements Mathématiques", icon: BarChart3 },
  { id: "validation", title: "Validation Automatique", icon: CheckCircle },
  { id: "applications", title: "Applications Industrielles", icon: Zap },
  { id: "roadmap", title: "Roadmap Technique", icon: GitBranch },
]
