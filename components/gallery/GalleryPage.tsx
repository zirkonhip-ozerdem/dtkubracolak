import Image from "next/image";
import { type Dictionary } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

type GalleryPageProps = {
  dictionary: Dictionary;
};

const galleryItems = [
  {
    src: "/images/site/dental-hero.png",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/site/clinic-room.png",
    ratio: "aspect-[16/12]",
  },
  {
    src: "/images/site/smile-consultation.png",
    ratio: "aspect-[16/12]",
  },
  {
    src: "/images/site/clinic-room.png",
    ratio: "aspect-[16/10]",
  },
] as const;

export function GalleryPage({ dictionary }: GalleryPageProps) {
  return (
    <>
      <PageHero title={dictionary.gallery.title} lead={dictionary.gallery.lead} image="/images/site/header.png" />
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <figure key={`${item.src}-${index}`} className={`relative overflow-hidden bg-[#f3eee7] ${item.ratio}`}>
              <Image src={item.src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
