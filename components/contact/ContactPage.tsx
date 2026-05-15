import { site, type Dictionary } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";
import { SiteIcon } from "@/components/shared/SiteIcon";

type ContactPageProps = {
  dictionary: Dictionary;
};

export function ContactPage({ dictionary }: ContactPageProps) {
  return (
    <>
      <PageHero title={dictionary.contact.title} lead={dictionary.contact.lead} image="/images/site/smile-consultation.png" />
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="bg-[#252525] p-8 text-white">
            <h2 className="text-xl font-bold uppercase tracking-[0.1em]">
              {dictionary.contact.infoTitle}
            </h2>
            <ul className="mt-8 space-y-5 text-sm text-[#ded7cf]">
              <li className="flex gap-3">
                <SiteIcon name="pin" className="mt-0.5 h-5 w-5 text-[#c9a36d]" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <SiteIcon name="phone" className="mt-0.5 h-5 w-5 text-[#c9a36d]" />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li className="flex gap-3">
                <SiteIcon name="mail" className="mt-0.5 h-5 w-5 text-[#c9a36d]" />
                <a href={site.emailHref}>{site.email}</a>
              </li>
            </ul>
            <div className="mt-10 h-56 bg-[#f7f4ef] p-4 text-[#252525]">
              <div className="flex h-full items-center justify-center border border-[#d9cabb] text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#8a8178]">
                {site.mapsLabel}
              </div>
            </div>
          </aside>

          <form className="border border-[#eee8df] bg-[#fbfaf8] p-6 sm:p-8">
            <h2 className="text-xl font-bold uppercase tracking-[0.1em] text-[#252525]">
              {dictionary.contact.formTitle}
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <input className="h-12 border border-[#e2d9cf] bg-white px-4 text-sm outline-none" placeholder={dictionary.common.name} />
              <input className="h-12 border border-[#e2d9cf] bg-white px-4 text-sm outline-none" placeholder={dictionary.common.email} />
              <input className="h-12 border border-[#e2d9cf] bg-white px-4 text-sm outline-none sm:col-span-2" placeholder={dictionary.common.phone} />
              <textarea className="min-h-40 border border-[#e2d9cf] bg-white px-4 py-3 text-sm outline-none sm:col-span-2" placeholder={dictionary.common.message} />
            </div>
            <button
              type="button"
              className="mt-6 inline-flex min-h-11 items-center justify-center bg-[#c9a36d] px-6 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#b28e5a]"
            >
              {dictionary.common.send}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
