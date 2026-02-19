import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Target, Eye, Users, Award } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: `${t("tag")} | Xstar`,
    description: t("description"),
  };
}

const stats = [
  { key: "completedProjects", value: "800+" },
  { key: "happyClients", value: "500+" },
  { key: "teamMembers", value: "50+" },
  { key: "yearsExperience", value: "10+" },
] as const;

function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="pt-28 lg:pt-36">
      {/* Hero banner */}
      <section className="bg-dark-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            tag={t("tag")}
            title={t("title")}
            highlight={t("highlight")}
            description={t("description")}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-body py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.key} className="text-center">
                <span className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-bold text-accent">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm text-text-secondary">{t(stat.key)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-dark-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target size={28} />
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-text-primary">
                {t("mission")}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                {t("missionText")}
              </p>
            </Card>
            <Card>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye size={28} />
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-text-primary">
                {t("vision")}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                {t("visionText")}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}
