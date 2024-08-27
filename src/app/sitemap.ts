import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ihadian.com",
      lastModified: new Date(),
    },
    {
      url: "https://project.ihadian.com/",
      lastModified: new Date(),
    },
    {
      url: "https://ihadian.com/aboutme",
      lastModified: new Date(),
    },
    {
      url: "https://ihadian.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://ihadian.com/projects",
      lastModified: new Date(),
    },
  ];
}
