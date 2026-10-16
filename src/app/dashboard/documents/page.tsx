"use client";

import React, { useState } from "react";
import DashboardShell from "@/components/DashboardShell";
import { useCandidateStore } from "@/lib/store";
import { UserDocument } from "@/lib/types";
import {
  FileText,
  UploadCloud,
  Trash2,
  FileCheck,
  Plus,
  Copy,
  Check,
} from "lucide-react";

export default function DocumentsPage() {
  const { documents, addDocument, deleteDocument } = useCandidateStore();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [docName, setDocName] = useState("");
  const [docCategory, setDocCategory] = useState<UserDocument["category"]>("Resume");
  const [docSnippet, setDocSnippet] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docName.trim()) return;

    addDocument({
      name: docName.trim(),
      category: docCategory,
      fileType: "application/pdf",
      sizeBytes: Math.floor(Math.random() * 80000) + 40000,
      contentSnippet: docSnippet.trim() || "Uploaded candidate career artifact.",
    });

    setDocName("");
    setDocSnippet("");
    setShowUploadModal(false);
  };

  const handleCopy = (id: string, text?: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Candidate Document Vault
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Securely store your ATS-optimized resumes, cover letter templates, and interview prep storybanks.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowUploadModal(true)}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" /> Upload Document
          </button>
        </div>

        {documents.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center space-y-3">
            <FileText className="w-12 h-12 text-slate-400 mx-auto" />
            <p className="text-xs font-bold text-slate-700">No documents in vault yet.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-xs font-bold text-slate-900 truncate" title={doc.name}>
                          {doc.name}
                        </h2>
                        <div className="text-[10px] text-slate-400">
                          {(doc.sizeBytes / 1024).toFixed(1)} KB · {doc.category}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => deleteDocument(doc.id)}
                      className="p-1 text-slate-300 hover:text-rose-600 transition"
                      title="Delete document"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {doc.contentSnippet && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 line-clamp-3">
                      {doc.contentSnippet}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-400">
                    {new Date(doc.uploadedAt).toLocaleDateString()}
                  </span>

                  {doc.contentSnippet && (
                    <button
                      type="button"
                      onClick={() => handleCopy(doc.id, doc.contentSnippet)}
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      {copiedId === doc.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Snippet
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-blue-600" /> Upload Career Document
                </h3>
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Document Name</label>
                  <input
                    type="text"
                    value={docName}
                    onChange={(e) => setDocName(e.target.value)}
                    placeholder="e.g. Alex_Morgan_Staff_Resume_2026.pdf"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={docCategory}
                    onChange={(e) => setDocCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white"
                  >
                    <option value="Resume">Resume / CV</option>
                    <option value="Cover Letter">Cover Letter</option>
                    <option value="Portfolio">Portfolio / Projects</option>
                    <option value="Certification">Certification / Transcript</option>
                    <option value="Assessment Export">Assessment Export</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Text Snippet / Content Summary
                  </label>
                  <textarea
                    rows={3}
                    value={docSnippet}
                    onChange={(e) => setDocSnippet(e.target.value)}
                    placeholder="Paste bullet points or summary text..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
                  >
                    Save to Vault
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
