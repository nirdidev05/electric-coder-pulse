"use client";

import React from "react";
import ReportLayout from "./ReportLayout";
import { useTranslation } from "@/hooks/useTranslation";

const Conclusion: React.FC = () => {
  const t = useTranslation();
  const c = t.Protein.conclusion;

  return (
    <ReportLayout
      title={c.title}
      subtitle={c.subtitle}
    >
      {/* Summary Intro */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8">
        <p className="text-lg">
          {c.summaryIntro}
        </p>
      </div>

      <div className="space-y-8">
        {/* Key Lessons */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            {c.keyLessons.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              {c.keyLessons.lessons.slice(0, 2).map(
                (
                  lesson: {
                    number: string;
                    title: string;
                    text: string;
                  },
                  i: number
                ) => {
                  const colorMap = ["bg-primary", "bg-secondary"];
                  const titleColor = [
                    "text-primary",
                    "text-secondary"
                  ];
                  return (
                    <div
                      key={lesson.number + lesson.title}
                      className="bg-card p-6 rounded-lg"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className={`w-6 h-6 ${
                            colorMap[i % colorMap.length]
                          } rounded-full flex items-center justify-center`}
                        >
                          <span className="text-white text-sm font-bold">
                            {lesson.number}
                          </span>
                        </div>
                        <h4
                          className={`font-semibold ${
                            titleColor[i % titleColor.length]
                          }`}
                        >
                          {lesson.title}
                        </h4>
                      </div>
                      <p className="text-sm">
                        {lesson.text}
                      </p>
                    </div>
                  );
                }
              )}
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              {c.keyLessons.lessons.slice(2, 4).map(
                (
                  lesson: {
                    number: string;
                    title: string;
                    text: string;
                  },
                  i: number
                ) => {
                  const colorMap = ["bg-accent", "bg-warning"];
                  const titleColor = ["text-accent", "text-warning"];
                  return (
                    <div
                      key={lesson.number + lesson.title}
                      className="bg-card p-6 rounded-lg"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className={`w-6 h-6 ${
                            colorMap[i % colorMap.length]
                          } rounded-full flex items-center justify-center`}
                        >
                          <span className="text-white text-sm font-bold">
                            {lesson.number}
                          </span>
                        </div>
                        <h4
                          className={`font-semibold ${
                            titleColor[i % titleColor.length]
                          }`}
                        >
                          {lesson.title}
                        </h4>
                      </div>
                      <p className="text-sm">{lesson.text}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Future Research Directions */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-secondary">
            {c.futureResearchDirections.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.futureResearchDirections.items.map(
              (item: { title: string; text: string }, i: number) => {
                const bgPalette = [
                  "from-primary/10 to-primary/5 text-primary",
                  "from-secondary/10 to-secondary/5 text-secondary",
                  "from-accent/10 to-accent/5 text-accent",
                  "from-warning/10 to-warning/5 text-warning",
                  "from-purple-500/10 to-purple-500/5 text-purple-600",
                  "from-green-500/10 to-green-500/5 text-green-600"
                ];
                return (
                  <div
                    key={item.title + i}
                    className={`bg-gradient-to-br ${bgPalette[i % bgPalette.length]} p-6 rounded-lg`}
                  >
                    <h4 className="font-semibold mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm">
                      {item.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Broader Impact */}
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-8 rounded-xl border-l-4 border-accent">
          <h3 className="text-2xl font-semibold mb-4 text-accent">
            {c.broaderImpact.title}
          </h3>
          <div className="space-y-4">
            <p>
              {c.broaderImpact.conclusionParagraph}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Immediate Applications */}
              <div>
                <h4 className="font-semibold mb-2">
                  {c.broaderImpact.immediateApplications.title}
                </h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  {c.broaderImpact.immediateApplications.items.map(
                    (app: string, i: number) => (
                      <li key={i}>{app}</li>
                    )
                  )}
                </ul>
              </div>

              {/* Long-term Vision */}
              <div>
                <h4 className="font-semibold mb-2">
                  {c.broaderImpact.longTermVision.title}
                </h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  {c.broaderImpact.longTermVision.items.map(
                    (v: string, i: number) => (
                      <li key={i}>{v}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
};

export default Conclusion;