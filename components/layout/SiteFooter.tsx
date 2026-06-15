import Link from "next/link";
import Image from "next/image";
import { Locale, routeMap, site, treatments, type Dictionary } from "@/lib/i18n";
import { SiteIcon } from "@/components/shared/SiteIcon";

type SiteFooterProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function SiteFooter({ lang, dictionary }: SiteFooterProps) {
  const nav = dictionary.nav;
  const footerDic = dictionary.footer; 
  
  const quickLinks = [
    { href: routeMap.home, label: nav.home },
    { href: routeMap.about, label: nav.about },
    { href: routeMap.faq, label: nav.faq },
    { href: routeMap.contact, label: nav.contact },
  ];

  const featuredTreatments = treatments.slice(0, 4);

  return (
    <footer className="bg-[#1a1a1a] text-white border-t border-white/5">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4 lg:px-8">
        
        {/* 1. KOLON: LOGO & ÖZET */}
        <div className="flex flex-col items-start space-y-6">
          <div className="pt-2">
            <Image
              src="/images/site/KUBRA_COLAK_LOGO_ONAY_TRANSPARENT.png"
              alt="Dt. Kübra Çolak"
              width={180}
              height={166}
              className="h-32 w-auto object-contain"
              priority
            />
            <p className="mt-5 text-xs leading-6 text-[#d8d2ca]">
              {footerDic.summary}
            </p>
          </div>
        </div>

        {/* 2. KOLON: SAYFALAR (Politikalarla birleştirildi) */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a36d] border-b border-white/10 pb-2">
            SAYFALAR
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[#d8d2ca]">
            {quickLinks.map((item) => (
              <li key={item.href || "home"} className="flex items-center gap-2">
                <span className="text-[#c9a36d] text-xs">›</span>
                <Link href={`/${lang}${item.href}`} className="transition hover:text-[#c9a36d]">
                  {item.label}
                </Link>
              </li>
            ))}
            {/* KVKK ve Çerez Politikası buraya taşındı */}
            <li className="flex flex-col space-y-3 pt-2">
              <Link href={`/${lang}/kvkk`} className="text-xs text-[#c9a36d] hover:underline transition">
                {footerDic.kvkk || "KVKK Aydınlatma Metni"}
              </Link>
              <Link href={`/${lang}/cerez-politikasi`} className="text-xs text-[#c9a36d] hover:underline transition">
                {footerDic.cookiePolicy || "Çerez Politikası"}
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. KOLON: TEDAVİLER */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a36d] border-b border-white/10 pb-2">
            {nav.treatments}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[#d8d2ca]">
            {featuredTreatments.map((treatment) => (
              <li key={treatment.key} className="flex items-center gap-2">
                <span className="text-[#c9a36d] text-xs">›</span>
                <Link 
                  href={`/${lang}${routeMap.treatments}`} 
                  className="transition hover:text-[#c9a36d]"
                >
                  {treatment.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. KOLON: İLETİŞİM */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a36d] border-b border-white/10 pb-2">
            {footerDic.contact}
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-[#d8d2ca]">
            <li className="flex gap-3">
              <SiteIcon name="phone" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c9a36d]" />
              <a href={site.phoneHref || "tel:+908508117906"} className="transition hover:text-[#d8d2ca]">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <SiteIcon name="mail" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c9a36d]" />
              <a href={site.emailHref} className="transition hover:text-[#d8d2ca] break-all">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <SiteIcon name="pin" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c9a36d]" />
              <span className="leading-6 text-xs text-[#d8d2ca]">
                Fevzi Çakmak, Sakarya Cd. No:46/A, 35330 Balçova/İzmir
              </span>
            </li>
            <li className="flex gap-3 pt-2 border-t border-white/5 text-xs text-[#d8d2ca]">
              <svg className="h-4 w-4 flex-shrink-0 text-[#c9a36d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{footerDic.workingHours || (lang === "tr" ? "Pazartesi - Cumartesi: 09:00 - 19:00" : "Monday - Saturday: 09:00 - 19:00")}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ALT BAR */}
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-[#d8d2ca] space-y-2">
        <p>© {new Date().getFullYear()} Dt. Kübra Çolak. {footerDic.rights}</p>
        <p className="text-[10px] text-[#737373] max-w-3xl mx-auto leading-5">
          {footerDic.legalDisclaimer || (lang === "tr" 
            ? "Sitede yer alan klinik ve tıbbi bilgiler, kullanıcıları bilgilendirme amaçlı olup; kesinlikle bir teşhis, tanı veya tedavi yöntemi seçimi niteliği taşımaz."
            : "The clinical and medical information on this site is for informational purposes only and does not constitute a diagnosis, identification, or selection of a treatment method.")}
        </p>
      </div>
    </footer>
  );
}
