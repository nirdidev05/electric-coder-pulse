"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const Discussion: React.FC = () => {
  const t = useTranslation();
  const d = t.Protein.discussion;

  return (
    <ReportLayout
      title={d.title}
      subtitle={d.subtitle}
    >
      {/* Intro paragraph */}
      <p>{d.introduction}</p>

      {/* Embedding & Feature Engineering Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        {/* ESM-1b Embedding Analysis */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            {d.esmEmbeddingAnalysis.title}
          </h3>
          <ul className="space-y-3 text-sm">
            {d.esmEmbeddingAnalysis.bullets.map((item: string, i: number) => (
              <li key={i} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Feature Engineering Impact */}
        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-secondary">
            {d.featureEngineeringImpact.title}
          </h3>
          <ul className="space-y-3 text-sm">
            {d.featureEngineeringImpact.bullets.map((item: string, i: number) => (
              <li key={i} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Multi-Label Strategy */}
      <div className="bg-card p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">
          {d.multiLabelStrategy.title}
        </h3>
        <p className="mb-4">{d.multiLabelStrategy.paragraph}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Why Multi-Label */}
          <div className="bg-accent/10 p-4 rounded-lg">
            <h4 className="font-semibold text-accent mb-2">
              {d.multiLabelStrategy.whyMultiLabel.title}
            </h4>
            <ul className="text-sm space-y-1">
              {d.multiLabelStrategy.whyMultiLabel.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

            {/* Technical Implementation */}
          <div className="bg-warning/10 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">
              {d.multiLabelStrategy.technicalImplementation.title}
            </h4>
            <ul className="text-sm space-y-1">
              {d.multiLabelStrategy.technicalImplementation.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Model Performance Analysis */}
      <div className="space-y-6">
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            {d.modelPerformanceAnalysis.title}
          </h3>
          <p className="mb-4">{d.modelPerformanceAnalysis.paragraph}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {d.modelPerformanceAnalysis.cards.map(
              (card: { title: string; text: string }, i: number) => {
                const bgPalette = [
                  "bg-secondary/10",
                  "bg-primary/10",
                  "bg-accent/10"
                ];
                const colorMap = [
                  "text-secondary",
                  "text-primary",
                  "text-accent"
                ];
                return (
                  <div
                    key={card.title + i}
                    className={`${bgPalette[i % bgPalette.length]} p-4 rounded-lg`}
                  >
                    <h4
                      className={`font-semibold mb-2 ${
                        colorMap[i % colorMap.length]
                      }`}
                    >
                      {card.title}
                    </h4>
                    <p className="text-sm">{card.text}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Limitations & Challenges */}
        <div className="bg-gradient-to-r from-destructive/10 to-warning/10 p-6 rounded-lg border-l-4 border-destructive">
          <h3 className="text-xl font-semibold mb-4">
            {d.limitationsAndChallenges.title}
          </h3>
          <div className="space-y-6">
            {/* Class Imbalance */}
            <div>
              <h4 className="font-semibold mb-2">
                {d.limitationsAndChallenges.classImbalance.title}
              </h4>
              <p className="text-sm mb-2">
                {d.limitationsAndChallenges.classImbalance.paragraph}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {d.limitationsAndChallenges.classImbalance.stats.map(
                  (s: string, i: number) => (
                    <div key={i} className="bg-card p-2 rounded">
                      <span className="font-semibold">
                        {s.split(":")[0]}:
                      </span>{" "}
                      {s.split(":").slice(1).join(":").trim()}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Kingdom-Specific Modeling */}
            <div>
              <h4 className="font-semibold mb-2">
                {d.limitationsAndChallenges.kingdomSpecificModeling.title}
              </h4>
              <p className="text-sm">
                {d.limitationsAndChallenges.kingdomSpecificModeling.paragraph}
              </p>
            </div>
          </div>
        </div>

        {/* Biological Significance */}
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            {d.biologicalSignificance.title}
          </h3>
          <div className="space-y-4">
            <p>{d.biologicalSignificance.intro}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.biologicalSignificance.points.map(
                (
                  point: { title: string; text: string },
                  i: number
                ) => (
                  <div key={point.title + i}>
                    <h4 className="font-semibold mb-2">
                      {point.title}
                    </h4>
                    <p className="text-sm">{point.text}</p>
                  </div>
                )
              )}
            </div>

            <div className="bg-card p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-primary">
                {d.biologicalSignificance.clinicalRelevance.title}
              </h4>
              <p className="text-sm">
                {d.biologicalSignificance.clinicalRelevance.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
};

export default Discussion;