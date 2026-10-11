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
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero({ onOpenResumeModal }) {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-theme-bg">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-theme-teal/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme-border shadow-sm mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-theme-tealLight animate-pulse" />
              <span className="text-xs font-mono text-theme-tealLight font-semibold">
                Available for Opportunities &bull; .NET Specialist
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-theme-textPrimary mb-3">
              Hi, I&apos;m <span className="teal-gradient-text">{personal.name}</span>
            </h1>

            {/* Subtitle / Role */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-textSecondary mb-4">
              <span className="text-theme-tealLight">{personal.role}</span> | C# &bull; ASP.NET MVC &bull; Web API &bull; SQL Server
            </h2>

            {/* Pitch / Bio */}
            <p className="text-sm sm:text-base text-theme-textSecondary max-w-2xl mb-6 leading-relaxed">
              .NET Developer with <strong className="text-theme-textPrimary">3+ years</strong> of professional experience developing and maintaining high-performance web applications across courier, logistics, and ERP domains. Specialized in C#, ASP.NET MVC, Web API, and Microsoft SQL Server.
            </p>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["C#", "ASP.NET MVC", "ASP.NET Web API", "ADO.NET", "SQL Server", "Stored Procedures", "REST APIs", "eWay Bill & IRN"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-theme-surfaceElevated border border-theme-border text-theme-tealLight shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href={personal.cvPath}
                download={personal.cvFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-theme-bg bg-theme-teal hover:bg-theme-tealLight rounded-xl shadow-lg shadow-theme-teal/25 hover:shadow-theme-teal/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-theme-textPrimary bg-theme-surface hover:bg-theme-surfaceElevated border border-theme-border hover:border-theme-teal/40 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-theme-teal" />
                <span>View / Print CV</span>
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-theme-textSecondary hover:text-theme-tealLight hover:bg-theme-surface rounded-xl border border-transparent hover:border-theme-border transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Channels Quick Bar */}
            <div className="flex items-center flex-wrap gap-3.5 text-xs font-medium text-theme-textMuted pt-4 border-t border-theme-border/60 w-full">
              <span className="text-theme-textSecondary font-semibold">Direct Connect:</span>

              <a
                href={personal.phoneHref}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-theme-tealLight transition-colors"
                title="Call Manish Yadav"
              >
                <Phone className="w-3.5 h-3.5 text-theme-teal" />
                <span>{personal.phoneDisplay}</span>
              </a>

              <a
                href={personal.emailHref}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-theme-tealLight transition-colors"
                title="Email Manish Yadav"
              >
                <Mail className="w-3.5 h-3.5 text-theme-teal" />
                <span>{personal.email}</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-theme-tealLight transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-theme-teal" />
                <span>LinkedIn</span>
              </a>

              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-theme-tealLight transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-theme-teal" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Prominent Photo with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow container */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-theme-teal/40 via-theme-border to-theme-surface shadow-2xl">
                <div className="relative rounded-[22px] overflow-hidden bg-theme-surface border border-theme-border/70">
                  {/* Real Image of Manish Yadav */}
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

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-theme-bg via-theme-surface/90 to-transparent p-5 pt-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold text-theme-textPrimary">
                          {personal.name}
                        </div>
                        <div className="text-xs font-mono text-theme-tealLight">
                          .NET Developer &bull; Sagar Informatic
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-theme-teal/20 text-theme-tealLight border border-theme-teal/30">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute -top-3 -right-2 sm:-right-4 bg-theme-surfaceElevated/95 backdrop-blur-md border border-theme-teal/40 rounded-xl px-3.5 py-1.5 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-theme-tealLight animate-ping" />
                  <span className="text-xs font-bold text-theme-tealLight font-mono">
                    .NET Specialist
                  </span>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-theme-surfaceElevated/95 backdrop-blur-md border border-theme-teal/40 rounded-xl p-3 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-theme-teal/20 flex items-center justify-center text-theme-tealLight">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-theme-textPrimary">
                      3+ Years Experience
                    </div>
                    <div className="text-[10px] text-theme-textMuted">
                      Sagar Informatic Pvt. Ltd.
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stat Badges Under Photo */}
              <div className="flex items-center justify-center gap-2.5 mt-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-theme-surface border border-theme-border text-xs text-theme-textSecondary shadow-sm">
                  <Boxes className="w-3.5 h-3.5 text-theme-teal" />
                  <span>15+ Enterprise Projects</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-theme-surface border border-theme-border text-xs text-theme-textSecondary shadow-sm">
                  <Database className="w-3.5 h-3.5 text-amber-400" />
                  <span>SQL Server Expert</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Strip */}
        <div className="mt-14 pt-8 border-t border-theme-border/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-theme-surface border border-theme-border hover:border-theme-teal/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-theme-tealLight font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-theme-textPrimary">
                  {stat.label}
                </div>
                <div className="text-[11px] text-theme-textMuted mt-0.5">
                  {stat.helper}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
