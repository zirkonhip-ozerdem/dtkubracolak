import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler/dis-implanti">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <PageHero
        title="Diş İmplantı"
        lead="Eksik dişlerin titanyum vidalar aracılığıyla kalıcı ve doğal görünümlü bir yapıyla yeniden inşa edilmesi."
      />

      <article className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-8 text-[#5d5751]">
            Diş implantı, çeşitli sebeplerle kaybedilen dişlerin yerine yapılan, hem estetik hem de
            tedavi niteliği taşıyan en modern uygulamadır. Bu işlem, insan vücuduna tamamen uyumlu
            ve hiçbir alerjik tepkiye neden olmayan &quot;titanyum&quot; adı verilen özel vidaların
            çene kemiğine yerleştirilmesiyle başlar. Bu titanyum vidalar, yeni diş kaplamalarınız
            için sarsılmaz birer diş kökü görevi görür. Antalya&apos;daki kliniğimizde, bu güvenli
            malzeme sayesinde eksik dişlerinizi yapaylıktan uzak, tamamen doğal ve sağlam bir yapıyla
            yeniden inşa ediyoruz.
          </p>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              Neden Diş İmplantı? (Estetik ve Fonksiyonel Avantajları)
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Diş eksikliği sadece bir görüntü sorunu değil, aynı zamanda günlük hayatı zorlaştıran
              bir sağlık problemidir. İmplant tedavisinin yaşam konforunuza sağladığı başlıca katkılar
              şunlardır:
            </p>
            <ul className="mt-8 space-y-6">
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Sağlam Dişlerinizin Korunması
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Protez veya köprü gibi eski tedavi seçeneklerinde boşluğun yanındaki sağlıklı
                  dişlerin küçültülmesi gerekirdi. İmplant yönteminde ise komşu dişlerinize asla
                  dokunulmaz, yapısı tamamen korunur.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Günlük Aktivitelerde Tam İyileşme
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  İmplantlar doğrudan kemiğe sabitlendiği için yeme, içme ve konuşma gibi günlük
                  aktivitelerinizi tıpkı kendi doğal dişiniz gibi, hiçbir kayma veya oynama
                  hissetmeden yapmanızı sağlar.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Uzun Ömürlü ve Kalıcı Çözüm
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  İmplant tedavisi sonrası doğru ağız bakımı ve düzenli hekim kontrolleriyle, bu
                  dişleri çok uzun yıllar boyunca güvenle ve sorunsuz bir şekilde kullanabilirsiniz.
                </p>
              </li>
              <li className="border-l-4 border-[#eee8df] pl-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#252525]">
                  Özgüven ve Yüz Estetiği
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6a625b]">
                  Eksilen dişlerin yarattığı boşlukları kapatarak daha rahat gülümsemenizi sağlar,
                  yüz hatlarınızın doğal formunu korur ve sosyal hayatınızdaki özgüveninizi yeniden
                  güçlendirir.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="mb-2 h-px w-16 bg-[#c9a36d]" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525]">
              İmplant Tedavisi Güvenli ve Zor Bir Süreç mi?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              &quot;Çene kemiğine vida yerleştirilmesi&quot; fikri ilk başta endişe yaratsa da,
              titanyum maddesinin biyolojik uyumu sayesinde bu uygulama diş hekimliğindeki en
              güvenli ve başarı oranı en yüksek estetik işlemlerden biridir.
            </p>
            <p className="mt-6 text-base leading-8 text-[#5d5751]">
              Tedavi süreci, eksik dişlerinizin ve çene kemiğinizin durumuna bağlı olarak kişiye
              özel planlanır ancak sanılanın aksine genellikle oldukça hızlı ve konforlu ilerler.
              Lokal anestezi altında yapılan işlem sırasında hiçbir ağrı veya acı hissetmezsiniz.
              Uygulama sonrasındaki iyileşme dönemi ise hekimimizin tavsiyelerine uyulduğu takdirde
              son derece rahat atlatılır. Amacımız, en kısa sürede sizi eski yaşam kalitenize ve
              doyasıya gülebildiğiniz günlere geri kavuşturmaktır.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
