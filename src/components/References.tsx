"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";


const References: React.FC = () => {
  const t = useTranslation();
  const ref = t.Protein.references;

  return (
    <ReportLayout title={ref.title} subtitle={ref.subtitle}>
      {/* Introduction */}
      <p className="mb-8 text-lg">{ref.introduction}</p>

      <div className="space-y-8">
        {/* Core Publications */}
        <section className="bg-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            {ref.corePublications.title}
          </h3>
          <div className="space-y-4">
            {ref.corePublications.entries.map(
              (
                entry: { citation: string; keyContribution: string },
                i: number
              ) => (
                <div
                  key={i}
                  className="bg-muted/10 p-4 rounded-lg space-y-2"
                >
                  <p className="font-technical text-sm leading-relaxed">
                    {entry.citation}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {entry.keyContribution}
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Supporting Literature */}
        <section className="bg-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-6 text-secondary">
            {ref.supportingLiterature.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ML Methods */}
            <div>
              <h4 className="font-semibold mb-3">
                {ref.supportingLiterature.machineLearningMethods.title}
              </h4>
              <div className="space-y-3 text-sm">
                {ref.supportingLiterature.machineLearningMethods.entries.map(
                  (c: string, i: number) => (
                    <div
                      key={i}
                      className="bg-muted/10 p-3 rounded font-technical"
                    >
                      {c}
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Protein Bioinformatics */}
            <div>
              <h4 className="font-semibold mb-3">
                {ref.supportingLiterature.proteinBioinformatics.title}
              </h4>
              <div className="space-y-3 text-sm">
                {ref.supportingLiterature.proteinBioinformatics.entries.map(
                  (c: string, i: number) => (
                    <div
                      key={i}
                      className="bg-muted/10 p-3 rounded font-technical"
                    >
                      {c}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Methodological Foundations */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            {ref.methodologicalFoundations.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ref.methodologicalFoundations.items.map(
              (
                item: { title: string; text: string },
                i: number
              ) => {
                const color =
                  i === 0
                    ? "text-primary"
                    : i === 1
                    ? "text-secondary"
                    : "text-accent";
                return (
                  <div key={i} className="bg-card p-4 rounded-lg">
                    <h4 className={`font-semibold mb-2 ${color}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm">{item.text}</p>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Data Sources and Tools */}
        <section className="p-4 bg-gradient-to-r from-muted/10 to-card rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold mb-4">
            {ref.dataSourcesAndTools.title}
          </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-1">
              {ref.dataSourcesAndTools.leftColumn.map(
                (item: string, i: number) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
            <ul className="space-y-1">
              {ref.dataSourcesAndTools.rightColumn.map(
                (item: string, i: number) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
          </div>
        </section>
      </div>
    </ReportLayout>
  );
};

export default References;