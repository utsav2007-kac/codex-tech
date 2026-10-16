import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Clock, Calendar, User, ArrowLeft, Share2, Tag, BookOpen, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE_CONFIG.blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const blog = SITE_CONFIG.blogs.find((b) => b.slug === resolved.slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: `${blog.title} | CX CODEX TECH-IT Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolved = await params;
  const blog = SITE_CONFIG.blogs.find((b) => b.slug === resolved.slug);

  if (!blog) {
    notFound();
  }

  const related = SITE_CONFIG.blogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 2);

  return (
    <article className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            <span>{blog.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {blog.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
            <span className="flex items-center gap-1.5 font-medium text-slate-800">
              <User className="w-3.5 h-3.5 text-slate-400" /> {blog.author}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> {blog.publishedAt}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {blog.readTime}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-800 space-y-6">
          <div className="whitespace-pre-line font-sans text-slate-700 leading-relaxed space-y-4">
            {blog.content}
          </div>
        </div>

        {/* Tags */}
        <div className="pt-10 mt-12 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Topic Tags:
            </span>
            {blog.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs text-slate-700 font-mono"
              >
                #{t}
              </span>
            ))}
          </div>
          <div className="text-xs text-slate-400">
            Published by CX CODEX TECH-IT Editorial Team
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Deep Dives</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((r) => (
              <div
                key={r.slug}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                    {r.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{r.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{r.excerpt}</p>
                </div>
                <Link
                  href={`/blogs/${r.slug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FinalCta />
    </article>
  );
}
