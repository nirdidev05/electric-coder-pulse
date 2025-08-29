"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const Abstract: React.FC = () => {
  const t = useTranslation();

  const { title, subtitle, content, statistics } = t.Protein.abstract;
  const localizationClassesList = content.localizationClasses.join(", ");

  return (
    <ReportLayout title={title} subtitle={subtitle}>
      <div className="bg-muted/10 p-6 rounded-lg border-l-4 border-primary">
        <p className="text-lg leading-relaxed">{content.introduction}</p>
      </div>

      <p className="mt-6">
        {content.problem} <strong>{localizationClassesList}</strong>.
      </p>

      <p className="mt-4">
        {content.approach}{" "}
        <code className="font-technical bg-muted/20 px-2 py-1 rounded">
          {content.performanceScore}
        </code>
        , {content.conclusion}
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary/10 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-primary">
            {statistics.proteinSequences.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {statistics.proteinSequences.label}
          </div>
        </div>
        <div className="bg-secondary/10 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-secondary">
            {statistics.localizationClasses.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {statistics.localizationClasses.label}
          </div>
        </div>
        <div className="bg-accent/10 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-accent">
            {statistics.logLossScore.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {statistics.logLossScore.label}
          </div>
        </div>
      </div>
    </ReportLayout>
  );
};

export default Abstract;