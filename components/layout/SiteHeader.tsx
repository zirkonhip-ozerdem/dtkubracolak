"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Locale, localeLabels, locales, routeMap, site, type Dictionary } from "@/lib/i18n";
import { SiteIcon } from "@/components/shared/SiteIcon";


type SiteHeaderProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ lang, dictionary }: SiteHeaderProps) {
  const categories = dictionary.treatments.categories;
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].label);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const pathname = usePathname();
  const nav = dictionary.nav;

  const navLinks = [
    { href: routeMap.home, label: nav.home },
    { href: routeMap.about, label: nav.about },
    { href: routeMap.gallery, label: nav.gallery },
    { href: routeMap.blog, label: nav.blog },
    { href: routeMap.faq, label: nav.faq },
    { href: routeMap.contact, label: nav.contact },
  ];

  const href = (path: string) => `/${lang}${path}`;

  const switchHref = (target: Locale) => {
    const parts = pathname.split("/");
    if (locales.includes(parts[1] as Locale)) {
      parts[1] = target;
      return parts.join("/") || `/${target}`;
    }
    return `/${target}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      <div className="border-b border-[#eee8df] bg-[#fbfaf8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-2 text-xs text-[#5d5751] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a className="inline-flex items-center gap-2 hover:text-[#c9a36d]" href={site.emailHref}>
              <SiteIcon name="mail" className="h-4 w-4" />
              {site.email}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-[#c9a36d]" href={site.phoneHref}>
              <SiteIcon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
          <div className="hidden items-center gap-2 sm:inline-flex">
            <SiteIcon name="pin" className="h-4 w-4" />
            {site.address}
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href={href("")} className="group flex h-full items-center">
          <Image
            src="/images/site/KUBRA_COLAK_LOGO_ONAY.png"
            alt="Dt. Kübra Çolak"
            width={200}
            height={75}
            className="h-20 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.14em] text-[#252525] lg:flex">
          {navLinks.slice(0, 2).map((item) => (
            <Link key={item.href} href={href(item.href)} className="transition hover:text-[#c9a36d]">
              {item.label}
            </Link>
          ))}

          {/* TEDAVİLER dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTreatmentsOpen(true)}
            onMouseLeave={() => setTreatmentsOpen(false)}
          >
            <Link href={href(routeMap.treatments)} className="transition hover:text-[#c9a36d]">
              {nav.treatments}
            </Link>

            {treatmentsOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 z-50">
                <div className="flex overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.18)]">
                  {/* Sol: Koyu panel */}
                  <div className="w-64 bg-[#1e1e1e] py-4">
                    <p className="mb-1 border-b border-white/10 px-5 pb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c9a36d]">
                      Tedaviler
                    </p>
                    {categories.map((cat) => (
                      <button
                        key={cat.label}
                        onMouseEnter={() => setActiveCategory(cat.label)}
                        className={`flex w-full items-center justify-between py-2.5 pr-5 text-left text-[11px] font-semibold uppercase tracking-[0.07em] transition-all duration-150 ${
                          activeCategory === cat.label
                            ? "border-l-2 border-[#c9a36d] pl-[19px] text-white"
                            : "border-l-2 border-transparent pl-[19px] text-white/50 hover:text-white/90"
                        }`}
                      >
                        {cat.label}
                        <span className={`text-xs transition-colors ${activeCategory === cat.label ? "text-[#c9a36d]" : "text-white/20"}`}>›</span>
                      </button>
                    ))}
                  </div>

                  {/* Sağ: Açık panel */}
                  <div className="w-64 bg-white py-4">
                    <p className="mb-1 border-b border-[#eee8df] px-5 pb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c9a36d]">
                      {activeCategory}
                    </p>
                    <div className="py-1">
                      {categories.find((c) => c.label === activeCategory)?.items.map((item) => (
                        <Link
                          key={item.label}
                          href={href(item.href)}
                          onClick={() => setTreatmentsOpen(false)}
                          className="group flex items-center justify-between border-l-2 border-transparent px-5 py-2.5 normal-case transition-all duration-150 hover:border-[#c9a36d] hover:bg-[#faf9f7]"
                        >
                          <span className="text-[12.5px] font-medium tracking-wide text-[#3a3530] transition-colors duration-150 group-hover:text-[#c9a36d]">
                            {item.label}
                          </span>
                          <svg
                            viewBox="0 0 16 16"
                            className="h-3 w-3 flex-shrink-0 translate-x-0 text-[#c9a36d] opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:opacity-100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((item) => (
            <Link key={item.href} href={href(item.href)} className="transition hover:text-[#c9a36d]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={switchHref(locale)}
              className={`flex h-8 w-8 items-center justify-center border text-[11px] font-bold transition ${
                locale === lang
                  ? "border-[#252525] bg-[#252525] text-white"
                  : "border-[#ddd4c9] text-[#5d5751] hover:border-[#c9a36d] hover:text-[#c9a36d]"
              }`}
            >
              {localeLabels[locale]}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center border border-[#ddd4c9] text-[#252525] lg:hidden"
        >
          <SiteIcon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#eee8df] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5 text-sm font-bold uppercase tracking-[0.12em] text-[#252525]">
            {navLinks.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={href(item.href)}
                onClick={() => setOpen(false)}
                className="border-b border-[#f0ebe4] py-4"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile TEDAVİLER accordion */}
            <div className="border-b border-[#f0ebe4]">
              <button
                onClick={() => setMobileTreatmentsOpen((v) => !v)}
                className="flex w-full items-center justify-between py-4 text-left"
              >
                {nav.treatments}
                <span className="text-base">{mobileTreatmentsOpen ? "−" : "+"}</span>
              </button>
              {mobileTreatmentsOpen && (
                <div className="pb-3">
                  {categories.map((cat) => (
                    <div key={cat.label} className="mb-1">
                      <p className="px-2 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9a8e84]">
                        {cat.label}
                      </p>
                      {cat.items.map((item) => (
                        <Link
                          key={item.label}
                          href={href(item.href)}
                          onClick={() => { setOpen(false); setMobileTreatmentsOpen(false); }}
                          className="block px-2 py-2 text-xs font-semibold normal-case tracking-normal text-[#5d5751]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((item) => (
              <Link
                key={item.href}
                href={href(item.href)}
                onClick={() => setOpen(false)}
                className="border-b border-[#f0ebe4] py-4"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex gap-2 pt-5">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={switchHref(locale)}
                  onClick={() => setOpen(false)}
                  className={`flex h-9 w-11 items-center justify-center border text-xs font-bold ${
                    locale === lang
                      ? "border-[#252525] bg-[#252525] text-white"
                      : "border-[#ddd4c9] text-[#5d5751]"
                  }`}
                >
                  {localeLabels[locale]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
