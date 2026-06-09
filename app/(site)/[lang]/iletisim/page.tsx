import { notFound } from "next/navigation";
import { ContactPage } from "@/components/contact/ContactPage";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[lang]/iletisim">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return <ContactPage dictionary={getDictionary(lang)} />;
}
