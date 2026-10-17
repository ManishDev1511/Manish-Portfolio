"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight, FileText, Phone, Mail, Linkedin, MessageCircle } from "lucide-react";
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
          ? "bg-theme-bg/90 backdrop-blur-md border-b border-theme-border/80 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand with Colorful Avatar Ring */}
          <Link
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-teal rounded-xl p-1"
          >
            <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-teal-400 via-cyan-400 to-indigo-500 shadow-lg shadow-teal-500/25 group-hover:scale-105 transition-transform flex-shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-theme-surface">
                <img
                  src={portfolioData.personal.avatarPath}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-theme-bg" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {portfolioData.personal.name}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  .NET Dev
                </span>
              </div>
              <span className="block text-xs font-mono text-theme-textMuted -mt-0.5">
                Sagar Informatic Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-theme-surface/80 border border-theme-border/80 rounded-full px-4 py-1.5 backdrop-blur-xl shadow-lg shadow-black/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-theme-textSecondary hover:text-white rounded-full hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/919451697870"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all"
              title="Chat on WhatsApp (+91 9451697870)"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Preview CV Modal Trigger */}
            <button
              onClick={onOpenResumeModal}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-theme-textSecondary hover:text-white bg-theme-surface hover:bg-theme-surfaceElevated border border-theme-border rounded-lg transition-colors"
              title="Preview CV in modal"
            >
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              <span>Preview CV</span>
            </button>

            {/* Glowing Download CV Button */}
            <a
              href={portfolioData.personal.cvPath}
              download={portfolioData.personal.cvFileName}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-lg shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
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
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-black bg-gradient-to-r from-teal-400 to-cyan-400 rounded-md shadow-sm"
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
              className="p-2 rounded-lg text-theme-textSecondary hover:text-white hover:bg-theme-surface border border-theme-border transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-theme-surface/98 border-b border-theme-border px-4 pt-3 pb-6 backdrop-blur-2xl mt-2 shadow-2xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-theme-textSecondary hover:text-white hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-theme-border flex flex-col gap-2.5">
              <a
                href="https://wa.me/919451697870"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-emerald-600/30 border border-emerald-500/40 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+91 9451697870)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal?.();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-theme-surfaceElevated border border-theme-border rounded-xl"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Preview CV Modal</span>
              </button>

              <a
                href={portfolioData.personal.cvPath}
                download={portfolioData.personal.cvFileName}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400 rounded-xl shadow-lg shadow-teal-500/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex items-center justify-center gap-4 pt-3 text-theme-textMuted text-xs">
                <a
                  href={portfolioData.personal.phoneHref}
                  className="hover:text-teal-300 inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>Call</span>
                </a>
                <span>•</span>
                <a
                  href={portfolioData.personal.emailHref}
                  className="hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  <Mail className="w-3 h-3 text-cyan-400" />
                  <span>Email</span>
                </a>
                <span>•</span>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-300 inline-flex items-center gap-1"
                >
                  <Linkedin className="w-3 h-3 text-indigo-400" />
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
