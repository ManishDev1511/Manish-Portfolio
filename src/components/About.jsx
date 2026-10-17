"use client";

import {
  CheckCircle2,
  Server,
  Database,
  FileCheck,
  Layers,
  Sparkles,
  BookOpen,
  Calendar,
  Truck,
  Network,
  ShieldCheck,
  TrendingUp,
  Flame,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { summary } = portfolioData;

  const quickStats = [
    {
      icon: Calendar,
      value: "3+",
      label: "Years Hands-on Experience",
      sub: "In .NET & SQL Server",
    },
    {
      icon: Truck,
      value: "15+",
      label: "Logistics & ERP Systems",
      sub: "High-volume workflows",
    },
    {
      icon: Network,
      value: "50+",
      label: "REST APIs Delivered",
      sub: "Android & 3rd-Party integrations",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Govt Compliance",
      sub: "NIC eWay Bill & GST IRN",
    },
  ];

  const pillars = [
    {
      icon: Server,
      title: "Enterprise Multi-Tier Architecture",
      description:
        "Structured systems cleanly dividing presentation, business rules, and high-performance data access layers in C# and ASP.NET MVC.",
    },
    {
      icon: Database,
      title: "High-Throughput SQL & Stored Procs",
      description:
        "Engineered transactional stored procedures, complex joins, views, and index tuning for high-volume shipment booking and financial ledger operations.",
    },
    {
      icon: FileCheck,
      title: "Govt Compliance & Statutory APIs",
      description:
        "Hands-on production integration with National Informatics Centre (NIC) eWay Bill APIs, GST Invoice Reference Number (IRN) generation, and KYC workflows.",
    },
    {
      icon: Layers,
      title: "Mobile App REST API Integration",
      description:
        "Designed and maintained resilient RESTful Web API endpoints consumed by Android mobile applications for field pickups, scans, and POD verification.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-theme-surfaceSubtle overflow-hidden">
      {/* Background crimson ambient spots */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-red-400" />
            <span>ABOUT MANISH YADAV</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Enterprise{" "}
            <span className="text-red-400">
              .NET Specialist
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 max-w-2xl">
            Passionate about engineering reliable, scalable, and secure backend solutions for high-volume logistics and ERP ecosystems.
          </p>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {quickStats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-theme-surface/90 border border-theme-border/80 hover:border-red-500/40 text-center transition-all duration-300 hover:scale-[1.02] shadow-lg group"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-white mb-1 group-hover:text-red-400 transition-colors">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {st.label}
                </div>
                <div className="text-[11px] text-zinc-400">{st.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-theme-surface border border-theme-border/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-600" />
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Driving Business Success with Clean Code &amp; Strong Data Flow
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 mb-4 leading-relaxed">
                I am a dedicated <strong className="text-white font-semibold bg-red-500/15 px-1.5 py-0.5 rounded border border-red-500/30">.NET Developer with 3+ years</strong> of hands-on experience developing and supporting web-based enterprise applications across courier, logistics, and ERP domains.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 mb-4 leading-relaxed">
                My day-to-day focus revolves around architecting robust business layers with <strong className="text-white font-semibold">C# and ASP.NET MVC / Web API</strong>, backed by high-performance <strong className="text-white font-semibold">Microsoft SQL Server</strong> stored procedures, and creating interactive user interfaces with <strong className="text-white font-semibold">jQuery, Bootstrap, and modern web standards</strong>.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                Currently at <span className="text-red-400 font-semibold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/25">Sagar Informatic Pvt. Ltd. (March 2024 – Present)</span>, I have extensive experience integrating government statutory APIs such as <strong className="text-white font-semibold">eWay Bill</strong> and <strong className="text-white font-semibold">IRN (E-Invoicing)</strong>, along with mobile-consumed RESTful endpoints for real-time parcel dispatch, barcode scanning, and Proof of Delivery (POD).
              </p>

              {/* Competencies Checklist */}
              <div className="pt-5 border-t border-theme-border/60">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3.5 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                  <span>Core Architectural Competencies:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {summary.details.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transparent Note on React */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3.5 shadow-md">
              <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex-shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200 mb-1">
                  Transparent Professional Scope &amp; Growth
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">Primary Commercial Expertise:</strong> C#, ASP.NET MVC, ASP.NET Web API, ADO.NET, and SQL Server (3+ Years).
                  <br />
                  <strong className="text-zinc-200">Frontend Familiarity:</strong> Proven commercial experience with jQuery, AJAX, HTML5, CSS3, and Bootstrap. <span className="text-red-400 font-medium">React.js is currently at a foundational level and actively being studied.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-theme-surface border border-theme-border/80 hover:border-red-500/40 transition-all duration-300 shadow-md group hover:translate-x-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 flex-shrink-0 transition-transform group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Education callout with refined badge */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3.5 shadow-md">
              <div className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-xs text-zinc-300">
                <span className="font-bold text-white">Continuous Academic Learning:</span> Master of Computer Applications (MCA) actively in progress at <span className="text-red-400 font-semibold">Chandigarh University</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
