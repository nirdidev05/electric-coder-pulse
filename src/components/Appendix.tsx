"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Updated Appendix component aligned with the new schema:
 * t.Protein.appendix = {
 *   title, subtitle,
 *   completePipelineImplementation: {
 *     title, intro,
 *     pipelineOverview: { title, metrics: [{ value, label }] },
 *     productionCodeSection: { title, meta: { author, date }, code }
 *   },
 *   architectureExplanation: {
 *     title,
 *     sections: [
 *       { title, paragraph, architectureLine? },
 *       { title, paragraph, modelConfigs? { lightgbm:[], xgboost:[], catboost:[] } },
 *       { title, paragraph, weights? { withCatBoost:[], withoutCatBoost:[] } },
 *       { title, paragraph, metricsTracked?:[] }
 *     ]
 *   },
 *   expectedOutput: {
 *     title,
 *     consoleOutputExampleTitle,
 *     consoleOutput,
 *     metrics: [{ value, labelTop, labelBottom }]
 *   }
 * }
 */
const Appendix: React.FC = () => {
  const t = useTranslation();
  const ap = t.Protein.appendix;

  const cpi = ap.completePipelineImplementation;
  const arch = ap.architectureExplanation;
  const expected = ap.expectedOutput;

  return (
    <ReportLayout title={ap.title} subtitle={ap.subtitle}>
      <div className="space-y-10">
        {/* Complete Pipeline Implementation */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border-l-4 border-primary">
          <h2 className="text-3xl font-semibold mb-6 text-primary">
            {cpi.title}
          </h2>
          <p className="text-lg leading-relaxed mb-6">{cpi.intro}</p>

          {/* Overview Metrics */}
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg mb-6 border border-border/20">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              {cpi.pipelineOverview.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cpi.pipelineOverview.metrics.map(
                (
                  m: { value: string; label: string },
                  i: number
                ) => {
                  const colors = [
                    "primary",
                    "secondary",
                    "accent",
                    "warning"
                  ];
                  const color = colors[i % colors.length];
                  return (
                    <div
                      key={i}
                      className={`bg-${color}/10 p-3 rounded-lg text-center`}
                    >
                      <div
                        className={`font-technical text-lg text-${color}`}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs">{m.label}</div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Code Section */}
          <div className="bg-muted/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">
                {cpi.productionCodeSection.title}
              </h4>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{cpi.productionCodeSection.meta.author}</span>
                <span>•</span>
                <span>{cpi.productionCodeSection.meta.date}</span>
              </div>
            </div>
            <div className="bg-card rounded-lg p-4 max-h-[800px] overflow-y-auto">
              <pre className="text-xs font-technical leading-relaxed whitespace-pre-wrap">
                {cpi.productionCodeSection.code}
              </pre>
            </div>
          </div>
        </section>

        {/* Architecture Explanation */}
        <section className="bg-card p-8 rounded-xl">
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {arch.title}
          </h2>
          <div className="space-y-8">
            {arch.sections.map(
              (
                section: any,
                i: number
              ) => {
                // Determine gradient / accent color heuristically
                const gradientClasses = [
                  "from-primary/10 to-primary/5",
                  "from-secondary/10 to-secondary/5",
                  "from-accent/10 to-accent/5",
                  "from-warning/10 to-warning/5"
                ];
                return (
                  <div
                    key={i}
                    className={`bg-gradient-to-r ${gradientClasses[i % gradientClasses.length]} p-6 rounded-lg`}
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      {section.title}
                    </h3>
                    <p className="text-sm mb-4">{section.paragraph}</p>

                    {section.architectureLine && (
                      <div className="bg-card/80 p-3 rounded text-xs font-technical">
                        <code>{section.architectureLine}</code>
                      </div>
                    )}

                    {section.modelConfigs && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries(section.modelConfigs).map(
                          ([modelName, lines]: [string, string[]]) => (
                            <div
                              key={modelName}
                              className="bg-card/80 p-3 rounded"
                            >
                              <h5 className="font-semibold text-xs mb-1 capitalize">
                                {modelName}
                              </h5>
                              <div className="text-xs font-technical space-y-1">
                                {lines.map((l, li) => (
                                  <div key={li}>{l}</div>
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {section.weights && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div className="bg-card/80 p-3 rounded">
                          <h5 className="font-semibold text-xs mb-2">
                            With CatBoost
                          </h5>
                          <div className="space-y-1 text-xs">
                            {section.weights.withCatBoost.map(
                              (w: string, wi: number) => (
                                <div key={wi}>{w}</div>
                              )
                            )}
                          </div>
                        </div>
                        <div className="bg-card/80 p-3 rounded">
                          <h5 className="font-semibold text-xs mb-2">
                            Without CatBoost
                          </h5>
                          <div className="space-y-1 text-xs">
                            {section.weights.withoutCatBoost.map(
                              (w: string, wi: number) => (
                                <div key={wi}>{w}</div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {section.metricsTracked && (
                      <div className="bg-card/80 p-4 rounded mt-4">
                        <h5 className="font-semibold text-xs mb-2">
                          Performance Metrics Tracked
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                          {section.metricsTracked.map(
                            (m: string, mi: number) => (
                              <div key={mi}>{m}</div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Expected Output */}
        <section className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">
            {expected.title}
          </h2>

          <div className="bg-card/50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-4">
              {expected.consoleOutputExampleTitle}
            </h4>
            <pre className="bg-muted/20 p-4 rounded text-xs font-technical overflow-x-auto whitespace-pre-wrap text-green-400">
              {expected.consoleOutput}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expected.metrics.map(
              (
                m: {
                  value: string;
                  labelTop: string;
                  labelBottom: string;
                },
                i: number
              ) => {
                const colorPalette = [
                  "green-600",
                  "blue-600",
                  "purple-600"
                ];
                const color = colorPalette[i % colorPalette.length];
                return (
                  <div
                    key={i}
                    className="bg-card/50 p-6 rounded-lg text-center"
                  >
                    <div
                      className={`text-3xl font-bold text-${color} mb-2`}
                    >
                      {m.value}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {m.labelTop}
                    </div>
                    <div className="text-xs">
                      {m.labelBottom}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
      </div>
    </ReportLayout>
  );
};

export default Appendix;