import { notFound } from "next/navigation";
import { BlogPage } from "@/components/blog/BlogPage";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return <BlogPage lang={lang} dictionary={getDictionary(lang)} />;
}
