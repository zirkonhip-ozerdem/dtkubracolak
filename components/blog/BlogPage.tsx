"use client";

import { useState, useMemo } from "react";
import { Locale, blogPosts, type Dictionary } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

type BlogPageProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function BlogPage({ lang, dictionary }: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Canlı arama filtresi
  const filteredBlogs = useMemo(() => {
    const cleanQuery = searchQuery.trim();
    if (!cleanQuery) return blogPosts || [];

    const currentLocale = lang === "tr" ? "tr-TR" : lang === "de" ? "de-DE" : "en-US";
    const search = cleanQuery.toLocaleLowerCase(currentLocale);

    return (blogPosts || []).filter((post) => {
      const titleText = (post?.title?.[lang] || "").toLocaleLowerCase(currentLocale);
      const excerptText = (post?.excerpt?.[lang] || "").toLocaleLowerCase(currentLocale);
      const keywordsText = (post?.seoKeywords?.[lang] || "").toLocaleLowerCase(currentLocale);

      return (
        titleText.includes(search) ||
        excerptText.includes(search) ||
        keywordsText.includes(search)
      );
    });
  }, [searchQuery, lang]);

  return (
    <>
      <PageHero 
        title={dictionary.blog.title} 
        lead={dictionary.blog.lead} 
        image="/images/site/smile-consultation.png" 
      />

      {/* Akıllı Canlı Arama Kutusu Alanı */}
      <section className="bg-[#fbfaf8] border-b border-[#eee8df] py-10 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold tracking-wider text-[#252525]">
                {(() => {
                  const rawTitle = lang === "tr" ? "Güncel Makaleler" : lang === "de" ? "Aktuelle Artikel" : "Latest Articles";
                  const currentLocale = lang === "tr" ? "tr-TR" : lang === "de" ? "de-DE" : "en-US";
                  return rawTitle.toLocaleUpperCase(currentLocale);
                })()}
              </h2>
              <p className="text-xs text-[#5d5751] mt-1 font-medium">
                {filteredBlogs.length} {lang === "tr" ? "yazı listeleniyor" : lang === "de" ? "Artikel aufgelistet" : "articles listed"}
              </p>
            </div>

            {/* Arama Inputu */}
            <div className="w-full md:w-auto md:min-w-[350px]">
              <div className="w-full">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                  className="w-full rounded-sm border border-[#eee8df] bg-white px-4 py-2.5 text-sm text-[#252525] placeholder-[#5d5751]/50 focus:border-[#c9a36d] focus:outline-none focus:ring-1 focus:ring-[#c9a36d]" 
                  placeholder={lang === "tr" ? "Makale veya konu ara…" : lang === "de" ? "Artikel suchen…" : "Search articles…"} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Yapısı */}
      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filteredBlogs.length === 0 ? (
            <p className="text-center text-[#5d5751] py-8">
              {lang === "tr" ? "Aradığınız kritere uygun yazı bulunamadı." : lang === "de" ? "Keine Artikel gefunden." : "No articles found matching your criteria."}
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((post, index) => {
                const uniqueKey = post?.slug ? `${post.slug}-${lang}` : `blog-idx-${index}`;
                
                return (
                  <article 
                    key={uniqueKey} 
                    className="flex flex-col justify-between border border-[#eee8df] bg-[#fbfaf8] p-7 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div>
                      {/* Sıra Numarası */}
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a36d]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      {/* Blog Başlığı */}
                      <h2 className="mt-4 text-xl font-semibold leading-snug text-[#252525] hover:text-[#c9a36d] transition-colors">
                        <Link href={`/${lang}/blog/${post?.slug || ""}`}>
                          {post?.title?.[lang] || ""}
                        </Link>
                      </h2>

                      {/* İçerik Özeti (Excerpt) */}
                      <p className="mt-4 text-sm leading-relaxed text-[#6a625b]">
                        {post?.excerpt?.[lang] || ""}
                      </p>
                    </div>

                    {/* Alt Katman Yönlendirme Alanı */}
                    <div className="mt-8 pt-5 border-t border-[#eee8df]/65">
                      <Link 
                        href={`/${lang}/blog/${post?.slug || ""}`}
                        className="w-full text-center text-xs font-bold tracking-wider text-[#252525] bg-[#eadecc]/30 hover:bg-[#c9a36d] hover:text-white transition-all duration-300 py-3 px-4 rounded-sm block"
                      >
                        {(() => {
                          const rawText = lang === "tr" 
                            ? "Detaylı İncelemek İçin Tıklayınız" 
                            : lang === "de" 
                              ? "Klicken Sie für Details" 
                              : "Click for Detailed Review";
                          
                          const currentLocale = lang === "tr" ? "tr-TR" : lang === "de" ? "de-DE" : "en-US";
                          return rawText.toLocaleUpperCase(currentLocale);
                        })()} →
                      </Link>
                    </div>

                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}