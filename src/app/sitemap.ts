import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || "https://cxcodextech.com";
  const now = new Date();

  // Core static routes
  const staticRoutes = [
    "",
    "/about",
    "/how-it-works",
    "/success-stories",
    "/locations",
    "/careers",
    "/contact",
    "/faq",
    "/book-consultation",
    "/tools",
    "/plans",
    "/career-advice",
    "/blogs",
    "/resources",
    "/employers",
    "/employers/talent-solutions",
    "/employers/hire-talent",
    "/employers/recruiting-partners",
    "/employers/submit-requirement",
    "/employers/partner-with-us",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/accessibility",
    "/disclaimer",
    "/sitemap",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/tools") || route.startsWith("/services") ? 0.9 : 0.8,
  }));

  // Dynamic services
  const serviceRoutes = siteConfig.services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic tools
  const toolRoutes = siteConfig.tools.map((t) => ({
    url: `${baseUrl}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic plans
  const planRoutes = siteConfig.plans.map((p) => ({
    url: `${baseUrl}/plans/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic audiences
  const audienceRoutes = siteConfig.audiences.map((a) => ({
    url: `${baseUrl}/audiences/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Dynamic blogs
  const blogRoutes = siteConfig.blogs.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: b.publishedAt ? new Date(b.publishedAt) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic resources
  const resourceRoutes = siteConfig.resources.map((r) => ({
    url: `${baseUrl}/resources/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...toolRoutes,
    ...planRoutes,
    ...audienceRoutes,
    ...blogRoutes,
    ...resourceRoutes,
  ];
}
