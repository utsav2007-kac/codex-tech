"use client";

import React, { useState } from "react";
import DashboardShell from "@/components/DashboardShell";
import { useCandidateStore } from "@/lib/store";
import { CareerGoal } from "@/lib/types";
import {
  Compass,
  CheckCircle2,
  Circle,
  Clock,
  Plus,
  Target,
  Sparkles,
} from "lucide-react";

export default function CareerPlanPage() {
  const { goals, toggleGoalStatus, addGoal } = useCandidateStore();
  const [filter, setFilter] = useState<"all" | "in_progress" | "completed">("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<CareerGoal["category"]>("Applications");
  const [newDate, setNewDate] = useState("");

  const filteredGoals = goals.filter((g) => {
    if (filter === "all") return true;
    return g.status === filter;
  });

  const completedCount = goals.filter((g) => g.status === "completed").length;
  const progressPct = goals.length > 0 ? Math.round((completedCount / goals.length) * 100) : 0;

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addGoal({
      title: newTitle.trim(),
      category: newCategory,
      targetDate: newDate || new Date(Date.now() + 14 * 86400000).toISOString().split("T")[0],
      status: "in_progress",
    });
    setNewTitle("");
    setShowAddModal(false);
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header & Stats Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> 90-Day Placement Roadmap
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Career Sprint Milestones
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Step-by-step milestones curated to guarantee placement velocity and market visibility.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Add Sprint Milestone
            </button>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
              <span>Overall Roadmap Completion</span>
              <span className="text-blue-600">
                {completedCount} of {goals.length} Completed ({progressPct}%)
              </span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === "all"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            All Milestones ({goals.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("in_progress")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === "in_progress"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            In Progress ({goals.filter((g) => g.status === "in_progress").length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("completed")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === "completed"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Completed ({completedCount})
          </button>
        </div>

        {/* Milestones List */}
        <div className="space-y-3">
          {filteredGoals.map((goal) => {
            const isDone = goal.status === "completed";
            return (
              <div
                key={goal.id}
                onClick={() => toggleGoalStatus(goal.id)}
                className={`p-5 rounded-2xl border transition cursor-pointer flex items-start gap-4 ${
                  isDone
                    ? "bg-slate-50/70 border-slate-200 text-slate-500"
                    : "bg-white border-slate-200 hover:border-blue-300 shadow-xs text-slate-900"
                }`}
              >
                <button
                  type="button"
                  className="mt-0.5 text-slate-400 hover:text-blue-600 transition shrink-0"
                  aria-label={isDone ? "Mark incomplete" : "Mark complete"}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {goal.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Due {goal.targetDate}
                    </span>
                  </div>
                  <h3
                    className={`text-sm font-bold ${
                      isDone ? "line-through text-slate-400" : "text-slate-900"
                    }`}
                  >
                    {goal.title}
                  </h3>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    isDone ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {isDone ? "Completed" : "Active"}
                </span>
              </div>
            );
          })}
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600" /> New Sprint Milestone
                </h2>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddGoal} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Milestone Description</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Complete 5 LeetCode medium DP problems"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as CareerGoal["category"])}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white"
                    >
                      <option value="Branding">Branding</option>
                      <option value="Interviews">Interviews</option>
                      <option value="Applications">Applications</option>
                      <option value="Strategy">Strategy</option>
                      <option value="Skills">Skills</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Date</label>
                    <input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
                  >
                    Add Milestone
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
