import { type Dictionary } from "@/lib/i18n";
import { ShieldCheck, Cpu, Heart, Award, CheckCircle2, Star } from "lucide-react"; 
import { PageHero } from "@/components/shared/PageHero";
import Image from "next/image";

type AboutPageProps = {
  dictionary: Dictionary;
};

export default function AboutPage({ dictionary }: AboutPageProps) {
  const t = dictionary.about;

  // storyTitle metnini ":" işaretine göre ikiye bölüyoruz
  const titleParts = t?.storyTitle ? String(t.storyTitle).split(":") : [];
  const doctorName = titleParts[0]?.trim() || "Dt. Kübra Çolak";
  const doctorSlogan = titleParts[1]?.trim() || "Gülüşünüzdeki Sağlık ve Estetik";

  return (
    <main className="bg-[#faf9f6] text-[#1a1a1a] min-h-screen pb-20">
      
      {/* BAŞLIK ALANI (HERO) */}
      <PageHero title={t?.title || "Hakkımda"} lead={t?.lead || ""} />

      {/* FOTOĞRAFLI HİKAYE ALANI */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Sol Taraf: Fotoğraf */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f3eee7]">
            <Image
              src="/images/site/smile-consultation.png"
              alt={t?.title || "Dt. Kübra Çolak"}
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          
          {/* Sağ Taraf: Detaylı Hikaye Girişi */}
          <div className="self-center">
            <p className="mb-4 h-px w-16 bg-[#c9a36d]" />
            
            {/* BAŞLIK BURADA İKİYE BÖLÜNÜP ALT ALTA ŞIKÇA DİZİLİYOR */}
            <h2 className="flex flex-col gap-1 text-3xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              <span>{doctorName}</span>
              <span className="mt-1 font-serif text-xl font-medium normal-case tracking-normal text-[#c9a36d]">
                {doctorSlogan}
              </span>
            </h2>
            
            <p className="mt-6 text-base leading-8 text-[#5d5751] whitespace-pre-line">
              {t?.story}
            </p>
          </div>
        </div>
      </section>

      {/* MİSYON & VİZYON BÖLÜMÜ */}
      <section className="max-w-7xl mx-auto px-6 mt-16 grid gap-8 md:grid-cols-2 lg:px-8">
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:border-[#c9a36d]/30 transition group">
          <div className="h-12 w-12 rounded-xl bg-[#c9a36d]/10 flex items-center justify-center text-[#c9a36d] group-hover:bg-[#c9a36d] group-hover:text-white transition-all duration-300">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-serif tracking-wide text-[#1a1a1a]">
            {t?.missionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#525252] leading-6 font-light">
            {t?.missionText}
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:border-[#c9a36d]/30 transition group">
          <div className="h-12 w-12 rounded-xl bg-[#c9a36d]/10 flex items-center justify-center text-[#c9a36d] group-hover:bg-[#c9a36d] group-hover:text-white transition-all duration-300">
            <Cpu className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-serif tracking-wide text-[#1a1a1a]">
            {t?.visionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#525252] leading-6 font-light">
            {t?.visionText}
          </p>
        </div>
      </section>

      {/* 3'LÜ DEĞERLER / KALİTE KARTLARI */}
      <section className="max-w-7xl mx-auto px-6 mt-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Kart 1 */}
          <div className="bg-white border border-black/5 p-6 rounded-xl space-y-3 shadow-2xs">
            <div className="flex items-center gap-3 text-[#c9a36d]">
              <ShieldCheck className="h-5 w-5 flex-shrink-0" />
              <h3 className="font-medium text-sm sm:text-base">{t?.ethicsTitle}</h3>
            </div>
            <p className="text-xs text-[#6b6b6b] leading-5 font-light">{t?.ethicsDesc}</p>
          </div>

          {/* Kart 2 */}
          <div className="bg-white border border-black/5 p-6 rounded-xl space-y-3 shadow-2xs">
            <div className="flex items-center gap-3 text-[#c9a36d]">
              <Cpu className="h-5 w-5 flex-shrink-0" />
              <h3 className="font-medium text-sm sm:text-base">{t?.digitalTitle}</h3>
            </div>
            <p className="text-xs text-[#6b6b6b] leading-5 font-light">{t?.digitalDesc}</p>
          </div>

          {/* Kart 3 */}
          <div className="bg-white border border-black/5 p-6 rounded-xl space-y-3 shadow-2xs sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 text-[#c9a36d]">
              <Heart className="h-5 w-5 flex-shrink-0" />
              <h3 className="font-medium text-sm sm:text-base">{t?.comfortTitle}</h3>
            </div>
            <p className="text-xs text-[#6b6b6b] leading-5 font-light">{t?.comfortDesc}</p>
          </div>

        </div>
      </section>

      {/* YENİLENEN İKİLİ DETAY BÖLÜMÜ */}
      <section className="max-w-7xl mx-auto px-6 mt-16 lg:px-8">
        <div className="bg-white rounded-3xl border border-black/5 shadow-xs overflow-hidden grid lg:grid-cols-12">
          
          {/* Sol Taraf: Neden Dt. Kübra Çolak? */}
          <div className="p-8 sm:p-12 lg:col-span-7 space-y-4 border-b lg:border-b-0 lg:border-r border-black/5">
            <h2 className="text-2xl font-serif text-[#1a1a1a]">
              {t?.whyTitle || "Neden Biz?"}
            </h2>
            <div className="h-0.5 w-12 bg-[#c9a36d]"></div>
            
            <ul className="space-y-4 pt-4">
              {Array.isArray(t?.whyItems) &&
                (t.whyItems as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#4a4a4a]">
                    <Star className="h-4 w-4 text-[#c9a36d] mt-1 flex-shrink-0 fill-[#c9a36d]/20" />
                    <span className="font-light leading-6">{String(item)}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Sağ Taraf: Çalışma Alanları Listesi */}
          <div className="p-8 sm:p-12 lg:col-span-5 bg-[#faf9f6]/50 space-y-4">
            <h3 className="text-lg font-serif text-[#1a1a1a]">
              {t?.areasTitle}
            </h3>
            <p className="text-xs text-[#737373] leading-5 font-light">
              {t?.areasLead}
            </p>
            <ul className="space-y-3 pt-2">
              {Array.isArray(t?.areas) &&
                (t.areas as string[]).map((area, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#3a3a3a]">
                    <CheckCircle2 className="h-4 w-4 text-[#c9a36d] mt-0.5 flex-shrink-0" />
                    <span className="font-light">{String(area)}</span>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
