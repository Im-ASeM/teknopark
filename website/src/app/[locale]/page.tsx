import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <BlogSection />
    </>
  );
}
