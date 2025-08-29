"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const Results: React.FC = () => {
  const t = useTranslation();
  const r = t.Protein.results;

  const tableHeaders = r.cvSummary.table.headers;
  const tableRows = r.cvSummary.table.rows;

  const performanceIntro = r.performanceIntro;

  // Helper to wrap occurrences of ~x.xx ± y.yy inside code tags if desired
  const formatLogLossCell = (value: string) => (
    <code className="font-technical bg-muted/20 px-3 py-1 rounded">
      {value}
    </code>
  );

  // Simple heuristic for highlighting Ensemble row
  const isEnsemble = (modelName: string) =>
    modelName.toLowerCase().includes("ensemble");

  return (
    <ReportLayout title={r.title} subtitle={r.subtitle}>
      {/* Intro Paragraph */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8">
        <p className="text-lg">
          {performanceIntro.split("~0.94 (±0.02)").length === 2 ? (
            <>
              {performanceIntro.split("~0.94 (±0.02)")[0]}
              <strong className="text-primary">~0.94 (±0.02)</strong>
              {performanceIntro.split("~0.94 (±0.02)")[1]}
            </>
          ) : (
            performanceIntro
          )}
        </p>
      </div>

      {/* Cross-Validation Summary */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-6">
          {r.cvSummary.title}
        </h3>
        <p className="mb-6">{r.cvSummary.intro}</p>

        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-primary/20 to-secondary/20">
                <th className="border border-border px-6 py-4 text-left font-bold text-lg">
                  {tableHeaders.model}
                </th>
                <th className="border border-border px-6 py-4 text-left font-bold text-lg">
                  {tableHeaders.cvLogLoss}
                </th>
                <th className="border border-border px-6 py-4 text-left font-bold text-lg">
                  {tableHeaders.performanceRank}
                </th>
                <th className="border border-border px-6 py-4 text-left font-bold text-lg">
                  {tableHeaders.stability}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(
                (
                  row: {
                    model: string;
                    logLoss: string;
                    rank: string;
                    stability: string;
                  },
                  i: number
                ) => {
                  const zebra = i % 2 === 1 ? "bg-muted/5" : "";
                  const ensemble = isEnsemble(row.model);
                  return (
                    <tr
                      key={row.model + i}
                      className={`transition-colors ${
                        ensemble
                          ? "bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/15 hover:to-secondary/15 border-2 border-primary/30"
                          : "hover:bg-muted/10"
                      } ${zebra}`}
                    >
                      <td
                        className={`border border-border px-6 py-4 font-semibold ${
                          ensemble ? "text-primary font-bold" : ""
                        }`}
                      >
                        {row.model}
                      </td>
                      <td className="border border-border px-6 py-4">
                        {formatLogLossCell(row.logLoss)}
                      </td>
                      <td className="border border-border px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            ensemble
                              ? "bg-primary text-white font-bold"
                              : row.rank.includes("1")
                              ? "bg-primary/20 text-primary"
                              : row.rank.includes("2")
                              ? "bg-green-100 text-green-800"
                              : row.rank.includes("3")
                              ? "bg-blue-100 text-blue-800"
                              : row.rank.includes("4")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {row.rank}
                        </span>
                      </td>
                      <td className="border border-border px-6 py-4">
                        <div className="w-full bg-muted/20 rounded-full h-2">
                          {/* Basic bar width heuristic: shorter loss => wider bar */}
                          <div
                            className={`h-2 rounded-full ${
                              ensemble
                                ? "bg-primary"
                                : row.model.toLowerCase() === "catboost"
                                ? "bg-accent"
                                : row.model.toLowerCase() === "lightgbm"
                                ? "bg-secondary"
                                : row.model.toLowerCase() === "xgboost"
                                ? "bg-orange-400"
                                : "bg-yellow-400"
                            }`}
                            style={{
                              width: `${
                                20 +
                                Math.max(
                                  0,
                                  80 -
                                    (parseFloat(
                                      row.logLoss
                                        .replace("~", "")
                                        .split("±")[0]
                                        .trim()
                                    ) -
                                      0.94) *
                                      400
                                )
                              }%`
                            }}
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

      {/* Key Performance Insights & Competitive Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Key Performance Insights */}
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            {r.keyPerformanceInsights.title}
          </h3>
          <ul className="space-y-3 text-sm">
            {r.keyPerformanceInsights.bullets.map(
              (bullet: string, i: number) => {
                const colorDots = [
                  "bg-primary",
                  "bg-secondary",
                  "bg-accent",
                  "bg-warning"
                ];
                return (
                  <li
                    key={i}
                    className="flex items-start space-x-2"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        colorDots[i % colorDots.length]
                      }`}
                    />
                    <span>{bullet}</span>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        {/* Competitive Analysis */}
        <div className="bg-gradient-to-br from-accent/10 to-warning/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-accent">
            {r.competitiveAnalysis.title}
          </h3>
          <div className="space-y-4">
            {r.competitiveAnalysis.cards.map(
              (
                card: { title: string; text: string },
                i: number
              ) => {
                const dotColors = [
                  "bg-green-500",
                  "bg-blue-500",
                  "bg-purple-500"
                ];
                return (
                  <div
                    key={i}
                    className="bg-card p-4 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          dotColors[i % dotColors.length]
                        }`}
                      />
                      <span className="font-semibold">
                        {card.title}
                      </span>
                    </div>
                    <p className="text-sm">{card.text}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Statistical Significance */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-l-4 border-primary">
        <h3 className="text-lg font-semibold mb-3">
          {r.statisticalSignificance.title}
        </h3>
        <p className="text-sm leading-relaxed">
          {r.statisticalSignificance.text}
        </p>
      </div>
    </ReportLayout>
  );
};

export default Results;