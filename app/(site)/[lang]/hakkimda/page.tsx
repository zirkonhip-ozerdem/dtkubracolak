import { notFound } from "next/navigation";
import { AboutPage } from "@/components/about/AboutPage";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[lang]/hakkimda">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return <AboutPage dictionary={getDictionary(lang)} />;
}
