"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Locale, localeLabels, locales, routeMap, site, type Dictionary } from "@/lib/i18n";
import { SiteIcon } from "@/components/shared/SiteIcon";

type SiteHeaderProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ lang, dictionary }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = dictionary.nav;

  const items = [
    { href: routeMap.home, label: nav.home },
    { href: routeMap.about, label: nav.about },
    { href: routeMap.treatments, label: nav.treatments },
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

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href={href("")} className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a36d] text-sm font-bold text-[#c9a36d]">
            KC
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold uppercase tracking-[0.2em] text-[#252525]">
              Dt. Kubra Colak
            </span>
            <span className="block text-[11px] uppercase tracking-[0.24em] text-[#8a8178]">
              Agiz ve Dis Sagligi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.14em] text-[#252525] lg:flex">
          {items.map((item) => (
            <Link key={item.href || "home"} href={href(item.href)} className="transition hover:text-[#c9a36d]">
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
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-[#ddd4c9] text-[#252525] lg:hidden"
        >
          <SiteIcon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#eee8df] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5 text-sm font-bold uppercase tracking-[0.12em] text-[#252525]">
            {items.map((item) => (
              <Link
                key={item.href || "home"}
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
      ) : null}
    </header>
  );
}
