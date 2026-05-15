import Image from "next/image";
import { Locale, routeMap, type Dictionary } from "@/lib/i18n";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { SectionHeading } from "@/components/shared/SectionHeading";

type DoctorApproachProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function DoctorApproach({ lang, dictionary }: DoctorApproachProps) {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow={dictionary.home.doctorsKicker}
        title={dictionary.home.doctorsTitle}
        lead={dictionary.home.doctorsLead}
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-7 md:grid-cols-2">
        <article className="grid grid-cols-[112px_1fr] gap-6 border border-[#eee8df] bg-white p-5 shadow-[0_18px_45px_rgba(43,38,31,0.08)]">
          <div className="relative h-32 overflow-hidden bg-[#f3eee7]">
            <Image src="/images/site/smile-consultation.png" alt="" fill sizes="112px" className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold tracking-[0.08em] text-[#252525]">Dt. Kubra Colak</h3>
            <p className="mt-2 text-sm leading-6 text-[#6a625b]">
              {dictionary.about.lead}
            </p>
            <ButtonLink href={`/${lang}${routeMap.about}`} variant="light">
              {dictionary.common.details}
            </ButtonLink>
          </div>
        </article>
        <article className="border border-[#eee8df] bg-[#fbfaf8] p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a36d]">
            {dictionary.about.valuesTitle}
          </p>
          <ul className="mt-6 space-y-4 text-sm leading-6 text-[#5d5751]">
            {dictionary.about.values.map((value) => (
              <li key={value} className="flex gap-3">
                <span className="mt-2 h-px w-7 bg-[#c9a36d]" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
