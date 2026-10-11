"use client";

import { motion } from "framer-motion";

export function MotionDiv({ children, className = "", delay = 0, ...props }) {
  return (
    <div
      className={`transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function MotionFade({ children, className = "", delay = 0, ...props }) {
  return (
    <div className={`transition-opacity duration-300 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function MotionCard({ children, className = "", ...props }) {
  return (
    <div
      className={`transition-all duration-200 hover:-translate-y-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
