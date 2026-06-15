import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/periodontoloji">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Periodontoloji"
        lead="Diş eti ve çevre dokuların sağlığını koruyan, hastalıkları erken teşhis edip tedavi eden uzman yaklaşımlar."
        image="/images/site/periodontoloji.webp"
      />

      <article className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-20">

          <section id="dis-eti-hastaliklari">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Eti Hastalıkları Tedavisi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Gingivitis ve periodontitis başta olmak üzere diş eti hastalıkları; kanama,
              şişlik ve kötü koku gibi belirtilerle kendini gösterir. Erken teşhis ve doğru
              tedavi ile diş ve kemik kaybı önlenebilir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Gingivitis</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş etinin yüzeysel iltihabıdır; profesyonel temizlik ve düzenli ağız
                  hijyeniyle tamamen iyileşebilir. Tedavi edilmezse periodontitise ilerler.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Periodontitis</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Enfeksiyonun diş eti altındaki kemik ve bağ dokusuna yayılmasıdır. Derin
                  cep temizliği (küretaj) ile kontrol altına alınır; ileri vakalarda cerrahi
                  gerekebilir.
                </p>
              </li>
            </ul>
          </section>

          <section id="dis-eti-cerrahisi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Eti Cerrahisi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              İlaç veya diş taşı temizliğiyle giderilemeyen ileri periodontitis vakalarında,
              dişeti cerrahi yolla düzenlenerek enfeksiyon odakları tamamen temizlenir ve
              sağlıklı diş eti profili yeniden oluşturulur.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Flep Operasyonu</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş eti açılarak derin ceplerdeki tartar ve enfekte doku temizlenir; kök
                  yüzeyleri düzleştirilir. Hem tedavi hem de estetik iyileştirme sağlar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Gingivektomi</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Aşırı büyümüş veya sağlıksız diş eti dokusunun alınarak diş eti hattının
                  yeniden şekillendirilmesidir. Hem işlevsel hem estetik amaçlı uygulanır.
                </p>
              </li>
            </ul>
          </section>

          <section id="kemik-grefti">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Kemik Grefti
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Periodontitis veya diş çekimi sonucu kaybedilen çene kemiğinin sentetik, allogreft
              veya otojen greft materyalleriyle yeniden oluşturulduğu rejeneratif bir işlemdir.
              Hem periodontolojik hem de implant öncesi uygulanabilir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">GBR (Yönlendirilmiş Kemik Rejenerasyonu)</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Greft materyalinin üzerine özel bir membran yerleştirilerek yumuşak dokunun
                  kemik bölgesine girmesi engellenir; kemik hücrelerinin bölgeye yerleşmesi
                  desteklenir.
                </p>
              </li>
            </ul>
          </section>

          <section id="gingival-greft">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Gingival Greft
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Diş köklerinin açıkta kalmasına yol açan diş eti çekilmelerinde, genellikle
              damaktan alınan ince doku parçasının ilgili bölgeye nakledildiği işlemdir. Hem
              hassasiyeti giderir hem de dişeti estetiğini düzeltir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Bağ Dokusu Grefti</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  En sık tercih edilen yöntemdir; damak mukozasının altındaki bağ doku alınarak
                  çekilme olan bölgeye yerleştirilir. Estetik ve fonksiyonel sonuçları mükemmeldir.
                </p>
              </li>
            </ul>
          </section>

          <section id="implant-cevresi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              İmplant Çevresi Tedavi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              İmplant çevresinde gelişen iltihabi durumların (periimplantitis) erken tanı ve
              tedavisiyle implantın uzun ömürlülüğü güvence altına alınır. Periodontoloji ve
              implantoloji uzmanlığını birleştiren bir yaklaşımdır.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Periimplantitis</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  İmplant çevresindeki kemik ve yumuşak doku kaybıyla seyreden iltihabi
                  durumdur. Mekanik temizlik, antibiyotik tedavisi ve gerekirse cerrahi ile
                  kontrol altına alınır.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Düzenli İmplant Kontrolü</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  6 ayda bir yapılan periyodik kontroller, implant çevresi sağlığının
                  korunmasında en kritik adımdır.
                </p>
              </li>
            </ul>
          </section>

        </div>
      </article>
    </>
  );
}
