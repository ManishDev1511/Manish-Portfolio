"use client";

import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { MotionDiv } from "./MotionWrapper";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <MotionDiv>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-teal/10 border border-theme-teal/30 text-theme-tealLight text-xs font-mono font-medium mb-3">
              CAREER TIMELINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-textPrimary tracking-tight">
              Work Experience
            </h2>
            <p className="mt-3 text-base text-theme-textSecondary max-w-3xl">
              Professional enterprise development experience driving courier, freight, and supply-chain platforms.
            </p>
          </MotionDiv>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-theme-border/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-theme-surface border-2 border-theme-teal flex items-center justify-center shadow-md shadow-theme-teal/30">
                <div className="w-2 h-2 rounded-full bg-theme-tealLight animate-pulse" />
              </div>

              {/* Main Experience Card */}
              <MotionDiv delay={0.1}>
                <div className="p-6 sm:p-8 rounded-2xl bg-theme-surface border border-theme-border/80 shadow-md hover:border-theme-teal/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 mb-6 border-b border-theme-border/60">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-theme-teal/15 text-theme-tealLight border border-theme-teal/30 text-xs font-mono font-semibold mb-2">
                        <span>Current Role</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-theme-textPrimary">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-theme-tealLight font-medium text-sm sm:text-base mt-1">
                        <Briefcase className="w-4 h-4 text-theme-teal" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-theme-textMuted gap-1">
                      <span className="inline-flex items-center gap-1.5 text-theme-textSecondary bg-theme-surfaceElevated px-3 py-1 rounded-md border border-theme-border">
                        <Calendar className="w-3.5 h-3.5 text-theme-teal" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-theme-textMuted" />
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
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-theme-textMuted mb-3">
                      Core Responsibilities & Technical Deliverables:
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-theme-teal flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-theme-textMuted mb-2.5">
                      Technologies Applied:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-theme-surfaceElevated text-theme-tealLight border border-theme-border"
                        >
                          {tech}
                        </span>
                      ))}
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
