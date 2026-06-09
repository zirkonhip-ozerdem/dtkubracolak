import { Locale, blogPosts, type Dictionary } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

type BlogPageProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function BlogPage({ lang, dictionary }: BlogPageProps) {
  return (
    <>
      <PageHero title={dictionary.blog.title} lead={dictionary.blog.lead} image="/images/site/header.png" />
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={post.title[lang]} className="border border-[#eee8df] bg-[#fbfaf8] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a36d]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 text-xl font-semibold leading-8 text-[#252525]">
                {post.title[lang]}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6a625b]">
                {post.excerpt[lang]}
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#8a8178]">
                {post.readTime} {dictionary.blog.readTime}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
