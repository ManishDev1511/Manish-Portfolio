"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  Download,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Sparkles,
  MapPin,
  Cpu,
  ShieldCheck,
  Database,
  Maximize2,
  X,
  Eye,
  Server,
  Layers,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { MotionDiv } from "./MotionWrapper";

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDiagramModalOpen, setIsDiagramModalOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // ignore
    }
  };

  const architecturePillars = [
    {
      icon: Layers,
      title: "API & Business Services Layer",
      desc: "Clean Architecture (DDD), ASP.NET Core Web API, JWT Authentication, Dependency Injection, and resilient business services.",
      color: "text-cyan-300",
      bg: "bg-cyan-500/15 border-cyan-500/30",
    },
    {
      icon: Database,
      title: "High-Throughput Data Persistence",
      desc: "Microsoft SQL Server primary transactional database, optimized stored procedures, views, indexing, and ACID guarantees.",
      color: "text-amber-300",
      bg: "bg-amber-500/15 border-amber-500/30",
    },
    {
      icon: ShieldCheck,
      title: "Statutory Compliance & Cloud Gateways",
      desc: "NIC Government eWay Bill API, GST IRN automated invoicing, Android mobile REST APIs, and third-party logistics integrations.",
      color: "text-emerald-300",
      bg: "bg-emerald-500/15 border-emerald-500/30",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-theme-bg overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <MotionDiv>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-3 shadow-sm shadow-emerald-500/10">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>GET IN TOUCH &amp; ARCHITECTURE VISION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Connect With{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Manish Yadav
              </span>
            </h2>
            <p className="mt-3 text-base text-theme-textSecondary max-w-3xl">
              Actively exploring technical opportunities, full-time senior .NET developer roles, and enterprise architecture consultations.
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Colorful Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Phone & WhatsApp Card */}
            <MotionDiv delay={0.1}>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-emerald-500/30 hover:border-emerald-400/60 shadow-xl shadow-emerald-500/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-300 font-bold block">
                        Direct Phone &amp; WhatsApp
                      </span>
                      <a
                        href={personal.phoneHref}
                        className="text-lg font-black text-white hover:text-emerald-300 transition-colors"
                      >
                        {personal.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-theme-border/60">
                  <a
                    href={personal.phoneHref}
                    className="flex-1 py-2 px-3 rounded-xl bg-theme-bg border border-theme-border text-center text-xs font-semibold text-white hover:border-teal-500/40 hover:text-teal-300 transition-colors"
                  >
                    Direct Call
                  </a>
                  <a
                    href="https://wa.me/919451697870"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center text-xs font-bold text-emerald-300 hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </MotionDiv>

            {/* Email Card with Copy Button */}
            <MotionDiv delay={0.2}>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-cyan-500/30 hover:border-cyan-400/60 shadow-xl shadow-cyan-500/10 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5 truncate">
                    <div className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-xs font-mono text-cyan-300 font-bold block">
                        Primary Email Address
                      </span>
                      <a
                        href={personal.emailHref}
                        className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy email address"
                    className="p-2.5 rounded-xl bg-theme-bg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all flex-shrink-0 ml-2"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </MotionDiv>

            {/* LinkedIn Card */}
            <MotionDiv delay={0.3}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-indigo-500/30 hover:border-indigo-400/60 shadow-xl shadow-indigo-500/10 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-indigo-300 font-bold block">
                      Professional LinkedIn Profile
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      linkedin.com/in/mr-dev123
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MotionDiv>

            {/* Location & Notice Period Card */}
            <MotionDiv delay={0.4}>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-theme-surface to-theme-surfaceElevated border border-purple-500/30 flex items-center gap-3.5 shadow-md">
                <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs text-theme-textSecondary">
                  <span className="font-bold text-white block">Location &amp; Availability:</span>
                  <span>Based in <strong className="text-purple-300">Noida / Delhi NCR, India</strong>. Actively open to immediate discussions.</span>
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Right Column: User Uploaded Architecture Vision Card */}
          <div className="lg:col-span-7 flex">
            <MotionDiv delay={0.2} className="w-full flex">
              <div className="w-full p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-teal-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                {/* Rainbow top line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 via-purple-400 to-amber-400" />

                <div>
                  {/* Top Status & Philosophy Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Future Ready &bull; Scalable &bull; Secure</span>
                    </div>

                    <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      Clean Architecture &bull; DDD
                    </span>
                  </div>

                  {/* Career Vision Headline */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                    Enterprise .NET{" "}
                    <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                      Architecture Vision
                    </span>
                  </h3>

                  {/* Inspiring Career Statement */}
                  <p className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed mb-5">
                    Designing multi-tiered enterprise software combining modern ASP.NET Core Web APIs, Domain-Driven Design (DDD), high-performance Microsoft SQL Server data persistence, and resilient third-party integrations.
                  </p>

                  {/* Visual Architecture Diagram with Interactive Zoom Trigger */}
                  <div
                    onClick={() => setIsDiagramModalOpen(true)}
                    className="relative w-full h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden border border-teal-500/40 mb-6 bg-slate-950 shadow-2xl cursor-pointer group/diag"
                    title="Click to view full architecture diagram"
                  >
                    <Image
                      src="/images/enterprise-dotnet-architecture.png"
                      alt="Enterprise .NET Architecture Vision Diagram"
                      fill
                      unoptimized
                      priority
                      className="object-contain p-1.5 transition-transform duration-500 group-hover/diag:scale-102"
                    />

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/diag:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-4 py-2 rounded-xl bg-theme-bg/95 border border-teal-400 text-teal-300 text-xs font-mono font-bold flex items-center gap-2 shadow-2xl">
                        <Maximize2 className="w-4 h-4" />
                        <span>Click to Enlarge Architecture Diagram</span>
                      </div>
                    </div>

                    {/* Bottom-right Tag */}
                    <div className="absolute bottom-2.5 right-3 bg-theme-bg/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-teal-500/40 text-[10px] font-mono text-teal-300 font-bold pointer-events-none">
                      ASP.NET Core &bull; SQL Server &bull; Web API
                    </div>
                  </div>

                  {/* 3 Core Architecture Pillars */}
                  <div className="space-y-2.5 mb-6">
                    {architecturePillars.map((cp) => {
                      const Icon = cp.icon;
                      return (
                        <div
                          key={cp.title}
                          className="p-3 rounded-xl bg-theme-bg/85 border border-theme-border/80 hover:border-teal-500/40 transition-colors flex items-start gap-3 group"
                        >
                          <div className={`p-2 rounded-lg border flex-shrink-0 transition-transform group-hover:scale-110 ${cp.bg} ${cp.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                              {cp.title}
                            </h4>
                            <p className="text-[11px] text-theme-textMuted leading-relaxed">
                              {cp.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 border-t border-theme-border/60 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-mono text-theme-textMuted">
                    <span>Ready for technical discussions &amp; interviews.</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setIsDiagramModalOpen(true)}
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Diagram</span>
                    </button>

                    <a
                      href={personal.cvPath}
                      download={personal.cvFileName}
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-black bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 hover:from-teal-300 hover:to-cyan-200 rounded-xl shadow-md shadow-teal-500/20 transition-all hover:scale-105 active:scale-95"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download CV</span>
                    </a>

                    <a
                      href="https://wa.me/919451697870"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-300 hover:text-white bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 rounded-xl transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Full-Screen Architecture Diagram Lightbox Modal */}
      {isDiagramModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsDiagramModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[94vh] bg-theme-surface border border-teal-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-theme-border bg-theme-surfaceElevated">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Enterprise .NET Architecture Vision</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">
                    Clean Architecture &bull; DDD
                  </span>
                </h3>
                <p className="text-xs font-mono text-cyan-300">
                  Scalable &bull; Secure &bull; Maintainable &bull; Future Ready
                </p>
              </div>

              <button
                onClick={() => setIsDiagramModalOpen(false)}
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
                src="/images/enterprise-dotnet-architecture.png"
                alt="Full Enterprise .NET Architecture Vision"
                className="w-full h-auto max-h-[82vh] object-contain rounded-lg border border-theme-border/60 shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
