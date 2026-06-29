"use client";

import { useState } from "react";
import Image from "next/image";
import { type Dictionary, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/shared/PageHero";

type GalleryPageProps = {
  lang: Locale;
  dictionary: Dictionary;
};

type GalleryFilter = "clinic" | "certificate";

type GalleryEntry = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const galleryFilters: Record<Locale, Record<GalleryFilter, string>> = {
  tr: {
    clinic: "Klinik",
    certificate: "Sertifika",
  },
  en: {
    clinic: "Clinic",
    certificate: "Certificate",
  },
  de: {
    clinic: "Klinik",
    certificate: "Zertifikat",
  },
};

const galleryEntries: Record<Locale, Record<GalleryFilter, GalleryEntry[]>> = {
  tr: {
    clinic: [
      {
        title: "Modern Tedavi Alanları",
        description: "Kliniğimiz son teknoloji ekipmanlarla donatılmıştır ve hasta konforunu ön planda tutar.",
        image: "/images/site/smile-consultation.png",
        imageAlt: "Modern klinik ortamında diş hekimi görüşmesi",
      },
      {
        title: "Konforlu Muayene Odaları",
        description: "Rahat ve ferah alanlarımız sayesinde tedavi sürecinizi huzurlu geçirirsiniz.",
        image: "/images/site/clinic-room.png",
        imageAlt: "Konforlu ve aydınlık muayene odası",
      },
      {
        title: "Uzman Hekim Kadrosu",
        description: "Deneyimli ekibimiz ile kişiye özel tedavi planları sunuyoruz.",
        image: "/images/site/dental-hero.png",
        imageAlt: "Diş sağlığı danışmanlığı için hazırlanmış klinik görseli",
      },
    ],
    certificate: [
      {
        title: "İmplantoloji Eğitimi",
        description: "Uluslararası implantoloji eğitim programı başarıyla tamamlanmıştır.",
        image: "/images/site/dental-hero.png",
        imageAlt: "İmplantoloji eğitimi sertifika görseli",
      },
      {
        title: "Dijital Diş Hekimliği",
        description: "Dijital ölçü ve tasarım teknolojileri eğitimi.",
        image: "/images/site/smile-consultation.png",
        imageAlt: "Dijital diş hekimliği sertifika görseli",
      },
      {
        title: "Estetik Diş Hekimliği",
        description: "Estetik diş hekimliği alanında ileri düzey sertifika.",
        image: "/images/site/clinic-room.png",
        imageAlt: "Estetik diş hekimliği sertifika görseli",
      },
    ],
  },
  en: {
    clinic: [
      {
        title: "Modern Treatment Areas",
        description: "Our clinic is equipped with current technology and prioritizes patient comfort.",
        image: "/images/site/smile-consultation.png",
        imageAlt: "Dental consultation in a modern clinical setting",
      },
      {
        title: "Comfortable Treatment Rooms",
        description: "Spacious and calm treatment rooms help make your care process more comfortable.",
        image: "/images/site/clinic-room.png",
        imageAlt: "Comfortable and bright dental treatment room",
      },
      {
        title: "Experienced Clinical Team",
        description: "We offer personalized treatment plans with an experienced clinical approach.",
        image: "/images/site/dental-hero.png",
        imageAlt: "Clinic visual prepared for dental health consultation",
      },
    ],
    certificate: [
      {
        title: "Implantology Training",
        description: "International implantology training program completed successfully.",
        image: "/images/site/dental-hero.png",
        imageAlt: "Implantology training certificate visual",
      },
      {
        title: "Digital Dentistry",
        description: "Training in digital impression and design technologies.",
        image: "/images/site/smile-consultation.png",
        imageAlt: "Digital dentistry certificate visual",
      },
      {
        title: "Aesthetic Dentistry",
        description: "Advanced certificate in aesthetic dentistry.",
        image: "/images/site/clinic-room.png",
        imageAlt: "Aesthetic dentistry certificate visual",
      },
    ],
  },
  de: {
    clinic: [
      {
        title: "Moderne Behandlungsbereiche",
        description: "Unsere Klinik ist mit aktueller Technologie ausgestattet und stellt den Patientenkomfort in den Mittelpunkt.",
        image: "/images/site/smile-consultation.png",
        imageAlt: "Zahnärztliche Beratung in einer modernen klinischen Umgebung",
      },
      {
        title: "Komfortable Behandlungsräume",
        description: "Ruhige und helle Räume sorgen für einen angenehmen Behandlungsprozess.",
        image: "/images/site/clinic-room.png",
        imageAlt: "Komfortabler und heller zahnärztlicher Behandlungsraum",
      },
      {
        title: "Erfahrenes Praxisteam",
        description: "Mit Erfahrung und Sorgfalt erstellen wir individuelle Behandlungspläne.",
        image: "/images/site/dental-hero.png",
        imageAlt: "Klinikmotiv für eine zahnärztliche Beratung",
      },
    ],
    certificate: [
      {
        title: "Implantologie-Fortbildung",
        description: "Internationales Implantologie-Programm erfolgreich abgeschlossen.",
        image: "/images/site/dental-hero.png",
        imageAlt: "Zertifikatmotiv zur Implantologie-Fortbildung",
      },
      {
        title: "Digitale Zahnmedizin",
        description: "Fortbildung zu digitalen Abdruck- und Designtechnologien.",
        image: "/images/site/smile-consultation.png",
        imageAlt: "Zertifikatmotiv zur digitalen Zahnmedizin",
      },
      {
        title: "Ästhetische Zahnmedizin",
        description: "Fortgeschrittenes Zertifikat im Bereich ästhetische Zahnmedizin.",
        image: "/images/site/clinic-room.png",
        imageAlt: "Zertifikatmotiv zur ästhetischen Zahnmedizin",
      },
    ],
  },
};

export function GalleryPage({ lang, dictionary }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("clinic");
  const labels = galleryFilters[lang];
  const entries = galleryEntries[lang][activeFilter];

  return (
    <>
      <PageHero title={dictionary.gallery.title} lead={dictionary.gallery.lead} image="/images/site/dental-hero.png" />
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center gap-12" role="tablist" aria-label={dictionary.gallery.title}>
            {(Object.keys(labels) as GalleryFilter[]).map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`relative pb-5 text-lg font-medium transition ${
                    isActive ? "text-[#222222]" : "text-[#5f5a54] hover:text-[#222222]"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {labels[filter]}
                  <span
                    className={`absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-[#c9a36d] transition ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-20">
            {entries.map((item, index) => {
              const reverse = index % 2 === 1;

              return (
                <article
                  key={`${activeFilter}-${item.title}`}
                  className="grid items-center gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-16"
                >
                  <figure
                    className={`relative aspect-[16/10] overflow-hidden rounded-lg bg-[#f3eee7] shadow-[0_12px_34px_rgba(28,24,20,0.12)] ${
                      reverse ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 52vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </figure>
                  <div className={`max-w-xl ${reverse ? "md:order-1" : ""}`}>
                    <h2 className="text-3xl font-bold tracking-normal text-[#242424] sm:text-4xl">{item.title}</h2>
                    <p className="mt-5 text-lg leading-8 text-[#5f5a54]">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
