import { notFound } from "next/navigation";
import { TreatmentsPage } from "@/components/treatments/TreatmentsPage";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[lang]/tedaviler">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return <TreatmentsPage lang={lang} dictionary={getDictionary(lang)} />;
}
