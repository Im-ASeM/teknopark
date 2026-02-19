"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { ArrowRight } from "lucide-react";

type Project = {
  titleKey: string;
  image: string;
  tagKeys: string[];
  category: string;
};

const projects: Project[] = [
  { titleKey: "project1", image: "/teknopark/images/portfolio_01.jpg", tagKeys: ["tag1", "tag2"], category: "development" },
  { titleKey: "project2", image: "/teknopark/images/portfolio_02.jpg", tagKeys: ["tag3", "tag4"], category: "digital" },
  { titleKey: "project3", image: "/teknopark/images/portfolio_03.jpg", tagKeys: ["tag5", "tag6"], category: "technology" },
  { titleKey: "project4", image: "/teknopark/images/blog_10.jpg", tagKeys: ["tag7", "tag8"], category: "marketing" },
];

export function PortfolioSection() {
  const t = useTranslations("portfolio");
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: t("all") },
    { key: "development", label: t("development") },
    { key: "digital", label: t("digital") },
    { key: "technology", label: t("technology") },
    { key: "marketing", label: t("marketing") },
  ];

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-dark-primary bg-team-staff bg-cover bg-center px-[15px] pt-[130px] pb-[115px] max-lg:pt-[5em] max-lg:pb-[5em]">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-[14px] flex flex-col items-start justify-between gap-[50px] lg:flex-row lg:items-end">
          <div className="lg:w-[70%]">
            <span className="mb-6 inline-block rounded-full border border-[#454750] px-4 py-2 font-[family-name:var(--font-manrope)] text-base font-normal uppercase text-accent">
              {t("tag")}
            </span>
            <h2 className="font-[family-name:var(--font-plus-jakarta)] text-[35px] leading-[45px] font-bold capitalize text-white sm:text-[55px] sm:leading-[70px]">
              {t("title")}
              <span className="font-medium italic tracking-[-1.2px]">{t("highlight")}</span>
            </h2>
          </div>
          <div className="lg:w-[30%] lg:pt-[28px] lg:text-right rtl:lg:text-left">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-[10px] rounded-full border border-[#454750] bg-transparent px-[18px] py-[15px] text-base leading-4 text-white transition-all hover:border-accent hover:bg-accent hover:text-dark-primary"
            >
              <ArrowRight size={16} className="rtl:rotate-180" />
              {t("viewAllProject")}
            </Link>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-3 pt-4">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === f.key
                  ? "bg-accent text-dark-primary"
                  : "border border-[#454750] text-text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="-mx-[15px] flex flex-wrap">
          {filtered.map((project, i) => (
            <div key={i} className="w-full px-[15px] pb-[30px] sm:w-1/2">
              <Link href="/portfolio" className="group relative block overflow-hidden rounded-xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-dark-primary/90 via-dark-primary/30 to-transparent p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tagKeys.map((tagKey) => (
                        <span key={tagKey} className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                          {t(tagKey)}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-white">
                      {t(project.titleKey)}
                    </h4>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      {t("exploreMore")}
                      <ArrowRight size={14} className="rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
