import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/dis-beyazlatma">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Diş Beyazlatma"
        lead="Profesyonel yöntemlerle renk tonunu aydınlatma ve gülüş estetiğini geliştirme."
      />

      <article className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-8 text-[#5d5751]">
            Güzel bir gülüş, karşınızdaki insanla kurduğunuz ilk bağın en güçlü parçasıdır.
            Zamanla dişlerinizin parlaklığını kaybetmesi son derece doğaldır; ancak bu durumun
            kalıcı olması gerekmez. Evde denenen kulaktan dolma yöntemler veya market ürünleri
            genellikle diş minesini aşındırır ya da yetersiz sonuç verir. Dişlerinizin biyolojik yapısına zarar vermeden, sadece size özel
            planlanan profesyonel yöntemlerle dişlerinizi güvenle beyazlatıyor ve yüzünüze en çok
            yakışan doğal tonuna ulaştırıyoruz.
          </p>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Dişler Parlaklığını Neden Kaybeder?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Dişlerin renk değiştirmesi sadece temizlikle ilgili değil, yaşamın doğal akışıyla da
              ilgilidir. Kliniğimizde en sık karşılaştığımız renk değişimi nedenleri şunlardır:
            </p>
            <ul className="mt-8 space-y-6">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Günlük Alışkanlıklar
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Gün içinde keyifle tüketilen koyu çaylar, filtre kahveler, asitli içecekler ve
                  renkli soslar zamanla diş minesindeki gözeneklere işler.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Tütün Ürünleri
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Sigara ve diğer tütün içerikli ürünler, diş yüzeyine çok güçlü tutunan ve
                  fırçalamayla geçmeyen inatçı nikotin lekeleri bırakır.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Yetersiz veya Yanlış Bakım
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Düzenli fırçalansa bile diş taşlarının birikmesi, dişlerin daha koyu ve mat
                  görünmesine yol açar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Genetik Yapı ve Çocukluk Dönemi
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Bazı kişilerin diş minesi doğuştan daha koyu tonlardadır. Ayrıca çocukluk
                  yaşlarında kullanılan bazı ağır antibiyotikler, dişin iç yapısında renk
                  değişimine neden olabilir.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Bu İşlem Diş Minesine Zarar Verir mi?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Hastalarımızın en çok merak ettiği konulardan biri budur: Diş beyazlatma kesinlikle
              güvenli bir işlemdir, ancak tek bir şartla; uzman bir diş hekiminin gözetiminde
              yapılması.
            </p>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Kliniğimizde kullandığımız beyazlatma jelleri ve ışık sistemleri, diş etlerinizi
              tamamen korumaya alacak özel bariyerlerle uygulanır. İşlem sırasında veya
              sonrasındaki ilk 24 saat içinde hafif bir sızlama ya da hassasiyet hissetmeniz
              normaldir. Bu durum, diş minesinin geçici olarak neme ihtiyaç duymasından kaynaklanır
              ve kısa sürede tamamen kaybolur. Amacımız, koltuğumuzdan hem sağlıklı hem de içinize
              sinen bir gülüşle kalkmanızı sağlamaktır.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
