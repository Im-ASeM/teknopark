import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Globe, Smartphone, Brain, Server, Palette, MessageSquare, ArrowRight } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: `${t("tag")} | Xstar`,
    description: t("description"),
  };
}

const services = [
  { key: "webDesign", descKey: "webDesignDesc", icon: Globe },
  { key: "appDev", descKey: "appDevDesc", icon: Smartphone },
  { key: "aiSystems", descKey: "aiSystemsDesc", icon: Brain },
  { key: "systemDesign", descKey: "systemDesignDesc", icon: Server },
  { key: "uiux", descKey: "uiuxDesc", icon: Palette },
  { key: "consulting", descKey: "consultingDesc", icon: MessageSquare },
] as const;

function ServicesContent() {
  const t = useTranslations("services");

  return (
    <div className="pt-28 lg:pt-36">
      <section className="bg-dark-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            tag={t("tag")}
            title={t("title")}
            highlight={t("highlight")}
            description={t("description")}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card key={svc.key} className="group">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-dark-primary">
                    <Icon size={32} />
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-text-primary">
                    {t(svc.key)}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t(svc.descKey)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3">
                    {t("learnMore")}
                    <ArrowRight size={14} />
                  </span>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesContent />;
}
