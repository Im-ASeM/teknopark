import Image from "next/image";
import { getTranslations } from "next-intl/server";

const clientLogos = [
  { src: "/teknopark/images/c1-5-4-10.png", width: 181, height: 45 },
  { src: "/teknopark/images/c2-5-4-10.png", width: 130, height: 72 },
  { src: "/teknopark/images/c3-5-4-10.png", width: 168, height: 53 },
];

export async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <section className="bg-dark-body px-[15px] pt-[130px] pb-[74px] max-lg:pt-[5em] max-lg:pb-[5em]">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-[70px] lg:flex-row lg:items-start">
        {/* Left - Image with decorative overlays (51.5%) */}
        <div className="relative lg:w-[51.5%]">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/teknopark/images/about_home02-8VQQR39-4-4-10.jpg"
              alt=""
              width={690}
              height={532}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 690px"
            />
            <div className="absolute top-6 right-6 rtl:left-6 rtl:right-auto" aria-hidden>
              <Image src="/teknopark/images/icon-5-4-10.png" alt="" width={66} height={79} className="drop-shadow-lg" />
            </div>
            <div className="absolute bottom-6 left-6 rtl:right-6 rtl:left-auto" aria-hidden>
              <Image src="/teknopark/images/icon-2-4-4-10.png" alt="" width={66} height={79} className="drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Right - Content (48.5%) */}
        <div className="flex flex-col lg:w-[48.5%]">
          <span className="mb-6 inline-block w-fit rounded-full border border-[#454750] px-4 py-2 font-[family-name:var(--font-manrope)] text-base font-normal uppercase text-accent">
            {t("tag")}
          </span>

          <h2 className="mb-6 font-[family-name:var(--font-plus-jakarta)] text-[35px] leading-[45px] font-bold capitalize text-white sm:text-[55px] sm:leading-[71px]">
            {t("title")}{" "}
            <span className="font-medium italic tracking-[-1.2px]">{t("highlight")}</span>
          </h2>

          {/* Counter row */}
          <div className="flex items-center gap-[27px] pt-[36px] pb-[31px]">
            <div>
              <span className="font-[family-name:var(--font-plus-jakarta)] text-[38px] font-bold text-accent">
                800+
              </span>
              <p className="mt-1 font-[family-name:var(--font-manrope)] text-base font-medium leading-[1.75em] text-white">
                {t("completedProjects")}
              </p>
            </div>
          </div>

          <p className="text-base leading-7 text-text-secondary">{t("description")}</p>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-[#454750]" />

          {/* Client logos marquee */}
          <div className="flex items-center gap-[50px] overflow-hidden py-2">
            {clientLogos.map((logo) => (
              <div key={logo.src} className="shrink-0 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-95">
                <Image src={logo.src} alt="Client" width={logo.width} height={logo.height} className="h-auto max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
