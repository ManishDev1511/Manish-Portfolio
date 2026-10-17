"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink, FileText, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ResumeViewerModal({ isOpen, onClose }) {
  const { personal } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[90vh] bg-theme-surface border border-teal-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Rainbow top line */}
        <div className="h-1 bg-gradient-to-r from-teal-400 via-cyan-400 via-purple-400 to-amber-400" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-theme-border bg-theme-surfaceElevated">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-sm font-bold text-white flex items-center gap-2">
                <span>{personal.name} &mdash; Official Curriculum Vitae</span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-teal-500/15 text-teal-300 rounded border border-teal-500/30">
                  Verified Resume
                </span>
              </h3>
              <p className="text-[11px] font-mono text-cyan-300">
                {personal.cvFileName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-theme-textSecondary hover:text-white rounded-xl hover:bg-theme-surface border border-theme-border text-xs hidden sm:inline-flex items-center gap-1.5 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Tab</span>
            </a>

            <a
              href={personal.cvPath}
              download={personal.cvFileName}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-theme-bg bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-xl transition-all shadow-md shadow-teal-500/20"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="p-2 text-theme-textSecondary hover:text-white hover:bg-theme-surface rounded-xl transition-colors border border-theme-border"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF */}
        <div className="flex-1 bg-theme-bg relative">
          <iframe
            src={`${personal.cvPath}#toolbar=1&navpanes=0`}
            title="Resume Preview"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}
