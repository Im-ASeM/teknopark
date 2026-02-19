import { setRequestLocale, getTranslations } from "next-intl/server";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });
  return {
    title: `${t("tag")} | Xstar`,
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-28 lg:pt-36">
      <PortfolioSection />
    </div>
  );
}
