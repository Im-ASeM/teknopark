import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Newspaper } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t("tag")} | Xstar`,
  };
}

function BlogContent() {
  const t = useTranslations("blog");

  return (
    <div className="pt-28 lg:pt-36">
      <section className="bg-dark-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            tag={t("tag")}
            title={t("title")}
            highlight={t("highlight")}
          />

          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Newspaper size={36} />
            </div>
            <h3 className="font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-text-primary">
              {t("comingSoon")}
            </h3>
            <p className="mt-3 text-sm text-text-secondary">
              {t("comingSoonDesc")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogContent />;
}
