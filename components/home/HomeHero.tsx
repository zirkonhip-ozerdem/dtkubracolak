import Image from "next/image";
import { Locale, routeMap, type Dictionary } from "@/lib/i18n";
import { ButtonLink } from "@/components/shared/ButtonLink";

type HomeHeroProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function HomeHero({ lang, dictionary }: HomeHeroProps) {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#f6f1ea]" style={{ position: 'relative' }}>
      <Image
        src="/images/site/dental-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/15" />
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-xl">
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
