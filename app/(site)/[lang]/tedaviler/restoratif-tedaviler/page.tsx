import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/restoratif-tedaviler">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Restoratif Tedaviler"
        lead="Hasar görmüş ya da kaybedilen dişlerin fonksiyon ve estetiğini yeniden kazandıran kapsamlı tedavi seçenekleri."
        image="/images/site/clinic-room.png"
      />

      <article className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-20">

          {/* Diş Dolgusu */}
          <section id="dis-dolgusu">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Dolgusu
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Diş dolgusu, çürük ya da kırık nedeniyle bütünlüğü bozulan dişin temizlenerek
              kompozit reçine, amalgam veya seramik gibi uygun bir materyal ile onarılması
              işlemidir. Diş dokusunu korurken çiğneme fonksiyonunu tam olarak yeniden sağlar.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Kompozit (Beyaz) Dolgu</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş rengiyle uyumlu reçine bazlı dolgu materyalidir. Hem ön hem arka dişlerde
                  uygulanabilir; estetik açıdan en çok tercih edilen dolgu türüdür.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Seramik / Porselen Dolgu</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Laboratuvarda üretilen, son derece dayanıklı ve renk stabilitesi yüksek dolgulardır.
                  Büyük çürüklerde inley/onley olarak uygulanır.
                </p>
              </li>
            </ul>
          </section>

          {/* Kanal Tedavisi */}
          <section id="kanal-tedavisi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Kanal Tedavisi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Kanal tedavisi; derin çürük, kırık veya travma sonucu enfekte olan ya da ölen diş
              özünün (pulpa) temizlenerek kanal sisteminin özel dolgu materyaliyle kapatıldığı
              işlemdir. Dişin çekilmeden ağızda tutulmasını sağlar.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Tek Seansta Kanal</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Uygun vakalarda enfeksiyon ve semptomlar tek seansta tamamen giderilir; hasta
                  aynı gün tedavisini tamamlar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Ağrısız Uygulama</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Modern anestezi teknikleri sayesinde kanal tedavisi sırasında ağrı hissedilmez.
                  İşlem sonrası hafif hassasiyet birkaç gün içinde geçer.
                </p>
              </li>
            </ul>
          </section>

          {/* Diş Çekimi */}
          <section id="dis-cekimi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Çekimi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Diş çekimi; iyileşme şansı kalmayan, ileri çürük veya enfeksiyonlu dişlerin ya da
              gömülü yirmi yaş dişlerinin lokal anestezi altında güvenle alınması işlemidir.
              Mümkün olan her durumda doğal dişin korunması öncelikli hedefimizdir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Basit Çekim</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş etinin üzerinde görünen, erüpte dişlerin çekimidir. Lokal anestezi ile
                  kısa sürede ve ağrısız gerçekleştirilir.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Cerrahi Çekim (Gömülü Diş)</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Kısmen veya tamamen kemik içinde kalan dişlerin küçük bir cerrahi müdahaleyle
                  alınmasıdır. Gömülü yirmi yaş dişleri bu yöntemle güvenle çekilir.
                </p>
              </li>
            </ul>
          </section>

          {/* Protez Diş */}
          <section id="protez-dis">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Protez Diş
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Protez diş uygulamaları; tek diş eksikliğinden tüm dişlerin kaybına kadar her
              durumda çiğneme fonksiyonunu ve estetiği yeniden sağlayan sabit ya da hareketli
              çözümler sunar.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Sabit Protez (Köprü)</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Eksik diş veya dişlerin yanındaki sağlam dişlere dayandırılarak yapılan sabit
                  restorasyondur. Çıkarılmaz; doğal diş gibi hissettiren kalıcı bir çözümdür.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Hareketli Protez</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Kısmi veya tam dişsizlikte tercih edilen, hasta tarafından takılıp çıkarılabilen
                  protezlerdir. Modern materyallerle üretilerek konfor ve estetik en üst düzeye
                  taşınmıştır.
                </p>
              </li>
            </ul>
          </section>

          {/* Zirkonyum Kaplama */}
          <section id="zirkonyum-kaplama">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Zirkonyum Kaplama
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Zirkonyum kaplama; metal alt yapı içermeyen, doğal dişe en yakın ışık geçirgenliğini
              sunan seramik bir restorasyon yöntemidir. Hem fonksiyon hem de estetik açıdan
              üstün sonuçlar verir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Metal İçermez</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Metalik alt yapı olmadığı için diş etinde kararma veya metalik renk yansıması
                  görülmez. Alerjik reaksiyon riski minimaldır.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Uzun Ömürlü Dayanım</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Zirkonyum dioksit malzemesi kırılmaya karşı son derece dirençlidir. Düzenli
                  kontrol ile 15 yıl ve üzeri sorunsuz kullanım sağlanabilir.
                </p>
              </li>
            </ul>
          </section>

        </div>
      </article>
    </>
  );
}
