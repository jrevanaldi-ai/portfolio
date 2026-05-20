import { site, sitemapRoutes } from "./site.config";

export default function sitemap() {
  const now = new Date();

  return sitemapRoutes.map((route) => ({
    url: route.path === "/" ? site.url : `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
