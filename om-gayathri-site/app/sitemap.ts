import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://omgayathriagencies.com",
      lastModified: new Date(),
    },
    {
      url: "https://omgayathriagencies.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://omgayathriagencies.com/contact",
      lastModified: new Date(),
    },
  ];
}