"use client";

import { useState } from "react";
import {
  Server,
  Database,
  Link2,
  Layout,
  Wrench,
  Search,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryConfigs = {
    backend: {
      icon: Server,
      color: "text-purple-300",
      accentBg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      barGradient: "from-purple-500 via-indigo-500 to-cyan-400",
      borderHover: "hover:border-purple-500/50",
      pillBorder: "border-purple-500/40",
      tagColor: "text-purple-300",
      glowColor: "shadow-purple-500/10",
    },
    database: {
      icon: Database,
      color: "text-amber-300",
      accentBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      barGradient: "from-amber-500 via-yellow-400 to-amber-300",
      borderHover: "hover:border-amber-500/50",
      pillBorder: "border-amber-500/40",
      tagColor: "text-amber-300",
      glowColor: "shadow-amber-500/10",
    },
    api: {
      icon: Link2,
      color: "text-emerald-300",
      accentBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      barGradient: "from-emerald-500 via-teal-400 to-cyan-400",
      borderHover: "hover:border-emerald-500/50",
      pillBorder: "border-emerald-500/40",
      tagColor: "text-emerald-300",
      glowColor: "shadow-emerald-500/10",
    },
    frontend: {
      icon: Layout,
      color: "text-cyan-300",
      accentBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
      barGradient: "from-cyan-500 via-blue-400 to-indigo-400",
      borderHover: "hover:border-cyan-500/50",
      pillBorder: "border-cyan-500/40",
      tagColor: "text-cyan-300",
      glowColor: "shadow-cyan-500/10",
    },
    tools: {
      icon: Wrench,
      color: "text-pink-300",
      accentBg: "bg-pink-500/15 text-pink-300 border-pink-500/30",
      barGradient: "from-pink-500 via-rose-400 to-purple-400",
      borderHover: "hover:border-pink-500/50",
      pillBorder: "border-pink-500/40",
      tagColor: "text-pink-300",
      glowColor: "shadow-pink-500/10",
    },
  };

  const filteredCategories = skillCategories
    .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filteredSkills = cat.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  const totalSkillsCount = skillCategories.reduce(
    (acc, c) => acc + c.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-theme-bg overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/15 via-teal-500/15 to-cyan-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold mb-3 shadow-sm shadow-purple-500/10">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Stack &amp;{" "}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="mt-3 text-base text-theme-textSecondary max-w-2xl">
            Categorized technical skills strictly verified against Manish Yadav&apos;s 3+ years of professional enterprise engineering.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              type="button"
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-theme-bg shadow-teal-500/25 scale-105"
                  : "bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-white hover:border-teal-500/40"
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {skillCategories.map((cat) => {
              const cfg = categoryConfigs[cat.id] || {
                icon: Code2,
                color: "text-teal-300",
              };
              const Icon = cfg.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-theme-bg shadow-teal-500/25 scale-105"
                      : "bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-white hover:border-teal-500/40"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-theme-bg" : cfg.color}`} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skill (e.g. C#, SQL, API)..."
              className="w-full pl-10 pr-3.5 py-2.5 bg-theme-surface border border-theme-border rounded-xl text-xs text-white placeholder:text-theme-textMuted focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 shadow-inner"
            />
          </div>
        </div>

        {/* Skill Groups */}
        <div className="space-y-8">
          {filteredCategories.map((category) => {
            const cfg = categoryConfigs[category.id] || {
              icon: Server,
              color: "text-teal-300",
              accentBg: "bg-teal-500/15 text-teal-300 border-teal-500/30",
              barGradient: "from-teal-500 to-cyan-400",
              borderHover: "hover:border-teal-500/40",
              tagColor: "text-teal-300",
            };
            const CategoryIcon = cfg.icon;

            return (
              <div
                key={category.id}
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-theme-surface to-theme-surfaceElevated border border-theme-border/80 ${cfg.borderHover} transition-all duration-300 shadow-xl relative overflow-hidden`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-theme-border/60">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-xl border ${cfg.accentBg} shadow-sm`}>
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                        <span>{category.title}</span>
                      </h3>
                      <p className="text-xs text-theme-textMuted mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-theme-textMuted hidden sm:inline-block px-3 py-1 rounded-full bg-theme-bg border border-theme-border">
                    {category.skills.length} competencies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => {
                    const isLearning = skill.level.toLowerCase().includes("learning");
                    const isExpert = skill.level.toLowerCase().includes("expertise");

                    return (
                      <div
                        key={skill.name}
                        className={`p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01] ${
                          isLearning
                            ? "bg-theme-bg/80 border-dashed border-amber-500/40 hover:border-amber-400"
                            : "bg-theme-bg/80 border-theme-border/80 hover:border-teal-500/40"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-sm font-bold text-white">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                              isExpert
                                ? "bg-teal-500/15 text-teal-300 border-teal-500/30 font-bold"
                                : isLearning
                                ? "bg-amber-500/15 text-amber-300 border-amber-500/30 font-bold"
                                : "bg-theme-surfaceElevated text-theme-textMuted border-theme-border"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <div className="text-xs text-theme-textMuted mb-2.5">
                          {skill.status}
                        </div>

                        {/* Visual Progress Bar with Multi-tone Gradient */}
                        <div className="w-full bg-theme-surfaceElevated rounded-full h-2 overflow-hidden border border-theme-border/50">
                          <div
                            className={`h-full rounded-full transition-all duration-700 bg-gradient-to-r ${
                              isLearning
                                ? "from-amber-500 to-yellow-400"
                                : cfg.barGradient
                            }`}
                            style={{ width: `${skill.percent || 85}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1.5 text-[10px] font-mono text-theme-textMuted">
                          <span>Proficiency Score</span>
                          <span className={isLearning ? "text-amber-300 font-bold" : `${cfg.tagColor} font-bold`}>
                            {skill.percent || 85}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
