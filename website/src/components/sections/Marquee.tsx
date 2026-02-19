import { getTranslations } from "next-intl/server";

export async function Marquee() {
  const t = await getTranslations("marquee");
  const text = t("text");
  const items = Array(8).fill(text);

  return (
    <section className="overflow-hidden bg-[#161616] py-9">
      <div className="tf-marquee flex">
        <div className="flex shrink-0 animate-[slide-har_30s_linear_infinite] items-center">
          {items.map((txt, i) => (
            <div key={i} className="flex shrink-0 items-center px-[25px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-3 shrink-0">
                <circle cx="12" cy="12" r="12" fill="#E3FF04" />
              </svg>
              <span className="whitespace-nowrap font-[family-name:var(--font-manrope)] text-[40px] font-bold uppercase leading-[58px] tracking-normal text-white max-md:text-[24px] max-md:leading-[36px]" style={{ wordSpacing: "9px" }}>
                {txt}
              </span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-[slide-har_30s_linear_infinite] items-center" aria-hidden>
          {items.map((txt, i) => (
            <div key={i} className="flex shrink-0 items-center px-[25px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-3 shrink-0">
                <circle cx="12" cy="12" r="12" fill="#E3FF04" />
              </svg>
              <span className="whitespace-nowrap font-[family-name:var(--font-manrope)] text-[40px] font-bold uppercase leading-[58px] tracking-normal text-white max-md:text-[24px] max-md:leading-[36px]" style={{ wordSpacing: "9px" }}>
                {txt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
