import type { MetadataRoute } from "next";

const BASE_URL = "https://xstar.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "fa"];
  const routes = ["", "/about", "/services", "/portfolio", "/blog", "/contact"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
