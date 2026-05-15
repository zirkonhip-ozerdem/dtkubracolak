import { Locale, treatments, type Dictionary } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { SiteIcon } from "@/components/shared/SiteIcon";

type TreatmentsPageProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function TreatmentsPage({ lang, dictionary }: TreatmentsPageProps) {
  return (
    <>
      <PageHero title={dictionary.treatments.title} lead={dictionary.treatments.lead} />
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, index) => (
            <article key={item.key} className="border border-[#eee8df] bg-white p-7 shadow-[0_16px_40px_rgba(43,38,31,0.06)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#252525] text-[#c9a36d]">
                  <SiteIcon name={item.icon} className="h-8 w-8" />
                </div>
                <span className="text-4xl font-light text-[#efe7dc]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-7 text-lg font-bold uppercase tracking-[0.1em] text-[#252525]">
                {item.title[lang]}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6a625b]">{item.description[lang]}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
