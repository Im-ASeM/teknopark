import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/teknopark',
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
