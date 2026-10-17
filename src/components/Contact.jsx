"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { MotionDiv } from "./MotionWrapper";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot
  });

  const [formLoadedAt, setFormLoadedAt] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    // Client-side quick checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({
        type: "error",
        message: "Please enter your name (at least 2 characters).",
      });
      setSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setSubmitting(false);
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus({
        type: "error",
        message: "Message must contain at least 10 characters.",
      });
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formLoadedAt,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message:
            result.message ||
            "Your message has been received! Manish will review your inquiry shortly.",
          simulated: result.simulated,
          mailtoFallback: result.mailtoFallback,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            result.error ||
            "Unable to submit message at this moment. Please use the direct email link below.",
          mailtoFallback: result.mailtoFallback || personal.emailHref,
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error or service unavailable. Please contact Manish directly at manish.sp2060@gmail.com.",
        mailtoFallback: personal.emailHref,
      });
    } finally {
      setSubmitting(false);
    }
  };

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
              <span>GET IN TOUCH</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
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

          {/* Right Column: Contact Form with Multi-Tone Accent */}
          <div className="lg:col-span-7">
            <MotionDiv delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-theme-border/80 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400" />

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-textSecondary mt-1">
                    Fill out the form below. Messages will be routed straight to Manish&apos;s verified inbox.
                  </p>
                </div>

                {status && (
                  <div
                    className={`p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-start gap-3 border ${
                      status.type === "success"
                        ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-200"
                        : "bg-rose-500/15 border-rose-500/40 text-rose-200"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold">{status.message}</p>
                      {status.mailtoFallback && (
                        <a
                          href={status.mailtoFallback}
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono underline font-bold"
                        >
                          <span>Open fallback email client</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot hidden input */}
                  <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-theme-bg border border-theme-border rounded-xl text-xs sm:text-sm text-white placeholder:text-theme-textMuted focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-theme-bg border border-theme-border rounded-xl text-xs sm:text-sm text-white placeholder:text-theme-textMuted focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Consultation"
                      className="w-full px-4 py-3 bg-theme-bg border border-theme-border rounded-xl text-xs sm:text-sm text-white placeholder:text-theme-textMuted focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-theme-textMuted mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message, role requirements, or project details..."
                      className="w-full px-4 py-3 bg-theme-bg border border-theme-border rounded-xl text-xs sm:text-sm text-white placeholder:text-theme-textMuted focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 resize-none shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-theme-bg bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 transition-all duration-300 shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-theme-bg border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-theme-bg group-hover:translate-x-0.5 transition-transform" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
