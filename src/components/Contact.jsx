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
  MessageSquare,
  Sparkles,
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
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '', mailtoFallback?: '' }

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
    <section id="contact" className="py-20 md:py-28 relative bg-theme-surfaceSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <MotionDiv>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-teal/10 border border-theme-teal/30 text-theme-tealLight text-xs font-mono font-medium mb-3">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-textPrimary tracking-tight">
              Connect With Manish Yadav
            </h2>
            <p className="mt-3 text-base text-theme-textSecondary max-w-3xl">
              Actively exploring technical opportunities, full-time senior .NET developer roles, and architecture consultations.
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Phone Card */}
            <MotionDiv delay={0.1}>
              <a
                href={personal.phoneHref}
                className="p-5 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-teal/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-theme-surfaceElevated border border-theme-border text-theme-teal group-hover:text-theme-tealLight transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-theme-textMuted block">
                      Direct Phone / WhatsApp
                    </span>
                    <span className="text-base font-bold text-theme-textPrimary group-hover:text-theme-tealLight transition-colors">
                      {personal.phoneDisplay}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-theme-textMuted group-hover:text-theme-tealLight transition-colors" />
              </a>
            </MotionDiv>

            {/* Email Card with Copy Button */}
            <MotionDiv delay={0.2}>
              <div className="p-5 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-between">
                <div className="flex items-center gap-4 truncate">
                  <div className="p-3 rounded-xl bg-theme-surfaceElevated border border-theme-border text-theme-teal flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-mono text-theme-textMuted block">
                      Primary Email
                    </span>
                    <a
                      href={personal.emailHref}
                      className="text-base font-bold text-theme-textPrimary hover:text-theme-tealLight transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email address"
                  className="p-2 rounded-lg bg-theme-surfaceElevated border border-theme-border text-theme-textSecondary hover:text-theme-tealLight transition-colors flex-shrink-0 ml-2"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-theme-teal" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </MotionDiv>

            {/* LinkedIn Card */}
            <MotionDiv delay={0.3}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-teal/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-theme-surfaceElevated border border-theme-border text-theme-teal group-hover:text-theme-tealLight transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-theme-textMuted block">
                      Professional Network
                    </span>
                    <span className="text-base font-bold text-theme-textPrimary group-hover:text-theme-tealLight transition-colors">
                      linkedin.com/in/mr-dev123
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-theme-textMuted group-hover:text-theme-tealLight transition-colors" />
              </a>
            </MotionDiv>

            {/* Configurable GitHub (only if non-empty URL provided) */}
            {personal.github ? (
              <MotionDiv delay={0.4}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-teal/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-theme-surfaceElevated border border-theme-border text-theme-teal group-hover:text-theme-tealLight transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-theme-textMuted block">
                        Version Control
                      </span>
                      <span className="text-base font-bold text-theme-textPrimary group-hover:text-theme-tealLight transition-colors">
                        GitHub Profile
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-theme-textMuted group-hover:text-theme-tealLight transition-colors" />
                </a>
              </MotionDiv>
            ) : null}

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-xl bg-theme-surfaceSubtle border border-theme-border/60 text-xs text-theme-textMuted flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-theme-teal flex-shrink-0" />
              <span>
                Standard response time: within 24 hours. Confidentiality assured for all recruiter & enterprise queries.
              </span>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <MotionDiv delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-theme-surface border border-theme-border shadow-xl">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-theme-border/60">
                  <MessageSquare className="w-4 h-4 text-theme-teal" />
                  <h3 className="text-base font-bold text-theme-textPrimary">
                    Send a Direct Inquiry
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot hidden input */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website (Leave blank)</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-theme-textSecondary mb-1.5"
                      >
                        Your Name <span className="text-theme-teal">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-theme-bg border border-theme-border rounded-xl text-sm text-theme-textPrimary placeholder:text-theme-textMuted focus:outline-none focus:border-theme-teal focus:ring-1 focus:ring-theme-teal transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-theme-textSecondary mb-1.5"
                      >
                        Your Email <span className="text-theme-teal">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-3.5 py-2.5 bg-theme-bg border border-theme-border rounded-xl text-sm text-theme-textPrimary placeholder:text-theme-textMuted focus:outline-none focus:border-theme-teal focus:ring-1 focus:ring-theme-teal transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono font-medium text-theme-textSecondary mb-1.5"
                    >
                      Subject / Company
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. .NET Developer Role / Interview Request"
                      className="w-full px-3.5 py-2.5 bg-theme-bg border border-theme-border rounded-xl text-sm text-theme-textPrimary placeholder:text-theme-textMuted focus:outline-none focus:border-theme-teal focus:ring-1 focus:ring-theme-teal transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-medium text-theme-textSecondary mb-1.5"
                    >
                      Message <span className="text-theme-teal">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your role, company requirements, or collaboration inquiry..."
                      className="w-full px-3.5 py-2.5 bg-theme-bg border border-theme-border rounded-xl text-sm text-theme-textPrimary placeholder:text-theme-textMuted focus:outline-none focus:border-theme-teal focus:ring-1 focus:ring-theme-teal transition-colors resize-y"
                    />
                  </div>

                  {/* Feedback status banner */}
                  {status && (
                    <div
                      className={`p-4 rounded-xl text-xs sm:text-sm flex flex-col gap-2 border ${
                        status.type === "success"
                          ? "bg-theme-teal/10 border-theme-teal/30 text-theme-tealLight"
                          : "bg-red-500/10 border-red-500/30 text-red-300"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        {status.type === "success" ? (
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-theme-teal" />
                        ) : (
                          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
                        )}
                        <span className="leading-relaxed">{status.message}</span>
                      </div>

                      {status.mailtoFallback && (
                        <div className="pt-2 border-t border-theme-border/40 flex items-center justify-between">
                          <span className="text-xs text-theme-textMuted">
                            Alternative direct fallback:
                          </span>
                          <a
                            href={status.mailtoFallback}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-theme-surface border border-theme-border text-xs font-medium text-theme-textPrimary hover:text-theme-tealLight transition-colors"
                          >
                            <span>Open Mail Client</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-theme-bg bg-theme-teal hover:bg-theme-tealLight disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-theme-teal/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-theme-bg border-t-transparent rounded-full animate-spin" />
                        <span>Validating & Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
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
