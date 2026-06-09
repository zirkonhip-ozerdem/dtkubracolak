import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/pedodonti">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Pedodonti"
        lead="Çocukların ağız ve diş sağlığını koruyarak sağlıklı bir gülüşle büyümelerini destekleyen uzman çocuk diş hekimliği."
        image="/images/site/pedodonti.png"
      />

      <article className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-20">

          <section id="cocuk-dis-muayenesi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Çocuk Diş Muayenesi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Çocuklarda ilk diş muayenesinin ilk süt dişinin çıkmasıyla birlikte, en geç
              1 yaşında yapılması önerilir. Erken muayeneler; çürük riskini belirler, doğru
              beslenme ve diş fırçalama alışkanlıklarının kazandırılmasına rehberlik eder.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Periyodik Kontrol</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  6 ayda bir yapılan rutin kontroller; çürüklerin, diş gelişim bozukluklarının
                  ve çene yapısındaki anormalliklerin erken evrede tespit edilmesini sağlar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Diş Hekimi Korkusunun Önlenmesi</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Çocukların küçük yaşta diş hekimiyle tanışması, ilerleyen dönemlerde diş
                  hekimi korkusu yaşamamalarına önemli ölçüde katkı sağlar.
                </p>
              </li>
            </ul>
          </section>

          <section id="sut-disi-dolgusu">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Süt Dişi Dolgusu
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Süt dişleri geçici olsa da çiğneme fonksiyonu, konuşma gelişimi ve daimi
              dişlerin doğru konumlanması açısından son derece önemlidir. Çürüyen süt
              dişleri mutlaka tedavi edilmelidir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Kompozit Dolgu</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş rengiyle uyumlu, estetik kompozit dolgu materyali çocuklarda da
                  güvenle kullanılır. Çürük doku temizlendikten sonra hızla uygulanır.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Paslanmaz Çelik Kron</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Büyük çürüklerde ya da kanal tedavisi sonrasında süt dişini daimi dişin
                  çıkışına kadar korumak için hazır paslanmaz çelik kronlar kullanılır.
                </p>
              </li>
            </ul>
          </section>

          <section id="cocuk-kanal-tedavisi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Çocuk Kanal Tedavisi
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Süt dişlerinde çürük pulpaya ulaştığında ya da daimi dişlerde henüz kök gelişimi
              tamamlanmamışken uygulanan özel endodontik işlemlerdir. Amaç dişi korumak
              ve normal gelişimi sürdürmektir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Pulpotomi (Süt Dişi)</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Yalnızca tacın (koronal) pulpa dokusunun alınarak kalan kök pulpasının
                  korunduğu işlemdir. Süt azı dişlerinde sıklıkla uygulanır.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Apeksifikasyon (Daimi Diş)</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Kök ucu gelişimi tamamlanmamış genç daimi dişlerde kök ucunun
                  biyomateryallerle kapatılarak dişin kurtarıldığı işlemdir.
                </p>
              </li>
            </ul>
          </section>

          <section id="fissur-oturucu">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Fissür Örtücü
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Arka dişlerin çiğneme yüzeyindeki derin oyuk ve çatlaklara (fissür) ince bir
              koruyucu materyal uygulanarak bakteri ve besin artıklarının birikmesi engellenir.
              Çürük riskini belirgin şekilde azaltan etkili bir önleyici tedavidir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Ne Zaman Uygulanır?</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  6 yaş dişleri ile 12 yaş dişleri çıktıktan kısa süre sonra uygulanması
                  en verimli sonucu verir. İşlem ağrısızdır ve çok kısa sürer.
                </p>
              </li>
            </ul>
          </section>

          <section id="flor-uygulamasi">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Flor Uygulaması
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Flor, diş mine dokusunu güçlendirerek çürüklere karşı direncini artıran doğal
              bir mineraldir. Klinik flor uygulaması; jel, vernik veya solüsyon formunda
              doğrudan dişlere uygulanır ve evde kullanılan diş macunundan çok daha yüksek
              konsantrasyonda etki gösterir.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">Uygulama Sıklığı</p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Çürük riski yüksek çocuklarda 3–6 ayda bir; düşük riskli çocuklarda yılda
                  bir uygulanması önerilir. İşlem ağrısızdır ve birkaç dakikada tamamlanır.
                </p>
              </li>
            </ul>
          </section>

        </div>
      </article>
    </>
  );
}
