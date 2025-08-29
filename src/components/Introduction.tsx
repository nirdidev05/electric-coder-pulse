"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const Introduction: React.FC = () => {
  const t = useTranslation();

  const { title, subtitle, content, figure1, researchObjectives } =
    t.Protein.introduction;

  return (
    <ReportLayout title={title} subtitle={subtitle}>
      <p>{content.paragraph1}</p>
      <p className="mt-4">{content.paragraph2}</p>
      <p className="mt-4">{content.paragraph3}</p>

      <div className="my-8 bg-muted/10 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-primary">
          {figure1.title}
        </h3>
        <div className="bg-card p-6 rounded-lg border">
          <p className="text-center text-muted-foreground italic mb-4">
            {figure1.conceptualRepresentation}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            {figure1.compartments.map(
              (
                comp: { name: string; description: string },
                idx: number
              ) => {
                const colorClasses = [
                  "bg-primary/20",
                  "bg-secondary/20",
                  "bg-accent/20",
                  "bg-warning/20",
                  "bg-muted/40"
                ];
                return (
                  <div
                    key={idx}
                    className={`${colorClasses[idx] || "bg-muted/20"} p-3 rounded text-center`}
                  >
                    <div className="font-semibold">{comp.name}</div>
                    <div className="text-xs">{comp.description}</div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          <strong>{figure1.caption.prefix}</strong> {figure1.caption.text}
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">
          {researchObjectives.title}
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {researchObjectives.objectives.map((obj: string, i: number) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
    </ReportLayout>
  );
};

export default Introduction;