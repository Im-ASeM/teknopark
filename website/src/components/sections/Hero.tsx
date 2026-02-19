import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/lib/navigation";

const PERSON_AVATARS = [
  "/teknopark/images/person_02_home02-PYL7GTL-4-4-10.jpg",
  "/teknopark/images/person_02_home02-S62PMRE-4-4-10.jpg",
  "/teknopark/images/person_03_home02-X6ULBD4-4-4-10.jpg",
  "/teknopark/images/person_04_home02-HCBTU9A-4-4-10.jpg",
] as const;

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-dark-primary bg-hero bg-cover bg-center pt-[190px] pb-[100px] max-lg:pt-[10em] max-lg:pb-[5em] max-md:pt-[7em]">
      <div className="relative z-10 mx-auto flex max-w-[1540px] flex-col gap-[50px] px-[15px] lg:flex-row">
        {/* Left column - 65% */}
        <div className="relative z-[3] flex flex-col gap-0 lg:w-[65%] lg:pl-[120px] max-lg:pl-0">
          {/* Floating dot decoration */}
          <div className="pointer-events-none absolute top-[24%] -left-[12%] z-0 animate-[heroFloat_4s_ease-in-out_infinite]">
            <Image src="/teknopark/images/cmn-dost-4-4-10.png" alt="" width={130} height={130} aria-hidden />
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-plus-jakarta)] text-[50px] leading-[60px] font-bold text-white sm:text-[60px] sm:leading-[80px] lg:text-[80px] lg:leading-[100px]">
            {t("title")}{" "}
            <span className="font-normal italic">{t("highlight")}</span>
            <br />
            {t("afterText")}
          </h1>

          {/* Avatars row + 15k */}
          <div className="flex flex-row items-center gap-[31px] pt-[54px] pb-[56px] max-md:pt-[30px] max-md:pb-[30px]">
            <div className="flex items-center">
              {PERSON_AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="relative h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full border-[3px] border-white"
                  style={{ marginLeft: i > 0 ? "-14px" : 0 }}
                >
                  <Image src={src} alt="" width={42} height={42} className="h-full w-full object-cover" sizes="42px" />
                </div>
              ))}
            </div>
            <span className="font-[family-name:var(--font-manrope)] text-base font-medium leading-[1.75em] text-white">
              {t("stats")}
            </span>
          </div>

          {/* Wide photo + description */}
          <div className="flex flex-col gap-[26px] lg:flex-row lg:items-center">
            <div className="shrink-0 lg:w-[31%]">
              <Image
                src="/teknopark/images/persson_05_home02-PZ7V7CU-4-4-10.jpg"
                alt=""
                width={520}
                height={224}
                className="w-full rounded-[80px] object-cover"
                sizes="(max-width: 1024px) 100vw, 31vw"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-[69%]">
              <p className="text-base leading-7 text-text-secondary">
                {t("description")}
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 border-b border-accent pb-[5px] text-base font-medium text-accent transition-colors hover:text-accent-hover"
              >
                {t("cta")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right column - 35% */}
        <div className="relative flex items-center justify-center lg:w-[35%]">
          {/* Rotating arrow */}
          <div className="absolute -left-[128px] top-[8px] z-0 max-lg:hidden">
            <Image
              src="/teknopark/images/arrow-cmn-7-4-10.png"
              alt=""
              width={480}
              height={480}
              className="animate-[spin_20s_linear_infinite]"
              aria-hidden
            />
          </div>

          {/* Hero image */}
          <div className="relative z-[2]">
            <Image
              src="/teknopark/images/hero-v2-thumb-4-4-10.png"
              alt=""
              width={534}
              height={643}
              className="w-full max-w-[534px] object-contain"
              sizes="(max-width: 768px) 100vw, 534px"
              priority
            />
          </div>

          {/* Vertical social links */}
          <div className="absolute -right-[50%] top-[45%] z-[2] hidden origin-center rotate-90 flex-row items-center gap-[3.3em] lg:flex">
            {(["facebook", "twitter", "instagram"] as const).map((key) => (
              <a
                key={key}
                href="#"
                className="font-[family-name:var(--font-plus-jakarta)] text-sm font-normal uppercase leading-none text-white transition-colors hover:text-accent"
              >
                {t(key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
