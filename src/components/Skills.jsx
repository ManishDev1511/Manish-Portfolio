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
  Flame,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryConfigs = {
    backend: {
      icon: Server,
      color: "text-red-400",
      accentBg: "bg-red-500/10 text-red-400 border-red-500/20",
      barGradient: "from-red-600 to-rose-500",
      borderHover: "hover:border-red-500/40",
      pillBorder: "border-red-500/30",
      tagColor: "text-red-400",
      glowColor: "shadow-red-950/20",
    },
    database: {
      icon: Database,
      color: "text-rose-400",
      accentBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      barGradient: "from-rose-600 to-red-500",
      borderHover: "hover:border-rose-500/40",
      pillBorder: "border-rose-500/30",
      tagColor: "text-rose-400",
      glowColor: "shadow-rose-950/20",
    },
    api: {
      icon: Link2,
      color: "text-red-400",
      accentBg: "bg-red-500/10 text-red-400 border-red-500/20",
      barGradient: "from-red-600 to-rose-500",
      borderHover: "hover:border-red-500/40",
      pillBorder: "border-red-500/30",
      tagColor: "text-red-400",
      glowColor: "shadow-red-950/20",
    },
    frontend: {
      icon: Layout,
      color: "text-rose-400",
      accentBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      barGradient: "from-rose-600 to-red-500",
      borderHover: "hover:border-rose-500/40",
      pillBorder: "border-rose-500/30",
      tagColor: "text-rose-400",
      glowColor: "shadow-rose-950/20",
    },
    tools: {
      icon: Wrench,
      color: "text-red-400",
      accentBg: "bg-red-500/10 text-red-400 border-red-500/20",
      barGradient: "from-red-600 to-rose-500",
      borderHover: "hover:border-red-500/40",
      pillBorder: "border-red-500/30",
      tagColor: "text-red-400",
      glowColor: "shadow-red-950/20",
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
      {/* Subtle crimson background ambient glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-red-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-[600px] h-[400px] bg-rose-950/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-red-400" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Stack &amp;{" "}
            <span className="text-red-400">
              Capabilities
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 max-w-2xl">
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
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-950/60"
                  : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {skillCategories.map((cat) => {
              const cfg = categoryConfigs[cat.id] || {
                icon: Code2,
                color: "text-red-400",
              };
              const Icon = cfg.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-950/60"
                      : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : cfg.color}`} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skill (e.g. C#, SQL, API)..."
              className="w-full pl-10 pr-3.5 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Skill Groups */}
        <div className="space-y-8">
          {filteredCategories.map((category) => {
            const cfg = categoryConfigs[category.id] || {
              icon: Server,
              color: "text-red-400",
              accentBg: "bg-red-500/10 text-red-400 border-red-500/20",
              barGradient: "from-red-600 to-rose-500",
              borderHover: "hover:border-red-500/40",
              tagColor: "text-red-400",
            };
            const CategoryIcon = cfg.icon;

            return (
              <div
                key={category.id}
                className="p-6 sm:p-8 rounded-2xl bg-theme-surface border border-theme-border/80 hover:border-red-500/40 transition-all duration-300 shadow-xl relative overflow-hidden"
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
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
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
                            ? "bg-zinc-900/60 border-dashed border-zinc-700 hover:border-zinc-500"
                            : "bg-zinc-900/50 border-zinc-800/80 hover:border-red-500/40"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-sm font-bold text-white">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                              isExpert
                                ? "bg-red-500/10 text-red-400 border-red-500/25 font-bold"
                                : isLearning
                                ? "bg-zinc-800 text-zinc-300 border-zinc-700"
                                : "bg-zinc-850 text-zinc-400 border-zinc-800"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <div className="text-xs text-zinc-400 mb-2.5">
                          {skill.status}
                        </div>

                        {/* Visual Progress Bar */}
                        <div className="w-full bg-zinc-800/80 rounded-full h-2 overflow-hidden border border-zinc-700/40">
                          <div
                            className={`h-full rounded-full transition-all duration-700 bg-gradient-to-r ${
                              isLearning
                                ? "from-zinc-500 to-zinc-400"
                                : cfg.barGradient
                            }`}
                            style={{ width: `${skill.percent || 85}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1.5 text-[10px] font-mono text-zinc-400">
                          <span>Proficiency Score</span>
                          <span className={isLearning ? "text-zinc-300 font-bold" : "text-red-400 font-bold"}>
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
