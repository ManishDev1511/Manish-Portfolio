"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[90vh] bg-theme-surface border border-theme-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-theme-border bg-theme-surfaceElevated">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-theme-teal/15 text-theme-tealLight">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-sm font-bold text-theme-textPrimary">
                {personal.name} &mdash; Official Curriculum Vitae
              </h3>
              <p className="text-[11px] font-mono text-theme-textMuted">
                {personal.cvFileName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-theme-textSecondary hover:text-theme-tealLight rounded-lg hover:bg-theme-surface border border-theme-border text-xs hidden sm:inline-flex items-center gap-1.5 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Tab</span>
            </a>

            <a
              href={personal.cvPath}
              download={personal.cvFileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-theme-bg bg-theme-teal hover:bg-theme-tealLight rounded-lg transition-all shadow-sm"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="p-2 text-theme-textSecondary hover:text-theme-textPrimary hover:bg-theme-surface rounded-lg transition-colors border border-theme-border"
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
