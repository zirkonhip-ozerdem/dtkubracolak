import Link from "next/link";
import { Locale, routeMap, site, type Dictionary } from "@/lib/i18n";
import { SiteIcon } from "@/components/shared/SiteIcon";

type SiteFooterProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function SiteFooter({ lang, dictionary }: SiteFooterProps) {
  const nav = dictionary.nav;
  const items = [
    { href: routeMap.home, label: nav.home },
    { href: routeMap.about, label: nav.about },
    { href: routeMap.treatments, label: nav.treatments },
    { href: routeMap.gallery, label: nav.gallery },
    { href: routeMap.blog, label: nav.blog },
    { href: routeMap.contact, label: nav.contact },
  ];

  return (
    <footer className="bg-[#252525] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a36d] text-sm font-bold text-[#c9a36d]">
              KC
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em]">Dt. Kubra Colak</p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#cfc7bd]">
                Agiz ve Dis Sagligi
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#d8d2ca]">
            {dictionary.footer.summary}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a36d]">
            {dictionary.footer.quickLinks}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[#d8d2ca]">
            {items.map((item) => (
              <li key={item.href || "home"}>
                <Link href={`/${lang}${item.href}`} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a36d]">
            {dictionary.footer.contact}
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-[#d8d2ca]">
            <li className="flex gap-3">
              <SiteIcon name="pin" className="mt-0.5 h-5 w-5 text-[#c9a36d]" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <SiteIcon name="phone" className="mt-0.5 h-5 w-5 text-[#c9a36d]" />
              <a href={site.phoneHref} className="transition hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <SiteIcon name="mail" className="mt-0.5 h-5 w-5 text-[#c9a36d]" />
              <a href={site.emailHref} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-[#b9b0a6]">
        © {new Date().getFullYear()} Dt. Kubra Colak. {dictionary.footer.rights}
      </div>
    </footer>
  );
}
