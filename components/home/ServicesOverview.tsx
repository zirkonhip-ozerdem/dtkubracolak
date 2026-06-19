import Image from "next/image";
import { Locale, routeMap, treatments, type Dictionary } from "@/lib/i18n";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SiteIcon } from "@/components/shared/SiteIcon";

type ServicesOverviewProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function ServicesOverview({ lang, dictionary }: ServicesOverviewProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef] px-6 py-20 lg:px-8">
      <Image
        src="/images/site/clinic-room.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-white/72" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading title={dictionary.home.servicesTitle} lead={dictionary.home.servicesLead} />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item) => (
            <article
              key={item.key}
              className="group border border-white/80 bg-white/86 p-7 text-center shadow-[0_14px_40px_rgba(43,38,31,0.07)] backdrop-blur"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#252525] text-[#c9a36d] shadow-[0_0_0_1px_#c9a36d] transition group-hover:bg-[#c9a36d] group-hover:text-white">
                <SiteIcon name={item.icon} className="h-9 w-9" />
              </div>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-[#252525]">
                {item.title[lang]}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#6a625b]">{item.description[lang]}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={`/${lang}${routeMap.treatments}`}>{dictionary.common.allTreatments}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
