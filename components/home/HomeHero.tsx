import Image from "next/image";
import { Locale, routeMap, type Dictionary } from "@/lib/i18n";
import { ButtonLink } from "@/components/shared/ButtonLink";

type HomeHeroProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function HomeHero({ lang, dictionary }: HomeHeroProps) {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#f6f1ea] sm:min-h-[640px] lg:min-h-[620px]">
      <Image
        src="/images/site/dental-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-contain object-top opacity-70 lg:object-cover lg:object-center lg:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/82 to-white/96 lg:bg-gradient-to-r lg:from-white lg:via-white/88 lg:to-white/15" />
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-end px-6 pb-16 pt-[58vw] sm:min-h-[640px] sm:pb-20 sm:pt-[46vw] md:pt-[40vw] lg:min-h-[620px] lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-xl rounded-none">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#c9a36d]">
            {dictionary.home.heroEyebrow}
          </p>
          <h1 className="text-4xl font-light leading-tight text-[#252525] sm:text-6xl">
            {dictionary.home.heroTitle}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#5d5751]">
            {dictionary.home.heroLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${lang}${routeMap.treatments}`} variant="secondary">
              {dictionary.common.allTreatments}
            </ButtonLink>
            <ButtonLink href={`/${lang}${routeMap.contact}`}>
              {dictionary.common.appointment}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
