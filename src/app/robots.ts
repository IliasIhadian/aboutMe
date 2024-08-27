import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/aboutme", "/contact", "/projects"],
      disallow: "/private/",
    },
    sitemap: "https://ihadian.com/sitemap.xml",
  };
}
