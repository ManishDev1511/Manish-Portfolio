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
  Sparkles,
  ExternalLink,
  Maximize2,
  X,
  Eye,
  Check,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const { featuredProjects, additionalProjects } = portfolioData;
  const [filter, setFilter] = useState("all");
  const [showAdditional, setShowAdditional] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); // { src, title, category }

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "courier", label: "Courier & Logistics" },
    { id: "erp", label: "ERP & Finance" },
    { id: "transport", label: "Transport & Fleets" },
  ];

  const projectColorThemes = {
    "courier-mitra": {
      domainLabel: "app.couriermitra.com",
      accentText: "text-cyan-300",
      accentBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
      borderHover: "hover:border-cyan-400/60",
      glowColor: "shadow-cyan-500/10",
      badgeGradient: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/40",
      archBg: "bg-cyan-950/20 border-cyan-500/20 text-cyan-300",
    },
    "gracious-logistics": {
      domainLabel: "erp.graciouslogistics.com",
      accentText: "text-amber-300",
      accentBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      borderHover: "hover:border-amber-400/60",
      glowColor: "shadow-amber-500/10",
      badgeGradient: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/40",
      archBg: "bg-amber-950/20 border-amber-500/20 text-amber-300",
    },
    "asian-roadways": {
      domainLabel: "portal.asianroadways.com",
      accentText: "text-emerald-300",
      accentBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      borderHover: "hover:border-emerald-400/60",
      glowColor: "shadow-emerald-500/10",
      badgeGradient: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/40",
      archBg: "bg-emerald-950/20 border-emerald-500/20 text-emerald-300",
    },
    "yuantai-logistics": {
      domainLabel: "cargo.yuantailogistics.com",
      accentText: "text-purple-300",
      accentBg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      borderHover: "hover:border-purple-400/60",
      glowColor: "shadow-purple-500/10",
      badgeGradient: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/40",
      archBg: "bg-purple-950/20 border-purple-500/20 text-purple-300",
    },
  };

  const filteredProjects = featuredProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "courier") return p.id === "courier-mitra" || p.id === "yuantai-logistics";
    if (filter === "erp") return p.id === "gracious-logistics";
    if (filter === "transport") return p.id === "asian-roadways";
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-theme-surfaceSubtle overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-teal-500/15 via-cyan-500/15 to-purple-500/15 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold mb-3 shadow-sm shadow-teal-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE PLATFORMS &amp; LIVE SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects &amp;{" "}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              ERP Solutions
            </span>
          </h2>
          <p className="mt-3 text-base text-theme-textSecondary max-w-2xl">
            Live enterprise courier platforms, logistics ERPs, and statutory API systems engineered and maintained in production by Manish Yadav.
          </p>

          {/* Filter Pills with Colorful Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-7">
            {filterCategories.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  filter === f.id
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-theme-bg shadow-teal-500/25 scale-105"
                    : "bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-white hover:border-teal-500/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid with Real Production Screenshots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((proj, idx) => {
            const theme = projectColorThemes[proj.id] || {
              domainLabel: "enterprise.portal",
              accentText: "text-teal-300",
              accentBg: "bg-teal-500/15 text-teal-300 border-teal-500/30",
              borderHover: "hover:border-teal-400/60",
              glowColor: "shadow-teal-500/10",
              badgeGradient: "from-teal-500/20 to-cyan-500/20 text-teal-300 border-teal-500/40",
              archBg: "bg-teal-950/20 border-teal-500/20 text-teal-300",
            };

            return (
              <div
                key={proj.id}
                className={`rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-theme-border/80 overflow-hidden ${theme.borderHover} shadow-xl ${theme.glowColor} transition-all duration-300 flex flex-col group hover:-translate-y-1`}
              >
                {/* Browser-style Top Bar */}
                <div className="px-4 py-2 bg-theme-surfaceElevated border-b border-theme-border/70 flex items-center justify-between text-xs font-mono text-theme-textMuted">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[11px] text-theme-textMuted ml-2 font-mono">
                      https://{theme.domainLabel}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <Check className="w-3 h-3" />
                    <span>Live Production UI</span>
                  </span>
                </div>

                {/* Project Visual Image Screenshot with Zoom Trigger */}
                <div
                  onClick={() => setPreviewImage({ src: proj.image, title: proj.title, category: proj.category })}
                  className="relative w-full h-64 sm:h-72 lg:h-80 bg-slate-950 border-b border-theme-border/60 overflow-hidden cursor-pointer group/img"
                  title="Click to view full screenshot"
                >
                  <Image
                    src={proj.image}
                    alt={`${proj.title} System Live Screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-4 py-2 rounded-xl bg-theme-bg/90 border border-teal-500/40 text-teal-300 text-xs font-bold font-mono flex items-center gap-2 shadow-2xl">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to Enlarge Screenshot</span>
                    </div>
                  </div>

                  {/* Top-Left Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                    <span className={`px-3 py-1 text-xs font-mono font-bold rounded-lg bg-theme-bg/95 backdrop-blur-md border shadow-md ${theme.badgeGradient}`}>
                      {proj.category}
                    </span>
                  </div>

                  {/* Top-Right Project Number */}
                  <div className="absolute top-3.5 right-3.5 z-10 pointer-events-none">
                    <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-theme-surfaceElevated/95 backdrop-blur-md text-theme-textMuted border border-theme-border">
                      Project 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Project Title & Zoom Button */}
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div>
                        <h3 className={`text-xl sm:text-2xl font-black text-white transition-colors group-hover:${theme.accentText}`}>
                          {proj.title}
                        </h3>
                        <p className={`text-xs font-mono font-bold mt-0.5 mb-4 ${theme.accentText}`}>
                          {proj.category}
                        </p>
                      </div>
                      <button
                        onClick={() => setPreviewImage({ src: proj.image, title: proj.title, category: proj.category })}
                        type="button"
                        className="p-2 rounded-xl bg-theme-surfaceElevated border border-theme-border text-theme-textSecondary hover:text-white hover:border-teal-400 transition-colors flex-shrink-0"
                        title="View Full Screenshot"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-theme-textSecondary mb-5 leading-relaxed">
                      {proj.summary}
                    </p>

                    {/* Highlights List */}
                    <div className="mb-5">
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-2.5">
                        Key Engineering Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {proj.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs text-theme-textSecondary leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture Strip */}
                    <div className={`p-4 rounded-xl border mb-5 text-xs ${theme.archBg}`}>
                      <div className="flex items-center gap-1.5 font-mono font-bold text-xs mb-2">
                        <Cpu className="w-4 h-4" />
                        <span>Architecture &amp; Data Pipeline:</span>
                      </div>
                      <ul className="space-y-1.5 text-[11px] text-theme-textSecondary">
                        {proj.architecture.map((a, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-current mt-1.5 flex-shrink-0" />
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
                          className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-theme-surfaceElevated text-theme-textSecondary border border-theme-border/80 hover:text-white hover:border-teal-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Enterprise Exposure Accordion */}
        <div className="rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-theme-border/80 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5">
                <span>Additional Enterprise Project Exposure</span>
                <span className="px-3 py-0.5 text-xs font-mono font-bold bg-teal-500/15 text-teal-300 rounded-full border border-teal-500/30">
                  {additionalProjects.length} Systems
                </span>
              </h3>
              <p className="text-xs text-theme-textMuted mt-1">
                Additional commercial platforms supported across courier networks, statutory tax compliance, educational ERPs, and supply chains.
              </p>
            </div>

            <button
              onClick={() => setShowAdditional(!showAdditional)}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-theme-surfaceElevated border border-theme-border hover:border-teal-500/40 rounded-xl transition-all self-start sm:self-auto shadow-sm"
            >
              <span>{showAdditional ? "Hide Additional Systems" : "Show All Additional Systems"}</span>
              {showAdditional ? (
                <ChevronUp className="w-4 h-4 text-teal-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-teal-400" />
              )}
            </button>
          </div>

          {showAdditional && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-6 mt-6 border-t border-theme-border/60">
              {additionalProjects.map((p, pIdx) => {
                const borderColors = [
                  "hover:border-teal-400/50",
                  "hover:border-cyan-400/50",
                  "hover:border-purple-400/50",
                  "hover:border-amber-400/50",
                ];
                const activeHover = borderColors[pIdx % borderColors.length];

                return (
                  <div
                    key={p.name}
                    className={`p-4 rounded-xl bg-theme-bg/90 border border-theme-border/70 ${activeHover} transition-all duration-200 hover:scale-[1.01]`}
                  >
                    <div className="font-bold text-sm text-white mb-1">
                      {p.name}
                    </div>
                    <div className="text-xs text-theme-textMuted leading-relaxed">
                      {p.focus}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Full-Screen Screenshot Lightbox Modal */}
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[92vh] bg-theme-surface border border-teal-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-theme-border bg-theme-surfaceElevated">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>{previewImage.title}</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Verified Production UI
                  </span>
                </h3>
                <p className="text-xs font-mono text-cyan-300">
                  {previewImage.category}
                </p>
              </div>

              <button
                onClick={() => setPreviewImage(null)}
                type="button"
                className="p-2 text-theme-textSecondary hover:text-white hover:bg-theme-surface rounded-xl transition-colors border border-theme-border"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body with high-resolution scroll */}
            <div className="flex-1 overflow-auto bg-slate-950 p-2 sm:p-4 flex items-center justify-center">
              <img
                src={previewImage.src}
                alt={`${previewImage.title} Full Screenshot`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg border border-theme-border/60 shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
