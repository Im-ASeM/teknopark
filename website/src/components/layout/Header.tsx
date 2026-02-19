"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/lib/navigation";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";

const localeLabels: Record<string, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
  tr: "Türkçe",
};

const localeShort: Record<string, string> = {
  en: "EN",
  fa: "FA",
  ar: "AR",
  tr: "TR",
};

export function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
    setLangOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#161616]">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between px-4 lg:px-[15px]">
        <Link href="/" className="shrink-0 py-4">
          <Image
            src="/teknopark/images/logo.png"
            alt="Xstar"
            width={140}
            height={28}
            className="h-auto max-w-[140px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex items-center gap-1 font-[family-name:var(--font-plus-jakarta)] text-base font-semibold leading-[88px] transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-white"
              }`}
            >
              {pathname === link.href && (
                <ArrowUpRight size={12} className="text-accent" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-[#454750] px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-accent"
              aria-label="Switch language"
            >
              <Globe size={14} />
              {localeShort[locale]}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2 min-w-[140px] overflow-hidden rounded-lg border border-[#454750] bg-[#161616] py-1 shadow-lg">
                {Object.entries(localeLabels).map(([code, label]) => (
                  <button
                    key={code}
                    onClick={() => switchLocale(code)}
                    className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-accent/10 hover:text-accent ${
                      locale === code ? "text-accent" : "text-text-secondary"
                    }`}
                  >
                    <span className="w-6 text-xs font-bold">{localeShort[code]}</span>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full border border-accent bg-transparent px-5 py-2.5 font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-dark-primary lg:inline-flex"
          >
            <ArrowUpRight size={14} />
            {t("getInTouch")}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-[#454750] bg-[#161616] px-4 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-[family-name:var(--font-plus-jakarta)] text-base font-semibold transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile language links */}
            <div className="mt-4 flex flex-wrap gap-2 border-t border-[#454750] pt-4">
              {Object.entries(localeLabels).map(([code, label]) => (
                <button
                  key={code}
                  onClick={() => {
                    switchLocale(code);
                    setMobileOpen(false);
                  }}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    locale === code
                      ? "bg-accent text-dark-primary"
                      : "border border-[#454750] text-text-secondary hover:text-accent"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
