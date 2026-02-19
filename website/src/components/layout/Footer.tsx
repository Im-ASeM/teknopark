import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");

  const links = [
    { href: "/", label: nav("home") },
    { href: "/about", label: nav("about") },
    { href: "/services", label: nav("services") },
    { href: "/portfolio", label: nav("portfolio") },
    { href: "/contact", label: nav("contact") },
  ];

  return (
    <footer className="border-t border-dark-border bg-dark-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-text-primary">
              X<span className="text-accent">star</span>
            </Link>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-text-secondary">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-text-primary">
              {t("quickLinks")}
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-text-primary">
              {t("contactUs")}
            </h3>
            <ul className="flex flex-col gap-4 font-[family-name:var(--font-inter)] text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{contact("phoneValue")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{contact("emailValue")}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{contact("addressValue")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-text-primary">
              {t("newsletter")}
            </h3>
            <p className="mb-4 font-[family-name:var(--font-inter)] text-sm text-text-secondary">
              {t("newsletterDesc")}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 rounded-full border border-dark-border bg-dark-body px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-dark-primary transition-all hover:shadow-[0_0_20px_rgba(227,255,4,0.3)]"
              >
                {t("join")}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-border bg-dark-body">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center lg:px-8">
          <p className="font-[family-name:var(--font-inter)] text-sm text-text-secondary">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
