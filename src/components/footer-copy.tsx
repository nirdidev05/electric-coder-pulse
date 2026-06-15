"use client"
import { Brain, BookOpen, Code, FlaskConical } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation';

interface FooterProps {
  project?: "gan" | "pfas";
}

export function Footer({ project = "gan" }: FooterProps) {
  const t = useTranslation();
  const profileLine = "M1 en Informatique - Lyon 1 • Fraîchement diplômé Ingénieur d'État SI - ESI Alger";
  const isPFAS = project === "pfas";

  const footerContent = isPFAS
    ? {
        title: "PFAS Knowledge Graph",
        subtitle: "Environmental data engineering, Neo4j Property Graphs, and MCDA risk scoring for forever pollution tracking.",
        author: "Walid Benbouta · Rayane Melzi · Supervised by Prof. Angela Bonifati (LIRIS, Lyon 1)",
        documentation: "Rapport PFAS",
        sourceCode: "Source Code",
        Icon: FlaskConical,
      }
    : {
        title: t.gan.footer.title,
        subtitle: t.gan.footer.subtitle,
        author: t.gan.footer.author,
        documentation: t.gan.footer.documentation,
        sourceCode: t.gan.footer.sourceCode,
        Icon: Brain,
      };

  const FooterIcon = footerContent.Icon;

  const handleDocumentationDownload = () => {
    if (isPFAS) {
      const link = document.createElement("a")
      link.href = "/Rapport_PFAS_Knowledge_Graph.pdf"
      link.download = "Rapport_PFAS_Knowledge_Graph.pdf"
      link.click()
      return
    }

    const link1 = document.createElement("a")
    link1.href = "/TP_Echecs.pdf"
    link1.download = "TP_Echecs.pdf"
    const link2 = document.createElement("a")
    link2.href = "/Rapport_Technique_Global.pdf"
    link2.download = "Rapport_Technique_Global.pdf"
    link1.click()
    setTimeout(() => {
      link2.click()
    }, 200)
  }

  const handleCodeDownload = () => {
    if (isPFAS) {
      window.open("https://github.com/rayanMELZI/Conversion-de-donnees-PFAS-du-CNRS", "_blank", "noopener,noreferrer")
      return
    }

    const link = document.createElement("a")
    link.href = "/GAN_BENBOUTA_SIT2.ipynb"
    link.download = "ChessGAN_Notebook.ipynb"
    link.click()
  }

  return (
    <footer className="border-t py-8 mt-12 bg-background/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FooterIcon size={20} className="text-primary" />
              <span>{footerContent.title}</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              {footerContent.subtitle}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{footerContent.author}</p>
            <p className="text-xs text-primary/80 mt-1 font-medium">{profileLine}</p>
          </div>
          <div className="flex gap-4">
            <button
              className="text-sm flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
              onClick={handleDocumentationDownload}
            >
              <BookOpen size={16} />
              <span>{footerContent.documentation}</span>
            </button>
            <button
              className="text-sm flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors"
              onClick={handleCodeDownload}
            >
              <Code size={16} />
              <span>{footerContent.sourceCode}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}