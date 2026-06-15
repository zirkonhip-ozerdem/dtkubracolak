import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/kanal-tedavisi">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Kanal Tedavisi"
        lead="Enfekte diş pulpasının temizlenerek dişin ağızda korunmasını sağlayan endodontik tedavi."
      />

      <article className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-8 text-[#5d5751]">
            Kanal tedavisi (endodontik tedavi), dişin merkezinde bulunan ve &quot;pulpa&quot; olarak
            adlandırılan canlı damar-sinir paketinin iltihaplanması veya enfekte olması durumunda
            uygulanan, dişi ağızda tutmayı amaçlayan çok önemli bir tedavidir. Pek çok insan kanal
            tedavisinden korksa da, bu işlemin asıl amacı ağrıyı durdurmak ve dişi çekmek yerine,
            onun uzun vadeli olarak işlevini sürdürebilecek hale getirmektir. Kliniğimizde kök
            kanalları özel ve hassas cihazlarla titizlikle temizlenir, dezenfekte edilir ve
            biyouyumlu dolgu maddeleriyle sızdırmaz şekilde doldurularak dişinizin hem fonksiyonu
            hem de estetiği başarıyla korunur.
          </p>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Hangi Durumlarda Kanal Tedavisi Gerekir?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Dişinizin içindeki canlı dokunun zarar gördüğünü gösteren ve vakit kaybetmeden
              müdahale edilmesi gereken başlıca belirtiler şunlardır:
            </p>
            <ul className="mt-8 space-y-6">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Derin Diş Çürükleri
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Zamanında tedavi edilmeyen çürüklerin dişin sinirlerine kadar ilerlemesi.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Diş Travmaları ve Çatlaklar
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Darbe veya kaza sonucu dişte oluşan gözle görülmeyen çatlakların sinir dokusunu
                  tahriş etmesi.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Gece Ağrısı ve Spontan Ağrılar
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Durup dururken, özellikle geceleri zonklama şeklinde kendi kendine başlayan
                  şiddetli diş ağrıları.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Uzun Süren Hassasiyet
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Sıcak veya soğuk bir şey yiyip içtikten sonra geçmeyen, dakikalarca sızlamaya
                  devam eden hassasiyet durumu.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Diş Etindeki Şişlikler (Apseler)
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş kökünün ucunda enfeksiyon birikmesi sonucu diş eti üzerinde oluşan küçük
                  şişlikler veya sivilce benzeri yapılar.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Kanal Tedavisi Zor ve Ağrılı Bir İşlem midir?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Halk arasında kanal tedavisinin çok ağrılı bir işlem olduğuna dair yanlış bir inanış
              vardır. Aksine, kanal tedavisi mevcut ağrınızı sonlandırmak için yapılır. İşlem,
              gelişmiş lokal anestezi teknikleri altında gerçekleştirildiği için tamamen ağrısız ve
              konforlu bir şekilde tamamlanır.
            </p>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Kliniğimizde, kanal tedavisinin başarı oranını en üst seviyeye çıkarmak ve
              hastalarımıza zaman kazandırmak için modern teknolojilerden yararlanıyoruz. Kök
              kanallarının en ince ayrıntısına kadar incelenmesini sağlayan mikroskop sistemleri,
              dijital röntgenler, lazer dezenfeksiyon yöntemleri ve sonik-ultrasonik cihazlar
              sayesinde tedavi süreci hem çok daha güvenli hem de hasta için son derece konforlu
              geçer. Amacımız, kendi dişinizin doğal yapısını koruyarak sizi sağlığınıza yeniden
              kavuşturmaktır.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
