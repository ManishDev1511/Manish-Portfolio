"use client";

import Image from "next/image";
import { ArrowUp, Phone, Mail, Linkedin, Github, ShieldCheck, MessageCircle, Heart, Sparkles, Flame } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-theme-bg border-t border-theme-border/80 pt-16 pb-12 relative overflow-hidden">
      {/* Crimson gradient accent line at very top of footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 z-20" />

      {/* Cyber Mesh Wave Graphic Background - Subtle Dark Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/footer-bg.png"
            alt="Cyber Neon Footer Graphic"
            fill
            unoptimized
            quality={100}
            priority
            style={{ filter: "hue-rotate(180deg) saturate(130%) brightness(0.8)" }}
            className="object-cover object-bottom opacity-30 sm:opacity-40 select-none"
          />
          {/* Soft top gradient blend to transition smoothly from the Contact section */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-theme-bg via-theme-bg/60 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-theme-border/60">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center font-mono font-black text-white text-base shadow-md shadow-red-950/60">
                MY
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">
                  {personal.name}
                </span>
                <span className="text-xs font-mono text-red-400 font-medium">
                  {personal.role}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-sm leading-relaxed mb-4">
              Specialized in enterprise backend engineering, C#, ASP.NET MVC, Web API, and SQL Server for mission-critical logistics, courier networks, and ERP workflows.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-xs text-zinc-300 font-mono shadow-sm">
              <ShieldCheck className="w-4 h-4 text-red-400" />
              <span>Grounded in authentic 3+ years enterprise experience</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-4">
              Direct Contact &amp; Channels
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-zinc-500 block text-[11px] mb-0.5">Phone &amp; WhatsApp:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.phoneHref}
                    className="text-white hover:text-red-400 transition-colors inline-flex items-center gap-1.5 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-400" />
                    <span>{personal.phoneDisplay}</span>
                  </a>
                  <a
                    href="https://wa.me/919451697870"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded-md bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold hover:bg-emerald-600/30 transition-colors inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px] mb-0.5">Email:</span>
                <a
                  href={personal.emailHref}
                  className="text-white hover:text-red-400 transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  <span>{personal.email}</span>
                </a>
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px] mb-0.5">LinkedIn:</span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <Linkedin className="w-3.5 h-3.5 text-red-400" />
                  <span>linkedin.com/in/mr-dev123</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span>&copy; {new Date().getFullYear()} Manish Yadav. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-red-500/40 transition-all shadow-md cursor-pointer"
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
