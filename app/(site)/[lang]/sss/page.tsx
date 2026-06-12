import { Locale, getDictionary } from "@/lib/i18n";
import { FaqPage } from "@/components/faq/FaqPage";
import { Metadata } from "next";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  // SERVER LOG: Metadata oluşturulurken dilin doğru gelip gelmediğini kontrol ediyoruz
  console.log(`[Server - Metadata] 🏷️ Dil: ${lang} | Başlık Mevcut mu?:`, !!dictionary?.faq?.title);
  
  return {
    title: `${dictionary?.faq?.title || "Sıkça Sorulan Sorular"} | Dt. Kübra Çolak`,
    description: dictionary?.faq?.lead || "",
  };
}

export default async function SssPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  // SERVER LOG: Sayfa render edilirken gelen datayı terminale basıyoruz
  console.log(`[Server - Page] 🚀 SssPage Render Ediliyor. Dil: ${lang}`);
  
  // Eğer dictionary boş geliyorsa QA olarak terminalde hemen fark etmek için:
  if (!dictionary || !dictionary.faq) {
    console.error(`[Server - Hata] ❌ ${lang} dili için sözlük (dictionary) veya 'faq' anahtarı yüklenemedi!`);
  }

  // Güvenli zincirleme ile FaqPage'e gönderiyoruz
  return <FaqPage lang={lang} dictionary={dictionary} />;
}