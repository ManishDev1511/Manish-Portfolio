"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight, FileText, Phone, Mail, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-theme-bg/85 backdrop-blur-md border-b border-theme-border/60 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-teal rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-theme-teal shadow-md shadow-theme-teal/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <img
                src={portfolioData.personal.avatarPath}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-theme-textPrimary group-hover:text-theme-tealLight transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="block text-xs font-mono text-theme-textMuted -mt-0.5">
                .NET Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-theme-surface/60 border border-theme-border/60 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-theme-textSecondary hover:text-theme-tealLight rounded-full hover:bg-theme-teal/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-theme-textSecondary hover:text-theme-tealLight bg-theme-surface border border-theme-border rounded-lg hover:border-theme-teal/40 transition-colors"
              title="Preview CV in modal"
            >
              <FileText className="w-3.5 h-3.5 text-theme-teal" />
              <span>Preview CV</span>
            </button>

            <a
              href={portfolioData.personal.cvPath}
              download={portfolioData.personal.cvFileName}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-theme-bg bg-theme-teal hover:bg-theme-tealLight rounded-lg shadow-sm shadow-theme-teal/30 hover:shadow-theme-teal/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={portfolioData.personal.cvPath}
              download={portfolioData.personal.cvFileName}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-theme-bg bg-theme-teal rounded-md"
              aria-label="Download CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-theme-textSecondary hover:text-theme-textPrimary hover:bg-theme-surface border border-theme-border/60 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-theme-surface/95 border-b border-theme-border px-4 pt-3 pb-6 backdrop-blur-xl mt-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-theme-textSecondary hover:text-theme-tealLight hover:bg-theme-teal/10 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-theme-border flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal?.();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-theme-textPrimary bg-theme-surfaceElevated border border-theme-border rounded-lg"
              >
                <FileText className="w-4 h-4 text-theme-teal" />
                <span>Preview CV Modal</span>
              </button>

              <a
                href={portfolioData.personal.cvPath}
                download={portfolioData.personal.cvFileName}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-theme-bg bg-theme-teal hover:bg-theme-tealLight rounded-lg shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex items-center justify-center gap-4 pt-3 text-theme-textMuted text-xs">
                <a
                  href={portfolioData.personal.phoneHref}
                  className="hover:text-theme-tealLight inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call</span>
                </a>
                <span>•</span>
                <a
                  href={portfolioData.personal.emailHref}
                  className="hover:text-theme-tealLight inline-flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>Email</span>
                </a>
                <span>•</span>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-tealLight inline-flex items-center gap-1"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
