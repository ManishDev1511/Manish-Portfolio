"use client";

import { GraduationCap, Award, Calendar, BookOpen, School, Sparkles, Flame } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { MotionDiv, MotionCard } from "./MotionWrapper";

export default function Education() {
  const { education } = portfolioData;

  const cardConfigs = [
    {
      icon: GraduationCap,
      border: "border-theme-border/80 hover:border-red-500/40",
      accentBg: "bg-red-500/10 text-red-400 border-red-500/20",
      badgeClass: "bg-red-500/10 text-red-400 border-red-500/25 font-semibold animate-pulse",
      topBar: "bg-gradient-to-r from-red-600 to-rose-600",
      instColor: "text-red-400",
    },
    {
      icon: Award,
      border: "border-theme-border/80 hover:border-red-500/40",
      accentBg: "bg-red-500/10 text-red-400 border-red-500/20",
      badgeClass: "bg-zinc-800 text-zinc-300 border-zinc-700 font-medium",
      topBar: "bg-gradient-to-r from-red-600 to-rose-600",
      instColor: "text-zinc-300",
    },
    {
      icon: School,
      border: "border-theme-border/80 hover:border-red-500/40",
      accentBg: "bg-red-500/10 text-red-400 border-red-500/20",
      badgeClass: "bg-zinc-800 text-zinc-300 border-zinc-700 font-medium",
      topBar: "bg-gradient-to-r from-red-600 to-rose-600",
      instColor: "text-zinc-300",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 relative bg-theme-surfaceSubtle overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[350px] bg-red-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <MotionDiv>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono font-semibold mb-3">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Education &amp;{" "}
              <span className="text-red-400">
                Qualifications
              </span>
            </h2>
            <p className="mt-3 text-base text-zinc-300 max-w-3xl">
              Formal education combining technical computing diplomas and ongoing advanced post-graduate computer application studies.
            </p>
          </MotionDiv>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => {
            const cfg = cardConfigs[index] || cardConfigs[0];
            const Icon = cfg.icon;

            return (
              <MotionCard
                key={index}
                delay={0.1 * (index + 1)}
                className={`p-6 sm:p-7 rounded-2xl border ${cfg.border} bg-theme-surface shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${cfg.topBar}`} />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <div className={`p-3 rounded-xl border ${cfg.accentBg} transition-transform group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${cfg.badgeClass}`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    {item.degree}
                  </h3>

                  <div className={`text-xs sm:text-sm font-semibold mb-3 ${cfg.instColor}`}>
                    {item.institution}
                  </div>

                  <p className="text-xs text-theme-textSecondary leading-relaxed mb-6">
                    {item.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between text-xs font-mono text-theme-textMuted">
                  <span className="flex items-center gap-1.5 text-white">
                    <Calendar className="w-3.5 h-3.5 text-red-400" />
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
