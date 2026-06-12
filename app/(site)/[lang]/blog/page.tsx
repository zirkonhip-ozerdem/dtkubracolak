import { notFound } from "next/navigation";
import { BlogPage } from "@/components/blog/BlogPage";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
  // Kasıtlı olarak searchParams'ı asenkron ekliyoruz ki Next.js sayfayı client-side dinamikliğine açsın
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { lang } = await params;
  // searchParams'ı await ederek Next.js'e bu sayfanın dinamik sorgular alabildiğini söylüyoruz
  await searchParams;

  // 1. Dilin geçerli olup olmadığını kontrol et
  if (!isLocale(lang)) {
    notFound();
  }

  // 2. Tipi kesinleştirerek gönder
  const currentLang = lang as Locale;
  const dictionary = getDictionary(currentLang);

  return <BlogPage lang={currentLang} dictionary={dictionary} />;
}