"use client";

import { GraduationCap, Award, Calendar, BookOpen, School, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { MotionDiv, MotionCard } from "./MotionWrapper";

export default function Education() {
  const { education } = portfolioData;

  const cardConfigs = [
    {
      icon: GraduationCap,
      border: "border-purple-500/40 hover:border-purple-400",
      accentBg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      gradient: "from-purple-500/10 via-theme-surface to-theme-surfaceElevated",
      badgeClass: "bg-purple-500/20 text-purple-300 border-purple-500/40 font-bold animate-pulse shadow-sm shadow-purple-500/20",
      topBar: "bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400",
      iconColor: "text-purple-300",
      instColor: "text-purple-300",
    },
    {
      icon: Award,
      border: "border-teal-500/30 hover:border-teal-400",
      accentBg: "bg-teal-500/15 text-teal-300 border-teal-500/30",
      gradient: "from-teal-500/10 via-theme-surface to-theme-surfaceElevated",
      badgeClass: "bg-teal-500/15 text-teal-300 border-teal-500/30 font-semibold",
      topBar: "bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400",
      iconColor: "text-teal-300",
      instColor: "text-teal-300",
    },
    {
      icon: School,
      border: "border-amber-500/30 hover:border-amber-400",
      accentBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      gradient: "from-amber-500/10 via-theme-surface to-theme-surfaceElevated",
      badgeClass: "bg-amber-500/15 text-amber-300 border-amber-500/30 font-semibold",
      topBar: "bg-gradient-to-r from-amber-400 to-orange-400",
      iconColor: "text-amber-300",
      instColor: "text-amber-300",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 relative bg-theme-surfaceSubtle overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[350px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <MotionDiv>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/15 via-teal-500/15 to-cyan-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold mb-3 shadow-sm shadow-purple-500/10">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Education &amp;{" "}
              <span className="bg-gradient-to-r from-purple-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Qualifications
              </span>
            </h2>
            <p className="mt-3 text-base text-theme-textSecondary max-w-3xl">
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
                className={`p-6 sm:p-7 rounded-2xl border ${cfg.border} bg-gradient-to-b ${cfg.gradient} shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1`}
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
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
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
