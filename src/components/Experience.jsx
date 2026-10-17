"use client";

import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight, Sparkles, Building2, Flame } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { MotionDiv } from "./MotionWrapper";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-theme-bg overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-red-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <MotionDiv>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono font-semibold mb-3">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Work{" "}
              <span className="text-red-400">
                Experience
              </span>
            </h2>
            <p className="mt-3 text-base text-zinc-300 max-w-3xl">
              Professional enterprise development experience driving courier, freight, and supply-chain platforms at Sagar Informatic Pvt. Ltd.
            </p>
          </MotionDiv>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-red-500/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-theme-surface border-2 border-red-500 flex items-center justify-center shadow-lg shadow-red-950/60">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping opacity-75" />
                <div className="absolute w-2.5 h-2.5 rounded-full bg-red-500" />
              </div>

              {/* Main Experience Card */}
              <MotionDiv delay={0.1}>
                <div className="p-6 sm:p-8 rounded-2xl bg-theme-surface border border-theme-border/80 shadow-xl hover:border-red-500/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-600" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-theme-border/60">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/25 text-xs font-mono font-semibold mb-2.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span>Current Role</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-red-400 font-bold text-sm sm:text-base mt-1.5">
                        <Building2 className="w-4 h-4 text-red-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400 gap-1.5">
                      <span className="inline-flex items-center gap-2 text-zinc-200 font-medium bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-zinc-800">
                        <Calendar className="w-3.5 h-3.5 text-red-400" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-red-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3.5">
                      Core Responsibilities &amp; Technical Deliverables:
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
                      Technologies Applied:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => {
                        return (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-red-500/40 hover:text-white transition-colors"
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
