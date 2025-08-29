"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const FeatureEngineering: React.FC = () => {
  const t = useTranslation();
  const fe = t.Protein.featureEngineering;

  return (
    <ReportLayout
      title={fe.title}
      subtitle={fe.subtitle}
    >
      {/* Introduction Paragraph */}
      <p>{fe.introduction}</p>

      {/* Top Two Panels: ESM Embeddings & Final Feature Set */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        {/* ESM-1b Embeddings */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">
            {fe.esmEmbeddings.title}
          </h3>
          <div className="space-y-3">
            {fe.esmEmbeddings.bullets.map((b: string, i: number) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Feature Set */}
        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-secondary">
            {fe.finalFeatureSet.title}
          </h3>
          <div className="space-y-3">
            {fe.finalFeatureSet.rows.map(
              (
                row: { label: string; value: string },
                i: number
              ) => (
                <div
                  key={i}
                  className={`flex justify-between items-center ${
                    i === fe.finalFeatureSet.rows.length - 1
                      ? "font-semibold"
                      : ""
                  }`}
                >
                  <span>{row.label}</span>
                  <code
                    className={`font-technical px-2 py-1 rounded ${
                      i === fe.finalFeatureSet.rows.length - 1
                        ? "bg-secondary/20"
                        : "bg-card"
                    }`}
                  >
                    {row.value}
                  </code>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Sequence Features */}
      <div className="space-y-6">
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            {fe.sequenceFeatures.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mathematical Transformations */}
            <div>
              <h4 className="font-medium mb-3">
                {fe.sequenceFeatures.mathematicalTransformations.title}
              </h4>
              <div className="space-y-2 font-technical text-sm">
                {fe.sequenceFeatures.mathematicalTransformations.code.map(
                  (line: string, i: number) => (
                    <div key={i} className="bg-muted/10 p-2 rounded">
                      <code>{line}</code>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Categorical Flags */}
            <div>
              <h4 className="font-medium mb-3">
                {fe.sequenceFeatures.categoricalFlags.title}
              </h4>
              <div className="space-y-2 text-sm">
                {fe.sequenceFeatures.categoricalFlags.flags.map(
                  (flag: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-3 h-3 bg-accent rounded-full" />
                      <span>
                        <code className="font-technical">
                          {flag.split(" - ")[0]}
                        </code>{" "}
                        {flag.includes(" - ")
                          ? " - " + flag.split(" - ").slice(1).join(" - ")
                          : ""}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Kingdom Encoding */}
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            {fe.kingdomEncoding.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Categorical Encoding */}
            <div>
              <h4 className="font-medium mb-3">
                {fe.kingdomEncoding.categoricalEncoding.title}
              </h4>
              <p className="text-sm mb-3">
                {fe.kingdomEncoding.categoricalEncoding.text}
              </p>
              <div className="space-y-1 text-sm">
                {fe.kingdomEncoding.categoricalEncoding.mapping.map(
                  (m: { name: string; code: string }, i: number) => (
                    <div
                      key={i}
                      className="flex justify-between"
                    >
                      <span>{m.name}</span>
                      <code className="font-technical">{m.code}</code>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Interaction Features */}
            <div>
              <h4 className="font-medium mb-3">
                {fe.kingdomEncoding.interactionFeatures.title}
              </h4>
              <p className="text-sm mb-3">
                {fe.kingdomEncoding.interactionFeatures.text}
              </p>
              <div className="bg-muted/10 p-3 rounded font-technical text-sm">
                <code>{fe.kingdomEncoding.interactionFeatures.code}</code>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {fe.kingdomEncoding.interactionFeatures.note}
              </p>
            </div>
          </div>
        </div>

        {/* Embedding Statistics */}
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            {fe.embeddingStatistics.title}
          </h3>
          <p className="mb-4">{fe.embeddingStatistics.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {fe.embeddingStatistics.stats.map(
              (
                stat: { symbol: string; label: string },
                i: number
              ) => {
                const bgPalette = [
                  "bg-primary/10",
                  "bg-secondary/10",
                  "bg-accent/10",
                  "bg-warning/10",
                  "bg-muted/10"
                ];
                return (
                  <div
                    key={i}
                    className={`${bgPalette[i % bgPalette.length]} p-3 rounded text-center`}
                  >
                    <div className="font-technical text-lg">
                      {stat.symbol}
                    </div>
                    <div className="text-xs">
                      {stat.label}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            {fe.embeddingStatistics.note}
          </p>
        </div>
      </div>

      {/* Data Preprocessing Pipeline */}
      <div className="mt-8 bg-gradient-to-r from-muted/10 to-card p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          {fe.dataPreprocessingPipeline.title}
        </h3>
        <div className="space-y-4">
          {fe.dataPreprocessingPipeline.paragraphs.map(
            (p: string, i: number) => (
              <p key={i}>{p}</p>
            )
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fe.dataPreprocessingPipeline.models.map(
            (m: { title: string; text: string }, i: number) => {
              const bg = i % 2 === 0 ? "bg-primary/10" : "bg-secondary/10";
              const titleColor =
                i % 2 === 0 ? "text-primary" : "text-secondary";
              return (
                <div key={i} className={`${bg} p-4 rounded`}>
                  <h4 className={`font-semibold mb-2 ${titleColor}`}>
                    {m.title}
                  </h4>
                  <p className="text-sm">{m.text}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </ReportLayout>
  );
};

export default FeatureEngineering;