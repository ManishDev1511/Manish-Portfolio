"use client";

import Image from "next/image";
import {
  Download,
  ArrowRight,
  Briefcase,
  Database,
  FileText,
  Phone,
  Mail,
  Linkedin,
  Github,
  Boxes,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Flame,
  GraduationCap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero({ onOpenResumeModal }) {
  const { personal, stats } = portfolioData;

  const techBadges = [
    { name: "C#", highlight: true },
    { name: "ASP.NET MVC", highlight: true },
    { name: "ASP.NET Web API", highlight: true },
    { name: "SQL Server", highlight: true },
    { name: "Stored Procedures", highlight: false },
    { name: "ADO.NET", highlight: false },
    { name: "eWay Bill & IRN", highlight: false },
    { name: "React.js (Learning)", highlight: false, dashed: true },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-theme-bg">
      {/* Subtle Crimson Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 -translate-y-1/2 w-[650px] h-[450px] bg-rose-950/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Professional Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 shadow-sm shadow-red-950/30">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono text-red-400 font-semibold tracking-wide">
                  Available for Senior .NET Roles
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800">
                <Flame className="w-3.5 h-3.5 text-red-400" />
                <span className="text-xs font-mono text-zinc-300 font-medium">
                  Logistics &amp; Courier ERP
                </span>
              </div>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white mb-3">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-rose-100 to-rose-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4">
              <span className="text-red-400">
                {personal.role}
              </span>{" "}
              <span className="text-zinc-600 font-light">|</span>{" "}
              <span className="text-zinc-200 font-semibold text-lg sm:text-xl">
                C# &bull; ASP.NET MVC &bull; Web API &bull; SQL Server
              </span>
            </h2>

            {/* Pitch / Bio */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mb-6 leading-relaxed">
              .NET Developer with <strong className="text-white font-bold bg-red-500/15 px-1.5 py-0.5 rounded border border-red-500/30">3+ years</strong> of hands-on experience developing and maintaining high-performance web applications across courier, logistics, and ERP domains at <strong className="text-white font-semibold">Sagar Informatic Pvt. Ltd. (March 2024–Present)</strong>. Specialized in high-throughput SQL stored procedures, Android-consumed REST APIs, and statutory tax compliance (eWay Bill &amp; IRN).
            </p>

            {/* Sleek Tech Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`px-3 py-1 text-xs font-mono font-medium rounded-lg transition-all ${
                    badge.highlight
                      ? "bg-zinc-900/90 text-white border border-red-500/30 hover:border-red-500/60 shadow-sm"
                      : badge.dashed
                      ? "bg-zinc-900/50 text-zinc-400 border border-zinc-800 border-dashed hover:text-zinc-200"
                      : "bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  {badge.name}
                </span>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* Executive Crimson Download CV Button */}
              <a
                href={personal.cvPath}
                download={personal.cvFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-lg shadow-red-950/60 hover:shadow-red-800/40 border border-red-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Verified CV</span>
              </a>

              {/* Direct WhatsApp Chat Button */}
              <a
                href="https://wa.me/919451697870"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-300 hover:text-white bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 rounded-xl shadow-md transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+91 9451697870)</span>
              </a>

              {/* View Full CV Modal */}
              <button
                onClick={onOpenResumeModal}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 hover:border-red-500/40 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-red-400" />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Direct Channels Strip */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-theme-border/60 text-xs font-mono text-theme-textSecondary w-full">
              <span className="text-theme-textMuted uppercase font-bold text-[11px]">Direct Channels:</span>

              <a
                href={personal.phoneHref}
                className="hover:text-red-400 flex items-center gap-1.5 transition-colors font-medium text-zinc-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>{personal.phoneDisplay}</span>
              </a>

              <a
                href={personal.emailHref}
                className="hover:text-red-400 flex items-center gap-1.5 transition-colors font-medium text-zinc-300 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>{personal.email}</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 flex items-center gap-1.5 transition-colors font-medium text-zinc-300 hover:text-white"
              >
                <Linkedin className="w-3.5 h-3.5 text-red-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Photo with Crimson Ring & Stat Floating Cards */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Subtle Crimson Ambient Pulse */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/20 via-rose-500/20 to-transparent blur-2xl animate-pulse" />
              <div className="absolute -inset-3 rounded-full border border-red-500/20 animate-spin" style={{ animationDuration: "35s" }} />

              {/* Main Photo Card Container */}
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-3xl p-[2px] bg-gradient-to-tr from-red-600 via-rose-500 to-red-400/40 shadow-2xl shadow-red-950/80 overflow-hidden">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-theme-surface relative">
                  <Image
                    src={personal.avatarPath}
                    alt={`${personal.name} - Senior .NET Developer`}
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, 380px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/95 via-transparent to-transparent opacity-60" />

                  {/* Name Banner at bottom of Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-theme-surface/90 backdrop-blur-md border border-white/[0.08] text-center">
                    <span className="font-extrabold text-sm text-white block">
                      {personal.name}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-300 font-medium">
                      .NET Developer &bull; Sagar Informatic Pvt. Ltd.
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Left) */}
              <div className="absolute -top-3 -left-3 sm:-left-6 p-3 sm:p-3.5 rounded-2xl bg-theme-surface/95 border border-white/[0.08] hover:border-red-500/40 backdrop-blur-xl shadow-xl shadow-black/60 flex items-center gap-3 animate-float transition-colors">
                <div className="p-2 sm:p-2.5 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">3+ Years</div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-mono">.NET Experience</div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Bottom Right) */}
              <div className="absolute -bottom-3 -right-3 sm:-right-6 p-3 sm:p-3.5 rounded-2xl bg-theme-surface/95 border border-white/[0.08] hover:border-red-500/40 backdrop-blur-xl shadow-xl shadow-black/60 flex items-center gap-3 animate-float transition-colors" style={{ animationDelay: "2s" }}>
                <div className="p-2 sm:p-2.5 rounded-xl bg-rose-500/15 text-rose-400 border border-rose-500/30">
                  <Database className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">SQL Server</div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-mono">Stored Procedures</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Highlights Stat Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 pt-10 border-t border-theme-border/60">
          {stats.map((item, index) => {
            const configs = [
              {
                icon: Briefcase,
                tag: "Experience",
              },
              {
                icon: Boxes,
                tag: "Production",
              },
              {
                icon: ShieldCheck,
                tag: "Verified",
              },
              {
                icon: GraduationCap,
                tag: "Academic",
              },
            ];
            const cfg = configs[index] || configs[0];
            const Icon = cfg.icon;

            return (
              <div
                key={item.label}
                className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#151620] via-[#101117] to-[#0A0B10] border border-white/[0.08] hover:border-red-500/50 transition-all duration-300 shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-red-950/40 group hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Subtle Shimmer / Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent group-hover:via-red-500 transition-all duration-500" />

                {/* Ambient Soft Red Corner Glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/25 transition-all duration-500 pointer-events-none" />

                {/* Card Top: Icon & Micro-Tag */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 group-hover:bg-red-500/20 group-hover:border-red-500/50 group-hover:scale-110 transition-all duration-300 shadow-sm shadow-red-950/40">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-zinc-400 uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] group-hover:border-red-500/30 group-hover:text-zinc-200 transition-colors">
                    {cfg.tag}
                  </span>
                </div>

                {/* Card Middle: Primary Value Metric & Label */}
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-rose-100 group-hover:to-red-400 transition-all duration-300">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-1.5 mb-0.5 group-hover:text-white transition-colors">
                    {item.label}
                  </div>
                </div>

                {/* Card Bottom: Helper Context with Ruby Pulse Dot */}
                <div className="relative z-10 mt-3.5 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 group-hover:scale-125 group-hover:bg-red-400 transition-all flex-shrink-0" />
                  <span className="truncate">{item.helper || item.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
