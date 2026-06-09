import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/endodonti">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Endodonti"
        lead="Diş özünü etkileyen hastalıkların teşhis ve tedavisinde uzmanlaşmış modern endodontik yaklaşımlar."
        image="/images/site/Endodonti.png"
      />

      <article className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-20">

          <section id="kanal-tedavisi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Kanal Tedavisi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Kanal tedavisi, ileri çürük, kırık veya travma sonucu enfekte olan diş özünün
              (pulpa) temizlenerek kanal sisteminin biyouyumlu dolgu materyaliyle kapatılması
              işlemidir. Ağrıyı giderir ve dişin çekilmeden ağızda kalmasını sağlar.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Rotary Kanal Tedavisi</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Nikel-titanyum döner eğeler kullanılarak kanallar daha hızlı, daha güvenli ve
                  daha az ağrıyla şekillendirilir. Tedavi süresi kısalır, başarı oranı artar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Mikroskop Destekli Kanal</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Dental mikroskop ile kanallar çok daha ayrıntılı görüntülenir; gizli kanallar
                  ve komplikasyonlar erken tespit edilerek tedavi başarısı maksimuma ulaştırılır.
                </p>
              </li>
            </ul>
          </section>

          <section id="apikal-rezeksiyon">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Apikal Rezeksiyon
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Apikal rezeksiyon, kanal tedavisine rağmen kök ucundaki enfeksiyonun iyileşmediği
              durumlarda uygulanan cerrahi bir işlemdir. Kök ucunun küçük bir bölümü alınarak
              enfeksiyon odağı tamamen temizlenir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Ne Zaman Gereklidir?</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Tekrarlayan apse, kanal tedavisi başarısızlığı veya kök ucunda ilaçla
                  geçmeyen kist oluşumlarında tercih edilir.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Uygulama</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Lokal anestezi altında gerçekleştirilen minimal cerrahi müdahaledir. İyileşme
                  süreci genellikle 1–2 hafta içinde tamamlanır.
                </p>
              </li>
            </ul>
          </section>

          <section id="kanal-yenileme">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Kanal Yenileme
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Daha önce kanal tedavisi görmüş ancak şikayetleri devam eden ya da tekrar enfekte
              olan dişlerde mevcut dolgu materyali çıkarılarak kanallar yeniden temizlenir ve
              doldurulur.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Başarı Oranı</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Modern teknikler ve mikroskop desteğiyle yenileme tedavileri yüksek başarı
                  oranına ulaşır; çoğu vakada diş kurtarılabilir.
                </p>
              </li>
            </ul>
          </section>

          <section id="vital-pulpa">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Vital Pulpa Tedavisi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Canlılığını koruyabilen diş özünün tamamını çıkarmak yerine yalnızca hasarlı
              kısmının alınarak özel biyomateryallerle örtüldüğü koruyucu bir yaklaşımdır.
              Özellikle genç daimi dişlerde ve çocuklarda uygulanır.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Pulpa Örtücü (Kaplama)</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Çürük temizlendikten sonra pulpaya yaklaşan ya da açılan noktaya kalsiyum
                  hidroksit veya MTA uygulanarak pulpa yaşatılır.
                </p>
              </li>
            </ul>
          </section>

          <section id="kok-ucu-ameliyati">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Kök Ucu Ameliyatı
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Kök ucundaki kist veya granülom dokusunun cerrahi yolla tamamen uzaklaştırıldığı,
              ardından kök ucunun retrograd dolgu materyaliyle kapatıldığı işlemdir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Endikasyon</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Kanaldan ulaşılamayan kök ucu patolojilerinde, kırık enstrüman varlığında
                  veya kök ucunda anatomik engel bulunan durumlarda tercih edilir.
                </p>
              </li>
            </ul>
          </section>

        </div>
      </article>
    </>
  );
}
