import Image from "next/image";
import { Locale, routeMap, site, type Dictionary } from "@/lib/i18n";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { SiteIcon } from "@/components/shared/SiteIcon";

type ContactPreviewProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function ContactPreview({ lang, dictionary }: ContactPreviewProps) {
  return (
    <section className="relative overflow-hidden bg-[#252525] px-6 py-20 text-white lg:px-8" style={{ position: 'relative' }}>
      <Image
        src="/images/site/smile-consultation.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[#252525]/82" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-[0.08em]">
            {dictionary.home.contactTitle}
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#ded7cf]">
            {dictionary.home.contactLead}
          </p>
          <ul className="mt-8 space-y-4 text-sm text-[#ded7cf]">
            <li className="flex items-center gap-3">
              <SiteIcon name="pin" className="h-5 w-5 text-[#c9a36d]" />
              {site.address}
            </li>
            <li className="flex items-center gap-3">
              <SiteIcon name="phone" className="h-5 w-5 text-[#c9a36d]" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <SiteIcon name="mail" className="h-5 w-5 text-[#c9a36d]" />
              <a href={site.emailHref}>{site.email}</a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 text-[#252525] shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-8">
          <h3 className="text-xl font-bold uppercase tracking-[0.08em]">
            {dictionary.contact.formTitle}
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input className="h-12 border border-[#eee8df] bg-[#f7f4ef] px-4 text-sm outline-none" placeholder={dictionary.common.name} />
            <input className="h-12 border border-[#eee8df] bg-[#f7f4ef] px-4 text-sm outline-none" placeholder={dictionary.common.email} />
            <textarea className="min-h-32 border border-[#eee8df] bg-[#f7f4ef] px-4 py-3 text-sm outline-none sm:col-span-2" placeholder={dictionary.common.message} />
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-xs leading-5 text-[#8a8178]">* {dictionary.common.required}</p>
            <ButtonLink href={`/${lang}${routeMap.contact}`}>{dictionary.common.send}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
