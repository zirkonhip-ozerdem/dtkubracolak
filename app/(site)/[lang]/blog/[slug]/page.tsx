import { notFound } from "next/navigation";
import { isLocale, type Locale, getDictionary, blogPosts } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";
import Image from "next/image"; // Görsel optimizasyonu için eklendi
import { Calendar, User, ChevronLeft } from "lucide-react";

interface BlogPostDetailPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export default async function BlogPostDetailPage({ params }: BlogPostDetailPageProps) {
  const { lang, slug } = await params;

  // 1. Dil validasyonu
  if (!isLocale(lang)) {
    notFound();
  }

  const currentLang = lang as Locale;
  const dictionary = getDictionary(currentLang);

  // 2. İlgili blog yazısını bul
  const post = blogPosts.find((p) => p.slug === slug);

  // Bakanlık mevzuatına uygun, güvenli başlıklar ve anahtarlar
  const title = post?.title?.[currentLang] || (currentLang === "tr" ? "İzmir Balçova'da Gülüş Tasarımı Yaklaşımları" : "Smile Design in Izmir Balçova");
  const excerpt = post?.excerpt?.[currentLang] || "";
  
  // ✨ TypeScript kızarıklığını engellemek için (post as any) şeklinde güvenli cast uygulandı
  const featuredImage = (post as any)?.image || "/images/site/smile-consultation.png";

  // DİLLERE GÖRE SAĞLIK MEVZUATINA UYGUN TASLAK İÇERİK
  let sampleContent = null;

  if (currentLang === "tr") {
    sampleContent = (
      <>
        <p className="text-base sm:text-lg leading-8 text-[#4a4a4a] mb-6 font-light">
          Modern diş hekimliği, sadece fonksiyonel tedavileri değil, aynı zamanda bireyin yüz hatlarıyla uyumlu, doğal ve estetik bir gülüş planlamasını da hedefler. Dijital gülüş tasarımı protokolleri, hastalarımızın tedavi planlamasını henüz sürece başlamadan görselleştirmeye yardımcı olmaktadır.
        </p>
        
        <h3 className="text-xl sm:text-2xl font-serif text-[#252525] mt-10 mb-4">Gülüş Tasarımında Hangi Yöntemler Kullanılır?</h3>
        <p className="text-base leading-8 text-[#5d5751] mb-6 font-light">
          Kişiye özel bir gülüş tasarımı oluşturulurken tek bir materyal veya yönteme bağlı kalınmaz. Hastanın dudak yapısı, diş eti seviyesi ve yüz simetrisi incelenerek şu dijital ve biyomimetik yaklaşımlardan faydalanılır:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-[#5d5751] mb-8 font-light">
          <li><strong>Zirkonyum Kaplamalar:</strong> Yüksek ışık geçirgenliği ile doğal dişe yakın estetik ve dayanıklılık sunar.</li>
          <li><strong>Porselen Laminalar (Yaprak Diş):</strong> Diş dokusuna minimum müdahale ile uygulanan estetik çözümlerdir.</li>
          <li><strong>Bonding Uygulamaları:</strong> Kompozit materyallerle diş aralarındaki boşlukların tek seansta düzeltilmesi sürecidir.</li>
        </ul>

        <blockquote className="border-l-4 border-[#c9a36d] bg-[#faf9f6] p-5 my-8 rounded-r-sm italic text-[#5d5751]">
          "Biyomimetik yaklaşımın temeli, doğal diş dokusunu koruyarak doğanın sunduğu estetiği desteklemektir."
        </blockquote>

        <h3 className="text-xl sm:text-2xl font-serif text-[#252525] mt-10 mb-4">Dijital Yöntemler</h3>
        <p className="text-base leading-8 text-[#5d5751] mb-6 font-light">
          3D ağız içi tarayıcılar and dijital planlama yazılımları sayesinde, geleneksel ölçü süreçlerinin önüne geçilmesi hedeflenir. Hekim ve hasta ortaklaşa kararlarla ideal formu belirler ve tedavi planı klinik ortamında tamamlanır.
        </p>
      </>
    );
  } else if (currentLang === "de") {
    sampleContent = (
      <>
        <p className="text-base sm:text-lg leading-8 text-[#4a4a4a] mb-6 font-light">
          Die moderne Zahnmedizin zielt nicht nur auf funktionelle Behandlungen ab, sondern auch auf die Planung eines natürlichen und ästhetischen Lächelns. Digitale Smile-Design-Protokolle helfen unseren Patienten, ihre Behandlungsplanung zu visualisieren.
        </p>
        
        <h3 className="text-xl sm:text-2xl font-serif text-[#252525] mt-10 mb-4">Welche Methoden werden beim Smile Design angewendet?</h3>
        <p className="text-base leading-8 text-[#5d5751] mb-6 font-light">
          Bei der Erstellung eines individuellen Smile Designs wird nicht nur auf ein einziges Material gesetzt. Die folgenden digitalen und biomimetischen Ansätze werden genutzt:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-[#5d5751] mb-8 font-light">
          <li><strong>Zirkonium-Kronen:</strong> Bieten höchste Lichtdurchlässigkeit für natürliche Ästhetik und Haltbarkeit.</li>
          <li><strong>Porzellan-Veneers:</strong> Ästhetische Lösungen, die mit minimalem Eingriff in die Zahnsubstanz angewendet werden.</li>
          <li><strong>Bonding-Anwendungen:</strong> Korrektur von Zahnlücken mit Kompositmaterialien in einer einzigen Sitzung.</li>
        </ul>
      </>
    );
  } else {
    // EN
    sampleContent = (
      <>
        <p className="text-base sm:text-lg leading-8 text-[#4a4a4a] mb-6 font-light">
          Modern dentistry aims not only for functional treatments but also to design a natural and aesthetic smile. Digital smile design protocols help our patients visualize their treatment planning before the process begins.
        </p>
        
        <h3 className="text-xl sm:text-2xl font-serif text-[#252525] mt-10 mb-4">Which Methods Are Used in Smile Design?</h3>
        <p className="text-base leading-8 text-[#5d5751] mb-6 font-light">
          When creating a personalized smile design, it does not depend on a single material. The following digital and biomimetic approaches are utilized:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-[#5d5751] mb-8 font-light">
          <li><strong>Zirconium Crowns:</strong> Offers aesthetic closeness to natural teeth with high light transmittance and durability.</li>
          <li><strong>Porcelain Veneers:</strong> Aesthetic solutions applied with minimal intervention to the tooth structure.</li>
          <li><strong>Bonding Applications:</strong> The process of correcting gaps between teeth with composite materials in a single session.</li>
        </ul>
      </>
    );
  }

  return (
    <main className="bg-[#faf9f6] text-[#1a1a1a] min-h-screen pb-24">
      <PageHero 
        title={currentLang === "tr" ? "Kurumsal Blog" : currentLang === "de" ? "Klinik Blog" : "Clinical Blog"} 
        lead={currentLang === "tr" ? "Ağız ve diş sağlığı hakkında kanıta dayalı, güncel paylaşımlar." : currentLang === "de" ? "Evidenzbasierte Aktuelle Beiträge zur Mund- und Zahngesundheit." : "Evidence-based, up-to-date shares about oral health."}
        image="/images/site/smile-consultation.png" 
      />

      <div className="mx-auto max-w-4xl px-6 mt-12 lg:px-8">
        
        <Link 
          href={`/${currentLang}/blog`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8a8178] hover:text-[#c9a36d] transition-colors mb-8 group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          {currentLang === "tr" ? "TÜM MAKALELERE DÖN" : currentLang === "de" ? "ZURÜCK ZUM BLOG" : "BACK TO BLOG"}
        </Link>

        <article className="bg-white border border-[#eee8df] p-6 sm:p-12 rounded-sm shadow-2xs overflow-hidden">
          
          {/* Üst Bar: Sadece yazar ve yıl var */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold uppercase tracking-wider text-[#8a8178] border-b border-[#eee8df]/65 pb-6">
            <span className="flex items-center gap-1.5 text-[#c9a36d]">
              <User className="h-3.5 w-3.5" />
              Dt. Kübra Çolak
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              2026
            </span>
          </div>

          {/* Fotoğraf Alanı */}
          <div className="relative w-full h-[240px] sm:h-[400px] mt-6 rounded-sm overflow-hidden bg-[#faf9f6]">
            <Image
              src={featuredImage}
              alt={title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-w-7xl) 100vw, 800px"
            />
          </div>

          {/* Başlık Alanı */}
          <h1 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-serif text-[#252525] leading-tight font-medium">
            {title}
          </h1>

          {excerpt && (
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#6a625b] border-l-2 border-[#eee8df] pl-4 italic">
              {excerpt}
            </p>
          )}

          {/* Blog İçeriği */}
          <div className="mt-10 prose prose-neutral max-w-none">
            {sampleContent}
          </div>

        </article>
      </div>
    </main>
  );
}