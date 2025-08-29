"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const Dataset: React.FC = () => {
  const t = useTranslation();
  const ds = t.Protein.dataset;

  // Helper to safely parse percentage strings like "57.2%"
  const pctNum = (p: string) => {
    const n = parseFloat(p.replace("%", ""));
    return isNaN(n) ? 0 : n;
  };

  // For bar widths (kingdom & localization), scale by percent directly
  const maxKingdom = Math.max(...ds.kingdomDistribution.kingdoms.map(k => pctNum(k.percentage)), 1);

  return (
    <ReportLayout
      title={ds.title}
      subtitle={ds.subtitle}
    >
      {/* Overview */}
      <p>
        {ds.content.overview}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        {/* Basic Statistics */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{ds.basicStatistics.title}</h3>
          <ul className="list-disc list-inside space-y-3">
            {ds.basicStatistics.items.map((line: string, i: number) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Kingdom Distribution */}
        <div className="bg-card p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            {ds.kingdomDistribution.title}
          </h3>
          <div className="space-y-2">
            {ds.kingdomDistribution.kingdoms.map(
              (k: { name: string; percentage: string }, i: number) => {
                const w = (pctNum(k.percentage) / maxKingdom) * 100;
                // Assign a color class (rotate through a palette)
                const colorClasses = [
                  "bg-primary",
                  "bg-secondary",
                  "bg-accent",
                  "bg-warning",
                  "bg-destructive",
                  "bg-muted"
                ];
                const barColor = colorClasses[i % colorClasses.length];
                return (
                  <div
                    key={k.name + i}
                    className="flex justify-between items-center"
                  >
                    <span>{k.name}</span>
                    <div className="flex items-center space-x-2 min-w-[150px]">
                      <div className="w-24 bg-muted/20 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 ${barColor} rounded-full transition-all duration-500`}
                          style={{ width: `${w}%` }}
                        />
                      </div>
                      <span className="font-technical text-sm">
                        {k.percentage}
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Localization Distribution Table */}
      <div className="my-8">
        <h3 className="text-xl font-semibold mb-6">
          {ds.localizationDistribution.title}
        </h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/20">
                <th className="border border-border px-6 py-4 text-left font-semibold">
                  {ds.localizationDistribution.tableHeaders.localization}
                </th>
                <th className="border border-border px-6 py-4 text-left font-semibold">
                  {ds.localizationDistribution.tableHeaders.trainFraction}
                </th>
                <th className="border border-border px-6 py-4 text-left font-semibold">
                  {ds.localizationDistribution.tableHeaders.visualDistribution}
                </th>
              </tr>
            </thead>
            <tbody className="font-technical">
              {ds.localizationDistribution.classes.map(
                (c: { name: string; fraction: string }, i: number) => {
                  const width = c.fraction;
                  const zebra = i % 2 === 1 ? "bg-muted/5" : "";
                  const colorPalette = [
                    "bg-primary",
                    "bg-secondary",
                    "bg-accent",
                    "bg-warning",
                    "bg-secondary/70",
                    "bg-primary/70"
                  ];
                  const barColor = colorPalette[i % colorPalette.length];
                  return (
                    <tr
                      key={c.name + i}
                      className={`${zebra} hover:bg-muted/10 transition-colors`}
                    >
                      <td className="border border-border px-6 py-4">
                        {c.name}
                      </td>
                      <td className="border border-border px-6 py-4">
                        {c.fraction}
                      </td>
                      <td className="border border-border px-6 py-4">
                        <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 ${barColor} rounded-full transition-all duration-700`}
                            style={{ width }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Descriptive paragraphs (multi-label, exploratory imbalances, class imbalance / PCA) */}
      <div className="space-y-4">
        <p>
          <strong>{t.Protein.dataset.content.multiLabelNature.split(":")[0]}:</strong>{" "}
          {t.Protein.dataset.content.multiLabelNature.split(":").slice(1).join(":").trim() ||
            t.Protein.dataset.content.multiLabelNature}
        </p>

        <p>{t.Protein.dataset.content.exploratoryAnalysis}</p>

        <p>{t.Protein.dataset.content.classImbalance}</p>
      </div>
    </ReportLayout>
  );
};

export default Dataset;