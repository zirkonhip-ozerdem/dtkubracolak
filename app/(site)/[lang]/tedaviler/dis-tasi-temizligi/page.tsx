import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/dis-tasi-temizligi">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Diş Taşı Temizliği"
        lead="Sertleşmiş bakteri plağının profesyonel yöntemlerle uzaklaştırılması ve diş eti sağlığının korunması."
      />

      <article className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-8 text-[#5d5751]">
            Diş taşı temizliği, dişlerin üzerinde ve diş eti sınırında biriken, zamanla sertleşerek
            kemikleşmiş bakteri plağının (tartarın) profesyonel yöntemlerle uzaklaştırılması
            işlemidir. Günlük fırçalama ve diş ipi kullanımı, ağız sağlığının temelidir; ancak
            fırçanın ulaşamadığı arka dişlerde ve diş aralarında oluşan sertleşmiş tartarları evde
            temizlemek imkansızdır. Kliniğimizde uyguladığımız profesyonel diş taşı temizliği
            sayesinde bu sert birikimler dişlerinize zarar vermeden temizlenir ve diş yüzeyi
            pürüzsüzleştirilir. Böylece hem daha ferah bir nefese hem de sağlıklı diş eti dokusuna
            kavuşursunuz.
          </p>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Taşları Temizlenmezse Ne Olur? (Zararları ve Belirtileri)
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Diş taşları sadece estetik bir sorun değil, sürekli bakteri üreten canlı odaklardır.
              Zamanında temizlenmeyen tartarlar ağız içinde şu zincirleme sorunlara zemin hazırlar:
            </p>
            <ul className="mt-8 space-y-6">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Diş Eti Hastalıkları
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş taşları, üzerlerinde barındırdıkları bakteri ve toksinler nedeniyle diş
                  etlerinde kızarıklık, şişlik ve kronik ağız kokusuna yol açar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Diş Eti Kanamaları
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Özellikle diş fırçalarken veya sert bir şey ısırırken meydana gelen kanamaların
                  en büyük sorumlusu bu birikimlerdir.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Diş Eti Çekilmesi ve Kemik Kaybı
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Temizlenmeyen taşlar zamanla diş etinin altına sızarak diş etinin çekilmesine ve
                  dişi tutan çene kemiğinin erimesine neden olabilir.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Geçmeyen Hassasiyetler
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş taşlarının yarattığı kronik enfeksiyon, dişlerde soğuk ve sıcağa karşı uzayan
                  hassasiyetlerin başlamasını tetikler.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Taşı Temizliği Nasıl Yapılır ve Canım Acır mı?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Diş taşı temizliği, anesteziye bile gerek duyulmayan, son derece konforlu ve kısa
              süren bir koruyucu tedavidir. İşlem sırasında diş minesine asla zarar verilmez ve
              süreç şu adımlarla titizlikle yürütülür:
            </p>
            <ul className="mt-8 space-y-6">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Ultrasonik Temizlik
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  İlk aşamada, diş taşlarını mikro titreşimlerle parçalayan modern ultrasonik
                  cihazlar kullanılır. Bu cihazlar aynı anda su püskürterek hem bölgeyi yıkar hem
                  de tartarları diş yüzeyinden acısız bir şekilde ayırır.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Detaylı El Aletleri (Küretler)
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Cihazların ulaşamadığı dar diş araları ve diş eti hizasındaki en küçük tartar
                  kalıntıları, özel el aletleriyle (küretlerle) incelikle temizlenir.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Polisaj (Cilalama)
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Temizlik sonrasında bakteri plağının dişlere yeniden tutunmasını zorlaştırmak için
                  diş yüzeyleri özel bir pat ve fırça yardımıyla pürüzsüz hale getirilir.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
