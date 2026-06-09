import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/estetik-dis-hekimligi">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Estetik Diş Hekimliği"
        lead="Gülüşünüzü yeniden tasarlayan, özgüveninizi güçlendiren modern estetik uygulamalar."
        image="/images/site/Estetik-Dis-Hekimligi.png"
      />

      <article className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-20">

          {/* Diş Beyazlatma */}
          <section id="dis-beyazlatma">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Beyazlatma Yöntemleri
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Diş beyazlatma, dişlerin yüzeyinde ya da derinliğinde biriken renk pigmentlerini
              özel kimyasal ajanlar aracılığıyla parçalayarak doğal dişlerinizi birkaç ton daha
              aydınlık bir görünüme kavuşturan estetik bir işlemdir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Ofis Tipi (Lazer) Beyazlatma</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Klinik ortamında yaklaşık 45–60 dakikada tamamlanan, hızlı ve etkili bir
                  yöntemdir. Yoğun beyazlatma jeli ile mavi LED ya da lazer ışığı birlikte
                  uygulanır; tek seansta 3–8 ton açılma sağlanabilir.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Ev Tipi Beyazlatma</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş hekiminizin ağzınıza özel hazırladığı plak ve düşük konsantrasyonlu jel ile
                  evde, günde 4–8 saat uygulanır. 10–14 günde kademeli ve kalıcı bir beyazlık elde
                  edilir.
                </p>
              </li>
            </ul>
          </section>

          {/* Gülüş Tasarımı */}
          <section id="gulus-tasarimi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Gülüş Tasarımı
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Gülüş tasarımı; diş rengi, şekli, boyutu, diş eti çizgisi ve yüz oranları bir arada
              değerlendirilerek size özgü mükemmel bir gülüşün planlandığı bütüncül bir estetik
              yaklaşımdır. Dijital simülasyon ile tedavi öncesinde sonucu görebilirsiniz.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Dijital Gülüş Analizi</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Fotoğraf ve dijital yazılım kullanılarak yüzünüze özel gülüş simülasyonu
                  oluşturulur. Tedaviye başlamadan önce beklenen sonucu görsel olarak
                  değerlendirmenizi sağlar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Mock-Up Uygulaması</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Geçici bir materyal ile tasarlanan gülüşün ağzınızda deneme uygulaması yapılır;
                  onayladıktan sonra kalıcı restorasyon aşamasına geçilir.
                </p>
              </li>
            </ul>
          </section>

          {/* Bonding */}
          <section id="bonding">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Bonding Uygulaması
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Kompozit bonding, diş rengine uygun özel reçine materyalinin dişe doğrudan
              uygulanmasıyla kırıkları, çatlakları, renk farklılıklarını ve şekil bozukluklarını
              tek seansta gideren hızlı ve ekonomik bir estetik yöntemdir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Tek Seans Uygulama</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş traşlaması gerektirmez, anestezi çoğunlukla ihtiyaç duyulmaz. Ortalama
                  30–60 dakikada tamamlanır ve hemen estetik sonuç elde edilir.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Kullanım Alanları</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Kırık veya çatlak dişler, diastema (diş arası boşluk) kapatma, renk
                  farklılıkları, küçük veya düzensiz dişlerin şekillendirilmesi.
                </p>
              </li>
            </ul>
          </section>

          {/* Inley/Onley */}
          <section id="inley-onley">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Inley / Onley Porselen Dolgu
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Inley ve onley dolgular; büyük çürük ya da kırıklarda, laboratuvarda özel olarak
              üretilen porselen veya zirkonyum parçaların dişe yapıştırılmasıyla uygulanan,
              geleneksel dolgulardan çok daha dayanıklı ve estetik bir restorasyon yöntemidir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Inley</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Dişin tümsek (hörgüç) bölgelerini kapsamayan, yalnızca diş oyuğu içine yerleştirilen
                  dolgu restorasyon türüdür.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Onley</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Bir ya da birden fazla tümseği de örten, daha kapsamlı hasar için tercih edilen
                  restorasyon türüdür. Tam kaplama gerektirmeyen durumlarda diş dokusunu maksimum
                  düzeyde korur.
                </p>
              </li>
            </ul>
          </section>

          {/* Laminate */}
          <section id="laminate">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Laminate Porselen Kaplama
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Laminate veneer, dişin ön yüzeyine ultra ince (0,3–0,5 mm) porselen plakların
              yapıştırıldığı, minimum diş traşlamasıyla maksimum estetik sonuç sunan bir
              uygulamadır. "Porselen tırnak" olarak da bilinir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Kimler İçin Uygundur?</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Renk bozukluğu, şekil ve boyut düzensizliği, hafif çapraşıklık, diş arası
                  boşluklar veya kırık dişlerde tercih edilir. Doğal diş dokusu büyük ölçüde
                  korunur.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Dayanıklılık ve Ömür</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Doğru bakım ve düzenli kontrol ile 15–20 yıl kullanılabilir. Porselen, lekelere
                  karşı dirençlidir; rengi zamanla değişmez.
                </p>
              </li>
            </ul>
          </section>

          {/* Zirkonyum */}
          <section id="zirkonyum">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Zirkonyum Diş Kaplama
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Zirkonyum, metal alt yapı içermeyen, ışık geçirgenliği yüksek ve doğal diş
              görünümüne en yakın kaplama malzemesidir. Hem ön hem arka dişlerde güvenle
              kullanılabilir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Tam Seramik Estetik</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Metal içermediğinden diş etinde kararmaya veya metalik yansımaya yol açmaz.
                  Işık geçirgenliği sayesinde doğal diş dokusunu taklit eder.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Yüksek Dayanım</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Zirkonyum dioksit malzemesi son derece dayanıklıdır; çiğneme kuvvetlerine
                  karşı kırılma riski minimaldir. Uzun ömürlü ve güvenilir bir çözümdür.
                </p>
              </li>
            </ul>
          </section>

        </div>
      </article>
    </>
  );
}
