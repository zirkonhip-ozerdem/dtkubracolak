import { notFound } from "next/navigation";
import { GalleryPage } from "@/components/gallery/GalleryPage";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[lang]/galeri">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return <GalleryPage dictionary={getDictionary(lang)} />;
}
