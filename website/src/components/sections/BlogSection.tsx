import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  { titleKey: "post1Title", image: "/teknopark/images/blog_06.jpg", dateKey: "post1Date", slug: "creating-new-working-in-the-digital" },
  { titleKey: "post2Title", image: "/teknopark/images/blog_05.jpg", dateKey: "post2Date", slug: "design-inspiration-where-to-find" },
  { titleKey: "post3Title", image: "/teknopark/images/blog_04.jpg", dateKey: "post3Date", slug: "transforming-challenges-into" },
] as const;

export async function BlogSection() {
  const t = await getTranslations("blog");

  return (
    <section className="bg-[#161616] px-[15px] pt-[130px] pb-[99px] max-lg:pt-[5em] max-lg:pb-[4em]">
      <div className="mx-auto max-w-[1330px]">
        <div className="mb-[45px] flex flex-col items-start justify-between gap-[50px] lg:flex-row lg:items-end">
          <div className="lg:w-[54%]">
            <span className="mb-6 inline-block rounded-full border border-[#454750] px-4 py-2 font-[family-name:var(--font-manrope)] text-base font-normal uppercase text-accent">
              {t("tag")}
            </span>
            <h2 className="font-[family-name:var(--font-plus-jakarta)] text-[35px] leading-[45px] font-bold capitalize text-white sm:text-[55px] sm:leading-[70px]">
              {t("title")}
              <span className="font-medium italic tracking-[-1.2px]">{t("highlight")}</span>
            </h2>
          </div>
          <div className="lg:w-[46%] lg:pt-[60px] lg:text-right rtl:lg:text-left">
            <Link
              href="/blog"
              className="inline-flex items-center gap-[10px] rounded-full border border-[#454750] bg-transparent px-[18px] py-[15px] text-base leading-4 text-white transition-all hover:border-accent hover:bg-accent hover:text-dark-primary"
            >
              <ArrowRight size={16} className="rtl:rotate-180" />
              {t("readMore")}
            </Link>
          </div>
        </div>

        <div className="-mx-[15px] flex flex-wrap">
          {posts.map((post, i) => (
            <div key={i} className="w-full px-[15px] pb-[30px] sm:w-1/2 lg:w-1/3">
              <article className="group overflow-hidden rounded-xl border border-[#454750] bg-dark-card transition-all hover:border-accent/20">
                <Link href="/blog" className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={t(post.titleKey)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {t(post.dateKey)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {t("author")}
                    </span>
                  </div>
                  <Link href="/blog">
                    <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-bold leading-snug text-white transition-colors group-hover:text-accent">
                      {t(post.titleKey)}
                    </h3>
                  </Link>
                  <Link href="/blog" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    {t("readMore")}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
