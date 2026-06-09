import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/dis-dolgusu">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Diş Dolgusu"
        lead="Çürük ve hasarlı dişlerin dişin kendi rengine uyumlu estetik dolgularla onarılması."
      />

      <article className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-8 text-[#5d5751]">
            Diş dolgusu, ilerleyen bir çürüğün dişinizi tamamen kaybetmenize yol açmasını engelleyen
            en temel ve en etkili koruyucu tedavidir. Eskiden yapılan ve estetik açıdan gri/siyah
            görünen dolguların aksine, günümüzde tamamen dişinizin kendi rengine uyumlu, dışarıdan
            bakıldığında asla fark edilmeyen estetik kompozit (beyaz) dolgular kullanıyoruz.
            Antalya&apos;daki kliniğimizde amacımız, sadece çürüğü temizlemek değil; dişinizi eski
            sağlığına, gücüne ve tamamen doğal görünümüne kavuşturmaktır.
          </p>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Dolgusuna Ne Zaman İhtiyaç Duyulur?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Diş yapısı kendi kendini yenileyemediği için oluşan hasarların mutlaka profesyonel bir
              dokunuşla onarılması gerekir. En yaygın dolgu nedenleri şunlardır:
            </p>
            <ul className="mt-8 space-y-6">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  İlerleyen Diş Çürükleri
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Yiyecek artıklarının ve bakterilerin zamanla diş minesini eriterek dişin iç
                  tabakalarına doğru ilerlemesi.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Hafif Kırıklar ve Çatlaklar
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Kaza, darbe ya da sert bir cisim ısırma sonucu diş yüzeyinde oluşan, ağrıya veya
                  estetik kaygıya yol açan küçük hasarlar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Diş Aşınmaları
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş gıcırdatma (bruksizm) ya da çok sert fırçalama nedeniyle dişlerin çiğneme
                  yüzeylerinde veya boyun kısımlarında meydana gelen doku kayıpları.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Eski Dolguların Yenilenmesi
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Zamanla aşınan, sızdıran, kırılan ya da estetik olarak hastayı rahatsız eden eski
                  (özellikle gri) dolguların değiştirilmesi ihtiyacı.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Dolgu Yapılırken ve Sonrasında Acı Hissedilir mi?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Kesinlikle endişe etmenize gerek yok. Dolgu işlemi, lokal anestezi altında yapıldığı
              için tamamen ağrısız ve konforlu bir süreçtir. İşlem sırasında çürük bölge titizlikle
              temizlenirken hiçbir şey hissetmezsiniz.
            </p>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Tedavi sonrasında, özellikle derin çürüklerde, dişin kendini toparlama sürecinde birkaç
              gün hafif bir sıcak-soğuk hassasiyeti olması son derece normaldir. Kliniğimizde
              kullandığımız modern ve kaliteli dolgu malzemeleri, diş dokusuna mükemmel uyum
              sağlayarak bu hassasiyet süresini minimuma indirir. Kısa süren tek bir seansın ardından,
              dişinizi güvenle kullanmaya ve doyasıya gülümsemeye hemen devam edebilirsiniz.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
