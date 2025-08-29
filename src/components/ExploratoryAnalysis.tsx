"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const ExploratoryAnalysis: React.FC = () => {
  const t = useTranslation();
  const ea = t.Protein.exploratoryAnalysis;

  return (
    <ReportLayout
      title={ea.title}
      subtitle={ea.subtitle}
    >
      {/* Top two panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Kingdom-Class Imbalances */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            {ea.kingdomClassImbalances.title}
          </h3>
          <p className="text-sm leading-relaxed">
            {ea.kingdomClassImbalances.intro}
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
            {ea.kingdomClassImbalances.bullets.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Dimensionality Analysis */}
        <div className="bg-gradient-to-br from-accent/10 to-warning/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            {ea.dimensionalityAnalysis.title}
          </h3>
          <p className="text-sm leading-relaxed">
            {ea.dimensionalityAnalysis.intro}
          </p>
          <div className="mt-4 space-y-3">
            {ea.dimensionalityAnalysis.points.map((p: string, i: number) => {
              const dotColors = ["bg-accent", "bg-warning", "bg-secondary"];
              return (
                <div key={i} className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      dotColors[i % dotColors.length]
                    }`}
                  ></div>
                  <span className="text-sm">
                    {p.includes("536") ? (
                      <>
                        <code className="font-technical">
                          {p.split(" ")[0]}
                        </code>{" "}
                        {p.split(" ").slice(1).join(" ")}
                      </>
                    ) : p.includes("1280") ? (
                      <>
                        {p.split("1280")[0]}
                        <code className="font-technical">1280</code>
                        {p.split("1280")[1]}
                      </>
                    ) : (
                      p
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Class Imbalance Challenges */}
      <div className="bg-muted/10 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">
          {ea.classImbalanceChallenges.title}
        </h3>
        <p className="mb-4">{ea.classImbalanceChallenges.intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Largest Classes */}
          <div>
            <h4 className="font-semibold mb-3">
              {ea.classImbalanceChallenges.largestClasses.title}
            </h4>
            <div className="space-y-2">
              {ea.classImbalanceChallenges.largestClasses.classes.map(
                (
                  c: { name: string; fraction: string },
                  i: number
                ) => {
                  const colorClasses = [
                    "text-secondary",
                    "text-primary",
                    "text-accent"
                  ];
                  return (
                    <div
                      key={c.name + i}
                      className="flex justify-between items-center p-2 bg-card rounded"
                    >
                      <span>{c.name}</span>
                      <span
                        className={`font-technical ${
                          colorClasses[i % colorClasses.length]
                        }`}
                      >
                        {c.fraction}
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Smallest Classes */}
          <div>
            <h4 className="font-semibold mb-3">
              {ea.classImbalanceChallenges.smallestClasses.title}
            </h4>
            <div className="space-y-2">
              {ea.classImbalanceChallenges.smallestClasses.classes.map(
                (c: { name: string; fraction: string }, i: number) => (
                  <div
                    key={c.name + i}
                    className="flex justify-between items-center p-2 bg-destructive/10 rounded"
                  >
                    <span>{c.name}</span>
                    <span className="font-technical text-warning">
                      {c.fraction}
                    </span>
                  </div>
                )
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {ea.classImbalanceChallenges.smallestClasses.note}
            </p>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-card p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          {ea.keyInsights.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ea.keyInsights.cards.map(
            (c: { title: string; text: string }, i: number) => {
              const bgPalette = [
                "bg-primary/10",
                "bg-secondary/10",
                "bg-accent/10",
                "bg-warning/10",
                "bg-muted/10"
              ];
              const titleColor = [
                "text-primary",
                "text-secondary",
                "text-accent",
                "text-warning",
                "text-foreground"
              ];
              return (
                <div
                  key={c.title + i}
                  className={`${bgPalette[i % bgPalette.length]} p-4 rounded-lg`}
                >
                  <h4
                    className={`font-semibold mb-2 ${
                      titleColor[i % titleColor.length]
                    }`}
                  >
                    {c.title}
                  </h4>
                  <p className="text-sm">{c.text}</p>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Strategic Implications */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border-l-4 border-primary">
        <p className="text-sm font-medium">
          {ea.strategicImplications.text}
        </p>
      </div>
    </ReportLayout>
  );
};

export default ExploratoryAnalysis;