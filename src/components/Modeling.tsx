"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const Modeling: React.FC = () => {
  const t = useTranslation();
  const m = t.Protein.modeling;

  return (
    <ReportLayout
      title={m.title}
      subtitle={m.subtitle}
    >
      {/* Framework Overview */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">
          {m.frameworkOverview.title}
        </h3>
        <p>{m.frameworkOverview.text}</p>
      </div>

      <div className="space-y-8">
        {/* DNN */}
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            {m.dnn.title}
          </h3>
          <p className="mb-6">
            {m.dnn.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Architecture */}
            <div>
              <h4 className="font-semibold mb-3">
                {m.dnn.architectureTitle}
              </h4>
              <div className="space-y-2 font-technical text-sm">
                {m.dnn.architecture.map(
                  (
                    layer: { layer: string; detail: string },
                    i: number
                  ) => {
                    const baseCls =
                      "p-3 rounded flex justify-between";
                    const styleMap: Record<string, string> = {
                      Input: "bg-primary/10",
                      BatchNorm: "bg-muted/10 text-center justify-center",
                      "Dense (ReLU)": "bg-primary/20",
                      "Output (Sigmoid)": "bg-primary/30 font-semibold"
                    };
                    const cls =
                      styleMap[layer.layer] ||
                      "bg-muted/10";
                    return (
                      <div
                        key={i}
                        className={`${cls} ${
                          layer.layer === "BatchNorm"
                            ? "text-center"
                            : ""
                        }`}
                      >
                        {layer.layer === "BatchNorm" ? (
                          <span>{layer.layer}</span>
                        ) : (
                          <>
                            <span>{layer.layer}</span>
                            <span>{layer.detail}</span>
                          </>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Training Config */}
            <div>
              <h4 className="font-semibold mb-3">
                {m.dnn.trainingConfigTitle}
              </h4>
              <div className="space-y-3">
                {m.dnn.trainingConfig.map(
                  (
                    item: { name: string; value: string },
                    i: number
                  ) => (
                    <div
                      key={i}
                      className="bg-muted/10 p-3 rounded"
                    >
                      <div className="font-semibold text-sm">
                        {item.name}
                      </div>
                      <div className="text-sm">
                        {item.value}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Boosting Models */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LightGBM */}
            <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              {m.lightgbm.title}
            </h3>
            <p className="text-sm mb-4">
              {m.lightgbm.description}
            </p>
            <div className="space-y-2 text-sm">
              {m.lightgbm.params.map(
                (
                  p: { name: string; value: string },
                  i: number
                ) => (
                  <div
                    key={i}
                    className="flex justify-between"
                  >
                    <span>{p.name}</span>
                    <code className="font-technical">
                      {p.value}
                    </code>
                  </div>
                )
              )}
            </div>
            {m.lightgbm.note && (
              <p className="text-xs text-muted-foreground mt-3">
                {m.lightgbm.note}
              </p>
            )}
          </div>

          {/* XGBoost */}
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-accent">
              {m.xgboost.title}
            </h3>
            <p className="text-sm mb-4">
              {m.xgboost.description}
            </p>
            <div className="space-y-2 text-sm">
              {m.xgboost.params.map(
                (
                  p: { name: string; value: string },
                  i: number
                ) => (
                  <div
                    key={i}
                    className="flex justify-between"
                  >
                    <span>{p.name}</span>
                    <code className="font-technical">
                      {p.value}
                    </code>
                  </div>
                )
              )}
            </div>
          </div>

          {/* CatBoost */}
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-warning">
              {m.catboost.title}
            </h3>
            <p className="text-sm mb-4">
              {m.catboost.description}
            </p>
            <div className="space-y-2 text-sm">
              {m.catboost.params.map(
                (
                  p: { name: string; value: string },
                  i: number
                ) => (
                  <div
                    key={i}
                    className="flex justify-between"
                  >
                    <span>{p.name}</span>
                    <code className="font-technical">
                      {p.value}
                    </code>
                  </div>
                )
              )}
            </div>
            {m.catboost.note && (
              <p className="text-xs text-muted-foreground mt-3">
                {m.catboost.note}
              </p>
            )}
          </div>
        </div>

        {/* Ensemble Strategy */}
        <div className="bg-gradient-to-r from-accent/10 to-warning/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            {m.ensembleStrategy.title}
          </h3>
          <p className="mb-4">
            {m.ensembleStrategy.description.split("[1e-7, 1-1e-7]").length === 2
              ? <>
                  {
                    m.ensembleStrategy.description.split(
                      "[1e-7, 1-1e-7]"
                    )[0]
                  }
                  <code className="font-technical bg-card px-2 py-1 rounded">
                    [1e-7, 1-1e-7]
                  </code>
                  {
                    m.ensembleStrategy.description.split(
                      "[1e-7, 1-1e-7]"
                    )[1]
                  }
                </>
              : m.ensembleStrategy.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weights */}
            <div>
              <h4 className="font-semibold mb-3">
                {m.ensembleStrategy.weightsTitle}
              </h4>
              <div className="space-y-2">
                {m.ensembleStrategy.weights.map(
                  (
                    w: { model: string; weight: string },
                    i: number
                  ) => {
                    const colorMap = [
                      "text-primary",
                      "text-secondary",
                      "text-accent",
                      "text-warning",
                      "text-foreground"
                    ];
                    return (
                      <div
                        key={i}
                        className="flex justify-between items-center p-2 bg-card rounded"
                      >
                        <span>{w.model}</span>
                        <span
                          className={`font-technical ${
                            colorMap[i % colorMap.length]
                          }`}
                        >
                          {w.weight}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Rationale */}
            <div>
              <h4 className="font-semibold mb-3">
                {m.ensembleStrategy.rationaleTitle}
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {m.ensembleStrategy.rationale.map(
                  (r: string, i: number) => (
                    <li key={i}>{r}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
};

export default Modeling;