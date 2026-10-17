"use client";

import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight, Sparkles, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { MotionDiv } from "./MotionWrapper";

export default function Experience() {
  const { experience } = portfolioData;

  const techColors = [
    "from-purple-500/15 to-indigo-500/15 text-purple-300 border-purple-500/30",
    "from-cyan-500/15 to-blue-500/15 text-cyan-300 border-cyan-500/30",
    "from-teal-500/15 to-emerald-500/15 text-teal-300 border-teal-500/30",
    "from-amber-500/15 to-orange-500/15 text-amber-300 border-amber-500/30",
    "from-pink-500/15 to-rose-500/15 text-pink-300 border-pink-500/30",
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-theme-bg overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <MotionDiv>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-3 shadow-sm shadow-emerald-500/10">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Work{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="mt-3 text-base text-theme-textSecondary max-w-3xl">
              Professional enterprise development experience driving courier, freight, and supply-chain platforms at Sagar Informatic Pvt. Ltd.
            </p>
          </MotionDiv>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-gradient-to-b border-teal-500/40 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Pin Indicator with Vibrant Glow */}
              <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-theme-surface border-2 border-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/40">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <div className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>

              {/* Main Experience Card */}
              <MotionDiv delay={0.1}>
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-theme-border/80 shadow-xl hover:border-teal-400/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-theme-border/60">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold mb-2.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Current Role</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-teal-300 font-bold text-sm sm:text-base mt-1.5">
                        <Building2 className="w-4 h-4 text-teal-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-theme-textMuted gap-1.5">
                      <span className="inline-flex items-center gap-2 text-white font-semibold bg-theme-bg px-3.5 py-1.5 rounded-xl border border-teal-500/30 shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-teal-400" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-theme-textMuted">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-theme-textSecondary mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-3.5">
                      Core Responsibilities &amp; Technical Deliverables:
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Colorful Pills */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-3">
                      Technologies Applied:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIdx) => {
                        const colorClass = techColors[tIdx % techColors.length];
                        return (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-gradient-to-r border shadow-sm ${colorClass} hover:scale-105 transition-transform`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
