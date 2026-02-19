export function OrganizationJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xstar",
    url: "https://xstar.dev",
    logo: "https://xstar.dev/images/logo.png",
    description:
      locale === "fa"
        ? "آژانس خلاق نرم‌افزاری - طراحی وب، توسعه اپلیکیشن و راهکارهای هوش مصنوعی"
        : "Creative Software Agency - Web Design, App Development & AI Solutions",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+98-21-1234-5678",
      contactType: "customer service",
      availableLanguage: ["English", "Persian"],
    },
    sameAs: [
      "https://linkedin.com/company/xstar",
      "https://twitter.com/xstar",
      "https://github.com/xstar",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Xstar",
    url: "https://xstar.dev",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://xstar.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
