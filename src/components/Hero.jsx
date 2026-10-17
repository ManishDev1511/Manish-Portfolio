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
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero({ onOpenResumeModal }) {
  const { personal, stats } = portfolioData;

  const techBadges = [
    { name: "C#", color: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30" },
    { name: "ASP.NET MVC", color: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30" },
    { name: "ASP.NET Web API", color: "from-teal-500/20 to-emerald-500/20 text-teal-300 border-teal-500/30" },
    { name: "SQL Server", color: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30" },
    { name: "Stored Procedures", color: "from-yellow-500/20 to-amber-500/20 text-yellow-300 border-yellow-500/30" },
    { name: "ADO.NET", color: "from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30" },
    { name: "eWay Bill & IRN", color: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30" },
    { name: "React.js (Learning)", color: "from-sky-500/10 to-cyan-500/10 text-sky-300 border-sky-400/40 border-dashed" },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-theme-bg">
      {/* Multi-color ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 -translate-y-1/2 w-[650px] h-[450px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Colorful Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-500/30 shadow-sm shadow-emerald-500/10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-300 font-bold">
                  Available for Senior .NET Roles
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-300 font-semibold">
                  Logistics &amp; Courier ERP
                </span>
              </div>
            </div>

            {/* Main Greeting & Name with Vibrant Gradient Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white mb-3">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Subtitle / Role with Gradient */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {personal.role}
              </span>{" "}
              <span className="text-theme-textSecondary font-light">|</span>{" "}
              <span className="text-white font-semibold text-lg sm:text-xl">
                C# &bull; ASP.NET MVC &bull; Web API &bull; SQL Server
              </span>
            </h2>

            {/* Pitch / Bio */}
            <p className="text-sm sm:text-base text-theme-textSecondary max-w-2xl mb-6 leading-relaxed">
              .NET Developer with <strong className="text-white font-bold bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20">3+ years</strong> of hands-on experience developing and maintaining high-performance web applications across courier, logistics, and ERP domains at <strong className="text-cyan-300">Sagar Informatic Pvt. Ltd. (March 2024–Present)</strong>. Specialized in high-throughput SQL stored procedures, Android-consumed REST APIs, and statutory tax compliance (eWay Bill &amp; IRN).
            </p>

            {/* Colorful Tech Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-gradient-to-r border shadow-sm ${badge.color} hover:scale-105 transition-transform`}
                >
                  {badge.name}
                </span>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* Primary Download CV Button with Rainbow Gradient */}
              <a
                href={personal.cvPath}
                download={personal.cvFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-extrabold text-black bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-xl shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              {/* Direct WhatsApp Chat Button */}
              <a
                href="https://wa.me/919451697870"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+91 9451697870)</span>
              </a>

              {/* View Full CV Modal */}
              <button
                onClick={onOpenResumeModal}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-theme-surface hover:bg-theme-surfaceElevated border border-cyan-500/40 hover:border-cyan-400 rounded-xl transition-all shadow-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View / Print CV</span>
              </button>
            </div>

            {/* Direct Channels Quick Bar */}
            <div className="flex items-center flex-wrap gap-2.5 text-xs font-semibold text-theme-textMuted pt-4 border-t border-theme-border/60 w-full">
              <span className="text-white font-bold">Direct Channels:</span>

              <a
                href={personal.phoneHref}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-500/20 transition-all"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.phoneDisplay}</span>
              </a>

              <a
                href={personal.emailHref}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.email}</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:text-white hover:bg-indigo-500/20 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                <span>LinkedIn</span>
              </a>

              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Prominent Photo with Multi-Color Glowing Gradient Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Vibrant Multi-Color Gradient Ring Container */}
              <div className="relative rounded-[28px] p-[3px] bg-gradient-to-tr from-teal-400 via-cyan-400 via-indigo-500 to-emerald-400 shadow-2xl shadow-cyan-500/20">
                <div className="relative rounded-[25px] overflow-hidden bg-theme-surface border border-theme-border/70">
                  {/* Photo of Manish Yadav */}
                  <div className="relative w-full h-[400px] sm:h-[450px]">
                    <Image
                      src={personal.avatarPath}
                      alt="Manish Yadav - .NET Developer"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Gradient Card Overlay at Bottom */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 pt-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-extrabold text-white flex items-center gap-2">
                          <span>{personal.name}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                        <div className="text-xs font-mono text-cyan-300 font-semibold">
                          .NET Developer &bull; Sagar Informatic Pvt. Ltd.
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute -top-3.5 -right-2 sm:-right-4 bg-gradient-to-r from-teal-900/90 to-cyan-900/90 backdrop-blur-md border border-cyan-400/50 rounded-xl px-3.5 py-1.5 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-extrabold text-cyan-200 font-mono">
                    .NET Specialist
                  </span>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-theme-surfaceElevated/95 backdrop-blur-md border border-emerald-500/40 rounded-xl p-3 shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-white">
                      3+ Years Experience
                    </div>
                    <div className="text-[10px] font-mono text-emerald-300">
                      Sagar Informatic Pvt. Ltd.
                    </div>
                  </div>
                </div>
              </div>

              {/* Colorful Stat Pills Under Photo */}
              <div className="flex items-center justify-center flex-wrap gap-2.5 mt-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-sm">
                  <Boxes className="w-3.5 h-3.5 text-cyan-400" />
                  <span>15+ Enterprise Projects</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 shadow-sm">
                  <Database className="w-3.5 h-3.5 text-amber-400" />
                  <span>SQL Server Stored Procs</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Multi-Color Stats Row */}
        <div className="mt-14 pt-8 border-t border-theme-border/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, sIdx) => {
              const borderColors = [
                "border-teal-500/40 hover:border-teal-400 bg-gradient-to-br from-teal-500/10 to-transparent",
                "border-cyan-500/40 hover:border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-transparent",
                "border-purple-500/40 hover:border-purple-400 bg-gradient-to-br from-purple-500/10 to-transparent",
                "border-amber-500/40 hover:border-amber-400 bg-gradient-to-br from-amber-500/10 to-transparent",
              ];
              const textColors = ["text-teal-300", "text-cyan-300", "text-purple-300", "text-amber-300"];

              return (
                <div
                  key={stat.label}
                  className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${borderColors[sIdx % borderColors.length]}`}
                >
                  <div className={`text-2xl sm:text-3xl font-black font-mono mb-1 ${textColors[sIdx % textColors.length]}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-theme-textMuted mt-0.5">
                    {stat.helper}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
