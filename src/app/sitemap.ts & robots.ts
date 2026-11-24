import { MetadataRoute } from "next";
import { site } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), priority: 1 },
    { url: `${site.url}/menu`, lastModified: new Date(), priority: 0.8 },
  ];
}
