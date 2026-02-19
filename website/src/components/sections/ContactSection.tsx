import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const t = useTranslations("contact");

  const infoItems = [
    { icon: Phone, label: t("phone"), value: t("phoneValue") },
    { icon: Mail, label: t("emailLabel"), value: t("emailValue") },
    { icon: MapPin, label: t("address"), value: t("addressValue") },
  ];

  return (
    <section className="bg-dark-primary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          tag={t("tag")}
          title={t("title")}
          highlight={t("highlight")}
          description={t("description")}
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <form className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder={t("name")}
                  className="rounded-xl border border-dark-border bg-dark-card px-5 py-4 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
                />
                <input
                  type="email"
                  placeholder={t("email")}
                  className="rounded-xl border border-dark-border bg-dark-card px-5 py-4 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder={t("subject")}
                className="rounded-xl border border-dark-border bg-dark-card px-5 py-4 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
              />
              <textarea
                rows={5}
                placeholder={t("message")}
                className="resize-none rounded-xl border border-dark-border bg-dark-card px-5 py-4 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
              />
              <Button type="submit" className="self-start">
                <Send size={16} />
                {t("send")}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {infoItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-dark-border bg-dark-card p-5"
                >
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-plus-jakarta)] text-sm font-bold text-text-primary">
                      {item.label}
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
