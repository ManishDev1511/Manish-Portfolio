"use client";

import { ArrowUp, Phone, Mail, Linkedin, Github, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-theme-bg border-t border-theme-border/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-theme-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-theme-border/60">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-theme-teal to-theme-tealDark flex items-center justify-center font-mono font-bold text-theme-bg text-sm">
                MY
              </div>
              <div>
                <span className="font-bold text-base text-theme-textPrimary block">
                  {personal.name}
                </span>
                <span className="text-xs font-mono text-theme-textMuted">
                  {personal.role}
                </span>
              </div>
            </div>

            <p className="text-xs text-theme-textSecondary max-w-sm leading-relaxed mb-4">
              Specialized in backend engineering, C#, ASP.NET MVC, Web API, and SQL Server for enterprise logistics and supply chain systems.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-surface border border-theme-border text-[11px] text-theme-textMuted font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-theme-teal" />
              <span>Grounded in authentic 3+ years enterprise experience</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-theme-tealLight mb-4">
              Sections
            </h4>
            <ul className="space-y-2 text-xs">
              {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-theme-textSecondary hover:text-theme-tealLight transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-theme-tealLight mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-theme-textMuted block text-[11px]">Phone:</span>
                <a
                  href={personal.phoneHref}
                  className="text-theme-textSecondary hover:text-theme-tealLight transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-theme-teal" />
                  <span>{personal.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-theme-textMuted block text-[11px]">Email:</span>
                <a
                  href={personal.emailHref}
                  className="text-theme-textSecondary hover:text-theme-tealLight transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-theme-teal" />
                  <span>{personal.email}</span>
                </a>
              </div>

              <div>
                <span className="text-theme-textMuted block text-[11px]">LinkedIn:</span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-textSecondary hover:text-theme-tealLight transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3 h-3 text-theme-teal" />
                  <span>linkedin.com/in/mr-dev123</span>
                </a>
              </div>

              {personal.github && (
                <div>
                  <span className="text-theme-textMuted block text-[11px]">GitHub:</span>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-textSecondary hover:text-theme-tealLight transition-colors inline-flex items-center gap-1.5"
                  >
                    <Github className="w-3 h-3 text-theme-teal" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-textMuted">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-theme-tealLight hover:border-theme-teal/40 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
