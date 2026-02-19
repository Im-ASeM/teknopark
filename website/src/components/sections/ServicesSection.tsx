import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Cpu, Zap, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@/lib/navigation";

const services = [
  { key: "digitalization" as const, counter: "01", Icon: Cpu },
  { key: "modernization" as const, counter: "02", Icon: Zap },
  { key: "acceleratingInnovation" as const, counter: "03", Icon: Sparkles },
];

export async function ServicesSection() {
  const t = await getTranslations("services");

  return (
    <section className="bg-dark-body px-[15px] pt-[109px] pb-[113px] max-lg:pt-[5em] max-lg:pb-[5em]">
      <div className="mx-auto max-w-[1330px]">
        {/* Header row */}
        <div className="mb-[53px] flex flex-col items-start justify-between gap-[50px] lg:flex-row lg:items-end">
          <div className="lg:w-[46%]">
            <SectionTitle
              tag={t("tag")}
              title={t("titleHome02")}
              highlight={t("highlightHome02")}
            />
          </div>
          <div className="lg:w-[54%] lg:pt-[60px] lg:text-right max-md:pt-0 max-md:text-left">
            <Link
              href="/services"
              className="inline-flex items-center gap-[10px] rounded-full border border-[#454750] bg-transparent px-[18px] py-[15px] text-base leading-4 text-white transition-all hover:border-accent hover:bg-accent hover:text-dark-primary"
            >
              <ArrowRight size={16} className="rtl:rotate-180" />
              {t("viewAll")}
            </Link>
          </div>
        </div>

        {/* Service cards - style2 */}
        <div className="mx-auto max-w-[1330px]">
          <div className="-mx-[15px] flex flex-wrap">
            {services.map((svc) => (
              <div key={svc.key} className="w-full px-[15px] pb-[30px] md:w-1/2 lg:w-1/3">
                <div className="group h-full rounded-xl border border-[#454750] bg-dark-card p-8 transition-all hover:border-accent/30">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <svc.Icon size={28} />
                    </div>
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-plus-jakarta)] text-xl font-semibold text-white">
                    {t(svc.key)}
                  </h3>
                  <p className="mb-8 text-base leading-7 text-text-secondary">
                    {t("cardDescription")}
                  </p>
                  <div className="flex items-end justify-between">
                    <span className="font-[family-name:var(--font-plus-jakarta)] text-[48px] font-bold leading-none text-accent/20">
                      {svc.counter}
                    </span>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-base font-semibold text-accent transition-all hover:gap-3"
                    >
                      {t("exploreMore")}
                      <ArrowRight size={14} className="rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
