import Image from "next/image";
import Link from "next/link";
import { Locale, type Dictionary } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { TreatmentDetailSection } from "@/components/treatments/TreatmentDetailSection";

type TreatmentsPageProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function TreatmentsPage({ lang, dictionary }: TreatmentsPageProps) {
  const href = (path: string) => `/${lang}${path}`;
  const categories = dictionary.treatments.categories;

  return (
    <>
      <PageHero title={dictionary.treatments.title} lead={dictionary.treatments.lead} />
      <TreatmentDetailSection implantSection={dictionary.treatments.implantSection} />
      <section className="bg-white px-6 pt-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-0.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const image = "image" in cat ? (cat.image as string) : undefined;
            return (
              <div
                key={cat.label}
                className="group relative flex min-h-[420px] flex-col overflow-hidden bg-[#1a1a1a]"
              >
                {/* Başlık */}
                <div className="flex min-h-[110px] items-center justify-center px-8 py-10">
                  <h3 className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a36d]">
                    {cat.label}
                  </h3>
                </div>

                {/* Görsel: hover'da opacity ile açılır */}
                <div className="relative flex-1" style={{ position: 'relative' }}>
                  {image && (
                    <>
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-100"
                      />
                      <div className="absolute inset-0 bg-[#1a1a1a]/50 transition-colors duration-500 group-hover:bg-[#1a1a1a]/75" />
                    </>
                  )}
                  {/* Yazılar her zaman görünür */}
                  <ul className="relative px-8 pb-8">
                    {cat.items.map((item) => (
                      <li key={item.label} className="border-b border-white/10 last:border-0">
                        <Link
                          href={href(item.href)}
                          className="block py-3 text-sm text-white/70 transition-colors hover:text-[#c9a36d]"
                        >
                          › {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
