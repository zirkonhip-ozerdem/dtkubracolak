import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function SiteLocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);

  return (
    <>
      <SiteHeader lang={lang} dictionary={dictionary} />
      <main>{children}</main>
      <SiteFooter lang={lang} dictionary={dictionary} />
    </>
  );
}
