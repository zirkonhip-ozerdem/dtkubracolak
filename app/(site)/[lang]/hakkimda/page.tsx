import { notFound } from "next/navigation";
import AboutPage from "@/components/about/AboutPage";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <AboutPage lang={lang as Locale} dictionary={getDictionary(lang as Locale)} />;
}