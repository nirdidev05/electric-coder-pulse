import { motion } from "framer-motion";
import { Cpu, Layers, Sparkles } from "lucide-react";
import { projectTechnologyProfiles, type ProjectTechnologyId } from "@/lib/project-technologies";

interface ProjectTechShowcaseProps {
  projectId: ProjectTechnologyId;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function ProjectTechShowcase({
  projectId,
  className = "",
  title = "Detailed Technology Stack",
  subtitle = "The most important technologies used in this project, grouped by role in the architecture."
}: ProjectTechShowcaseProps) {
  const profile = projectTechnologyProfiles[projectId];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4">
            <Cpu className="w-4 h-4" />
            Project Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {profile.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card rounded-xl p-6 border border-border shadow-lg hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{category.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    <Sparkles className="w-3 h-3 text-primary" />
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}