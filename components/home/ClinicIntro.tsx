import Image from "next/image";
import { Locale, routeMap, type Dictionary } from "@/lib/i18n";
import { ButtonLink } from "@/components/shared/ButtonLink";

type ClinicIntroProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function ClinicIntro({ lang, dictionary }: ClinicIntroProps) {
  const aboutData = dictionary.about;
  const clinicValues = ("values" in aboutData ? aboutData.values : aboutData.areas) as readonly string[];

  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f3eee7]">
          <Image
            src="/images/site/clinic-room.png"
            alt="Modern dental clinic treatment room"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 h-px w-16 bg-[#c9a36d]" />
          <h2 className="text-3xl font-bold uppercase tracking-[0.08em] text-[#252525]">
            {dictionary.home.clinicTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5d5751]">
            {dictionary.home.clinicLead}
          </p>
          <div className="mt-8 space-y-4 text-sm leading-6 text-[#6a625b]">
            {clinicValues.map((value) => (
              <p key={value} className="flex gap-3">
                <span className="mt-3 h-px w-8 bg-[#c9a36d]" />
                <span>{value}</span>
              </p>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href={`/${lang}${routeMap.contact}`}>{dictionary.common.appointment}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
