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
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryIcons = {
    backend: Server,
    database: Database,
    api: Link2,
    frontend: Layout,
    tools: Wrench,
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

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-teal/15 border border-theme-teal/30 text-theme-tealLight text-xs font-mono font-semibold mb-3">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-textPrimary tracking-tight">
            Production Stack &amp; Capabilities
          </h2>
          <p className="mt-3 text-base text-theme-textSecondary max-w-2xl">
            Categorized technical skills strictly verified against Manish Yadav&apos;s 3+ years of professional engineering experience.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-theme-teal text-theme-bg shadow-md shadow-theme-teal/25"
                  : "bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-theme-tealLight hover:border-theme-teal/30"
              }`}
            >
              All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Code2;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-theme-teal text-theme-bg shadow-md shadow-theme-teal/25"
                      : "bg-theme-surface border border-theme-border text-theme-textSecondary hover:text-theme-tealLight hover:border-theme-teal/30"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-theme-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. C#, SQL, API)..."
              className="w-full pl-9 pr-3.5 py-2 bg-theme-surface border border-theme-border rounded-xl text-xs text-theme-textPrimary placeholder:text-theme-textMuted focus:outline-none focus:border-theme-teal focus:ring-1 focus:ring-theme-teal"
            />
          </div>
        </div>

        {/* Skill Groups */}
        <div className="space-y-8">
          {filteredCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.id] || Server;
            return (
              <div
                key={category.id}
                className="p-6 sm:p-8 rounded-2xl bg-theme-surface border border-theme-border shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-theme-border/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-theme-surfaceElevated border border-theme-border text-theme-tealLight">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-theme-textPrimary">
                        {category.title}
                      </h3>
                      <p className="text-xs text-theme-textMuted mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-theme-textMuted hidden sm:inline-block">
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
                        className={`p-4 rounded-xl border transition-all ${
                          isLearning
                            ? "bg-theme-bg border-dashed border-amber-500/40"
                            : "bg-theme-bg border-theme-border hover:border-theme-teal/40"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-sm font-bold text-theme-textPrimary">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                              isExpert
                                ? "bg-theme-teal/15 text-theme-tealLight border-theme-teal/30 font-semibold"
                                : isLearning
                                ? "bg-amber-500/15 text-amber-300 border-amber-500/30 font-semibold"
                                : "bg-theme-surfaceElevated text-theme-textMuted border-theme-border"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <div className="text-xs text-theme-textMuted mb-2.5">
                          {skill.status}
                        </div>

                        {/* Visual Progress Bar */}
                        <div className="w-full bg-theme-surfaceElevated rounded-full h-2 overflow-hidden border border-theme-border/50">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isLearning
                                ? "bg-gradient-to-r from-amber-500 to-amber-400"
                                : "bg-gradient-to-r from-theme-teal to-theme-tealLight"
                            }`}
                            style={{ width: `${skill.percent || 85}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1 text-[10px] font-mono text-theme-textMuted">
                          <span>Proficiency</span>
                          <span className={isLearning ? "text-amber-300" : "text-theme-tealLight"}>
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
