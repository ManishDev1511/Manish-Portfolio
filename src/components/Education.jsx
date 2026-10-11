"use client";

import { GraduationCap, Award, Calendar, BookOpen, School } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { MotionDiv, MotionCard } from "./MotionWrapper";

export default function Education() {
  const { education } = portfolioData;

  const icons = [GraduationCap, Award, School];

  return (
    <section id="education" className="py-20 md:py-28 relative bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <MotionDiv>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-teal/10 border border-theme-teal/30 text-theme-tealLight text-xs font-mono font-medium mb-3">
              ACADEMIC BACKGROUND
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-textPrimary tracking-tight">
              Education & Qualifications
            </h2>
            <p className="mt-3 text-base text-theme-textSecondary max-w-3xl">
              Formal education combining technical computing diplomas and ongoing advanced post-graduate computer application studies.
            </p>
          </MotionDiv>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => {
            const Icon = icons[index] || GraduationCap;
            const isOngoing = item.status.toLowerCase().includes("pursuing");

            return (
              <MotionCard
                key={index}
                delay={0.1 * (index + 1)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all flex flex-col justify-between ${
                  isOngoing
                    ? "bg-theme-surface border-theme-teal/40 shadow-lg shadow-theme-teal/10"
                    : "bg-theme-surfaceSubtle border-theme-border hover:border-theme-borderLight"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`p-3 rounded-xl border ${
                        isOngoing
                          ? "bg-theme-teal/15 text-theme-tealLight border-theme-teal/30"
                          : "bg-theme-surfaceElevated text-theme-textMuted border-theme-border"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                        isOngoing
                          ? "bg-theme-teal/20 text-theme-tealLight border-theme-teal/40 font-semibold animate-pulse"
                          : "bg-theme-surface text-theme-textMuted border-theme-border"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-theme-textPrimary mb-2 leading-snug">
                    {item.degree}
                  </h3>

                  <div className="text-xs sm:text-sm font-medium text-theme-tealLight mb-3">
                    {item.institution}
                  </div>

                  <p className="text-xs text-theme-textSecondary leading-relaxed mb-6">
                    {item.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between text-xs font-mono text-theme-textMuted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-theme-teal" />
                    <span>{item.period}</span>
                  </span>
                </div>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
