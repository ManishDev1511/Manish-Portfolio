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
      color: "text-theme-tealLight",
    },
    {
      icon: Truck,
      value: "15+",
      label: "Logistics & ERP Systems",
      sub: "High-volume workflows",
      color: "text-emerald-400",
    },
    {
      icon: Network,
      value: "50+",
      label: "REST APIs Delivered",
      sub: "Android & 3rd-Party integrations",
      color: "text-cyan-400",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Govt Compliance",
      sub: "NIC eWay Bill & GST IRN",
      color: "text-theme-teal",
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
    <section id="about" className="py-20 md:py-28 relative bg-theme-surfaceSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-teal/15 border border-theme-teal/30 text-theme-tealLight text-xs font-mono font-semibold mb-3">
            ABOUT MANISH YADAV
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-textPrimary tracking-tight">
            Enterprise .NET Specialist
          </h2>
          <p className="mt-3 text-base text-theme-textSecondary max-w-2xl">
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
                className="p-6 rounded-2xl bg-theme-surface border border-theme-border text-center hover:border-theme-teal/40 transition-colors shadow-md"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-theme-surfaceElevated border border-theme-border flex items-center justify-center text-theme-tealLight mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`text-3xl font-extrabold font-mono mb-1 ${st.color}`}>
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-theme-textPrimary mb-0.5">
                  {st.label}
                </div>
                <div className="text-[11px] text-theme-textMuted">{st.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-theme-surface border border-theme-border shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-theme-textPrimary mb-4">
                Driving Business Success with Clean Code
              </h3>
              <p className="text-sm sm:text-base text-theme-textSecondary mb-4 leading-relaxed">
                I am a dedicated <strong className="text-theme-textPrimary">.NET Developer with 3+ years</strong> of hands-on experience developing and supporting web-based enterprise applications across courier, logistics, and ERP domains.
              </p>
              <p className="text-sm sm:text-base text-theme-textSecondary mb-4 leading-relaxed">
                My day-to-day focus revolves around architecting robust business layers with <strong className="text-theme-textPrimary">C# and ASP.NET MVC / Web API</strong>, backed by high-performance <strong className="text-theme-textPrimary">Microsoft SQL Server</strong> stored procedures, and creating interactive user interfaces with <strong className="text-theme-textPrimary">jQuery, Bootstrap, and modern web standards</strong>.
              </p>
              <p className="text-sm sm:text-base text-theme-textSecondary leading-relaxed mb-6">
                Currently at <span className="text-theme-tealLight font-semibold">Sagar Informatic Pvt. Ltd. (March 2024 – Present)</span>, I have extensive experience integrating government statutory APIs such as <strong className="text-theme-textPrimary">eWay Bill</strong> and <strong className="text-theme-textPrimary">IRN (E-Invoicing)</strong>, along with mobile-consumed RESTful endpoints for real-time parcel dispatch, barcode scanning, and Proof of Delivery (POD).
              </p>

              {/* Competencies Checklist */}
              <div className="pt-4 border-t border-theme-border/60">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-3">
                  Core Architectural Competencies:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {summary.details.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-theme-textSecondary">
                      <CheckCircle2 className="w-4 h-4 text-theme-teal flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transparent Note on React */}
            <div className="p-5 rounded-xl bg-theme-surfaceElevated border border-theme-teal/30 flex items-start gap-3.5">
              <Sparkles className="w-5 h-5 text-theme-tealLight flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-tealLight mb-1">
                  Transparent Professional Scope
                </h4>
                <p className="text-xs text-theme-textSecondary leading-relaxed">
                  <strong className="text-theme-textPrimary">Primary Expertise:</strong> C#, ASP.NET MVC, ASP.NET Web API, ADO.NET, and SQL Server (3+ Years).
                  <br />
                  <strong className="text-theme-textPrimary">Frontend Familiarity:</strong> Proven commercial experience with jQuery, AJAX, HTML5, CSS3, and Bootstrap. <span className="text-theme-tealLight">React.js is currently at a foundational level and actively being studied.</span>
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
                  className="p-5 rounded-xl bg-theme-surface border border-theme-border hover:border-theme-teal/40 transition-all shadow-md group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-theme-surfaceElevated border border-theme-border text-theme-teal group-hover:text-theme-tealLight transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-theme-textPrimary mb-1 group-hover:text-theme-tealLight transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-theme-textMuted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Education callout */}
            <div className="p-4 rounded-xl bg-theme-surface border border-theme-border flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-theme-teal flex-shrink-0" />
              <div className="text-xs text-theme-textSecondary">
                <span className="font-semibold text-theme-textPrimary">Continuous Learning:</span> Master of Computer Applications (MCA) actively in progress at Chandigarh University.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
