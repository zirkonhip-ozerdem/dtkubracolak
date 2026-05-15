import Image from "next/image";
import { type Dictionary } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

type AboutPageProps = {
  dictionary: Dictionary;
};

export function AboutPage({ dictionary }: AboutPageProps) {
  return (
    <>
      <PageHero title={dictionary.about.title} lead={dictionary.about.lead} />
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f3eee7]">
            <Image
              src="/images/site/smile-consultation.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <p className="mb-4 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-3xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              {dictionary.about.storyTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              {dictionary.about.story}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {dictionary.about.values.map((value) => (
                <div key={value} className="border border-[#eee8df] bg-[#fbfaf8] p-5">
                  <p className="text-sm font-semibold text-[#252525]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
