import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import { Link } from "@/lib/navigation";

const team = [
  { nameKey: "member1Name", roleKey: "member1Role", image: "/images/team5-4-4-10.jpg" },
  { nameKey: "member2Name", roleKey: "member2Role", image: "/images/team6-4-4-10.png" },
  { nameKey: "member3Name", roleKey: "member3Role", image: "/images/team7-4-4-10.png" },
  { nameKey: "member4Name", roleKey: "member4Role", image: "/images/team8-4-4-10.png" },
] as const;

export async function TeamSection() {
  const t = await getTranslations("team");

  return (
    <section className="bg-dark-body px-[15px] pt-[130px] pb-[117px] max-lg:pt-[5em] max-lg:pb-[5em]">
      <div className="mx-auto max-w-[1330px]">
        <div className="mb-[46px] flex flex-col items-start justify-between gap-[50px] lg:flex-row lg:items-end">
          <div className="lg:w-[70%]">
            <span className="mb-6 inline-block rounded-full border border-[#454750] px-4 py-2 font-[family-name:var(--font-manrope)] text-base font-normal uppercase text-accent">
              {t("tag")}
            </span>
            <h2 className="font-[family-name:var(--font-plus-jakarta)] text-[35px] leading-[45px] font-bold capitalize text-white sm:text-[55px] sm:leading-[70px]">
              {t("title")}
              <span className="font-medium italic tracking-[-1.2px]">{t("highlight")}</span>
            </h2>
          </div>
          <div className="lg:w-[30%] lg:pt-[27px] lg:text-right rtl:lg:text-left">
            <Link
              href="/about"
              className="inline-flex items-center gap-[10px] rounded-full border border-[#454750] bg-transparent px-[18px] py-[15px] text-base leading-4 text-white transition-all hover:border-accent hover:bg-accent hover:text-dark-primary"
            >
              <ArrowRight size={16} className="rtl:rotate-180" />
              {t("viewAll")}
            </Link>
          </div>
        </div>

        <div className="-mx-[15px] flex flex-wrap">
          {team.map((member) => (
            <div key={member.nameKey} className="w-full px-[15px] pb-[30px] sm:w-1/2 lg:w-1/4">
              <div className="group text-center">
                <div className="relative mx-auto mb-5 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={t(member.nameKey)}
                    width={300}
                    height={360}
                    className="aspect-[5/6] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-3 bg-gradient-to-t from-dark-primary/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-dark-primary transition-transform hover:scale-110">
                      <Linkedin size={16} />
                    </a>
                    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-dark-primary transition-transform hover:scale-110">
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-white">
                  {t(member.nameKey)}
                </h3>
                <p className="mt-1 text-sm text-accent">{t(member.roleKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
