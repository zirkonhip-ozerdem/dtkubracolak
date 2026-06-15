import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/dis-cekimi">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Diş Çekimi"
        lead="Tedavi edilemeyen dişlerin minimal travmayla ve güvenli biçimde çekilmesi."
      />

      <article className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-8 text-[#5d5751]">
            Bir dişi kaybetme fikri ya da diş çekimi koltuğuna oturma düşüncesi pek çok insan için
            endişe verici olabilir; bunun son derece doğal bir duygu olduğunu biliyoruz. Ancak
            modern diş hekimliğinde önceliğimiz her zaman kendi dişinizi kurtarmaktır. Diş çekimi,
            yalnızca dişinizi kurtarmak için tüm tedavi seçeneklerini (dolgu, kanal tedavisi vb.)
            tükettiğimizde başvurduğumuz son çaredir.Bu süreci
            sizin için tamamen ağrısız, konforlu ve stressiz bir deneyime dönüştürmek için en
            güncel teknikleri ve yaklaşımı uyguluyoruz.
          </p>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Bir Dişin Çekilmesi Neden Gerekli Olur?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Bir dişin ağızda kalması, bazen diğer dişlerin ve genel vücut sağlığınızın zarar
              görmesine yol açabilir. En yaygın diş çekimi nedenleri şunlardır:
            </p>
            <ul className="mt-8 space-y-6">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  İleri Derece Çürük ve Harabiyet
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Diş dokusunun, dolgu veya kanal tedavisiyle yeniden restore edilemeyecek kadar
                  büyük bir kısmının çürük nedeniyle kaybedilmiş olması.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  İlerlemiş Diş Eti Hastalıkları
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Dişi çevreleyen kemik ve diş eti dokusunun zayıflaması nedeniyle dişin sallanmaya
                  başlaması ve işlevini yitirmesi.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Gömülü ve Sıkışık Dişler
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Özellikle yirmi yaş dişlerinin (akıl dişleri) çene kemiğine gömülü kalarak
                  ağrıya, kiste veya yandaki sağlıklı dişlerin çürümesine yol açması.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Ortodontik Tedavi İhtiyacı
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Tel veya şeffaf plak tedavilerinde, çenedeki aşırı daralmayı çözmek ve diğer
                  dişlerin düzgün sıralanabilmesi için yer açmak amacıyla yapılan planlı çekimler.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Diş Çekimi Sırasında Canım Acıyacak mı?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Gönül rahatlığıyla söyleyebiliriz ki: Hayır. Günümüzdeki lokal anestezi teknolojileri
              ve yöntemleri sayesinde, işlem sırasında herhangi bir ağrı veya acı hissetmeniz
              mümkün değildir. İşlem esnasında hissedeceğiniz tek şey, sadece hafif bir baskı
              duygusudur.
            </p>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Kliniğimizde, tedaviye başlamadan önce anestezinin tam olarak etki ettiğinden emin
              oluyoruz ve siz kendinizi hazır hissettiğinizde süreci başlatıyoruz. Çekim sonrasında
              hekimimizin size önereceği basit bakım kurallarına ve reçetenize uyduğunuz takdirde,
              iyileşme dönemi de son derece konforlu ve hızlı geçecektir. Amacımız, korkularınızı
              geride bırakarak kliniğimizden rahatlamış ve sağlıklı bir şekilde ayrılmanızı
              sağlamaktır.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
