import { notFound } from "next/navigation";
import { ClinicIntro } from "@/components/home/ClinicIntro";
import { ContactPreview } from "@/components/home/ContactPreview";
import { DoctorApproach } from "@/components/home/DoctorApproach";
import { HomeHero } from "@/components/home/HomeHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);

  return (
    <>
      <HomeHero lang={lang} dictionary={dictionary} />
      <DoctorApproach lang={lang} dictionary={dictionary} />
      <ServicesOverview lang={lang} dictionary={dictionary} />
      <ClinicIntro lang={lang} dictionary={dictionary} />
      <ContactPreview lang={lang} dictionary={dictionary} />
    </>
  );
}
