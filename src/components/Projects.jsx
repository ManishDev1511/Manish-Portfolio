"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Boxes,
  Lock,
  Layers,
  ShieldCheck,
  Truck,
  FileSpreadsheet,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const { featuredProjects, additionalProjects } = portfolioData;
  const [filter, setFilter] = useState("all");
  const [showAdditional, setShowAdditional] = useState(false);

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "courier", label: "Courier & Logistics" },
    { id: "erp", label: "ERP & Finance" },
    { id: "transport", label: "Transport & Fleets" },
  ];

  const filteredProjects = featuredProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "courier") return p.id === "courier-mitra" || p.id === "yuantai-logistics";
    if (filter === "erp") return p.id === "gracious-logistics";
    if (filter === "transport") return p.id === "asian-roadways";
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-theme-surfaceSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-teal/15 border border-theme-teal/30 text-theme-tealLight text-xs font-mono font-semibold mb-3">
            ENTERPRISE PLATFORMS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-textPrimary tracking-tight">
            Featured Projects &amp; ERP Solutions
          </h2>
          <p className="mt-3 text-base text-theme-textSecondary max-w-2xl">
            Mission-critical courier management systems, logistics ERPs, and API gateways developed and supported in production.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {filterCategories.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                type="button"
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === f.id
                    ? "bg-theme-teal text-theme-bg shadow-md shadow-theme-teal/30 scale-105"
                    : "bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-theme-tealLight hover:border-theme-teal/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid with Full Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-theme-surface border border-theme-border/80 overflow-hidden hover:border-theme-teal/50 shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Project Visual Image Mockup */}
              <div className="relative w-full h-56 sm:h-64 bg-theme-bg border-b border-theme-border/60 overflow-hidden">
                <Image
                  src={proj.image}
                  alt={`${proj.title} System Dashboard`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-[11px] font-mono font-bold rounded-md bg-theme-bg/90 backdrop-blur-md text-theme-tealLight border border-theme-teal/40 shadow-sm">
                    {proj.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-theme-surfaceElevated/90 text-theme-textMuted border border-theme-border">
                    Project 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-theme-textPrimary mb-1.5 group-hover:text-theme-tealLight transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-theme-tealLight mb-4 font-semibold">
                    {proj.category}
                  </p>

                  <p className="text-xs sm:text-sm text-theme-textSecondary mb-5 leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Highlights List */}
                  <div className="mb-5">
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-2.5">
                      Key Highlights &amp; Features:
                    </h4>
                    <ul className="space-y-2">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs text-theme-textSecondary leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-theme-teal flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture Strip */}
                  <div className="p-3.5 rounded-xl bg-theme-bg border border-theme-border/60 mb-5 text-xs">
                    <div className="flex items-center gap-1.5 text-theme-tealLight font-mono font-bold text-[11px] mb-1.5">
                      <Cpu className="w-3.5 h-3.5 text-theme-teal" />
                      <span>Architecture Highlights:</span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-theme-textMuted">
                      {proj.architecture.map((a, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-theme-teal" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="pt-4 border-t border-theme-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-theme-surfaceElevated text-theme-tealLight border border-theme-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Enterprise Exposure Accordion */}
        <div className="rounded-2xl bg-theme-surface border border-theme-border p-6 sm:p-7 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-theme-textPrimary flex items-center gap-2">
                <span>Additional Enterprise Project Exposure</span>
                <span className="px-2.5 py-0.5 text-xs font-mono bg-theme-teal/15 text-theme-tealLight rounded-full border border-theme-teal/30">
                  {additionalProjects.length} Systems
                </span>
              </h3>
              <p className="text-xs text-theme-textMuted mt-1">
                Additional commercial platforms supported in logistics, GST compliance, universities, and supply chains.
              </p>
            </div>

            <button
              onClick={() => setShowAdditional(!showAdditional)}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-theme-textPrimary bg-theme-surfaceElevated border border-theme-border hover:border-theme-teal/40 rounded-xl transition-colors self-start sm:self-auto"
            >
              <span>{showAdditional ? "Hide Additional Systems" : "Show All Additional Systems"}</span>
              {showAdditional ? (
                <ChevronUp className="w-4 h-4 text-theme-teal" />
              ) : (
                <ChevronDown className="w-4 h-4 text-theme-teal" />
              )}
            </button>
          </div>

          {showAdditional && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-6 mt-6 border-t border-theme-border">
              {additionalProjects.map((p) => (
                <div
                  key={p.name}
                  className="p-4 rounded-xl bg-theme-bg border border-theme-border/70 hover:border-theme-teal/40 transition-all"
                >
                  <div className="font-bold text-sm text-theme-textPrimary mb-1">
                    {p.name}
                  </div>
                  <div className="text-xs text-theme-textMuted leading-relaxed">
                    {p.focus}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
