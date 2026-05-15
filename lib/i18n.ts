export const locales = ["tr", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocale(value: string): Locale {
  return isLocale(value) ? value : "tr";
}

export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
};

export const site = {
  phone: "+90 530 000 00 00",
  phoneHref: "tel:+905300000000",
  email: "info@dtkubracolak.com",
  emailHref: "mailto:info@dtkubracolak.com",
  address: "Istanbul, Turkiye",
  mapsLabel: "Klinik konumu",
};

export const dictionaries = {
  tr: {
    meta: {
      title: "Dt. Kubra Colak | Agiz ve Dis Sagligi",
      description:
        "Dt. Kubra Colak agiz ve dis sagligi klinigi icin cok dilli kurumsal web sitesi.",
    },
    nav: {
      home: "Ana Sayfa",
      about: "Hakkimda",
      treatments: "Tedaviler",
      gallery: "Galeri",
      blog: "Blog",
      contact: "Iletisim",
    },
    common: {
      details: "Detayli Bilgi",
      appointment: "Randevu Al",
      allTreatments: "Tum Tedaviler",
      send: "Gonder",
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      message: "Mesajiniz",
      required: "Zorunlu alan",
    },
    home: {
      heroEyebrow: "Dt. Kubra Colak",
      heroTitle: "Saglikli ve guzel bir gulus icin modern dis hekimligi",
      heroLead:
        "Koruyucu dis hekimligi, estetik uygulamalar ve dijital tedavi planlamasini sakin, guven veren bir klinik deneyimiyle bulusturuyoruz.",
      doctorsTitle: "Hekim Yaklasimi",
      doctorsKicker: "Size ayrilan ozen",
      doctorsLead:
        "Her tedavi plani detayli muayene, net bilgilendirme ve uzun vadeli agiz sagligi hedefleriyle hazirlanir.",
      servicesTitle: "Tedaviler",
      servicesLead: "Ihtiyaciniza gore planlanan kapsamli dis hekimligi cozumleri.",
      clinicTitle: "Klinik",
      clinicLead:
        "Sterilizasyon protokolleri, dijital cihazlar ve hasta konforunu one alan yalın bir klinik akisi.",
      contactTitle: "Iletisime Gecin",
      contactLead:
        "Muayene, tedavi planlamasi veya kontrol randevulari icin bizimle iletisime gecebilirsiniz.",
    },
    about: {
      title: "Hakkimda",
      lead:
        "Dt. Kubra Colak, hastalarina dogru bilgilendirme, sakin tedavi deneyimi ve uzun omurlu sonuclar sunmaya odaklanir.",
      storyTitle: "Tedaviye bakisimiz",
      story:
        "Agiz ve dis sagligi sadece tek bir islemin sonucu degildir. Dogru tani, hastanin beklentisini anlama, koruyucu yaklasim ve surekli takip birlikte calisir. Bu nedenle her randevuda tedavi secenekleri acikca anlatilir ve karar sureci hasta ile birlikte yurutulur.",
      valuesTitle: "Calisma prensipleri",
      values: ["Net bilgilendirme", "Kisisel tedavi planlamasi", "Steril ve konforlu ortam", "Koruyucu hekimlik onceligi"],
    },
    treatments: {
      title: "Tedaviler",
      lead:
        "Dis sagliginiz, estetik beklentileriniz ve yasam ritminiz birlikte degerlendirilerek tedavi sureci planlanir.",
    },
    gallery: {
      title: "Galeri",
      lead: "Klinik atmosferi, tedavi odalari ve hasta deneyimine dair secili kareler.",
    },
    blog: {
      title: "Blog",
      lead:
        "Agiz ve dis sagligi hakkinda kisa, anlasilir ve uygulanabilir bilgilendirmeler.",
      readTime: "dk okuma",
    },
    contact: {
      title: "Iletisim",
      lead:
        "Sorulariniz ve randevu talepleriniz icin formu doldurabilir ya da dogrudan bize ulasabilirsiniz.",
      formTitle: "Randevu ve bilgi talebi",
      infoTitle: "Klinik bilgileri",
    },
    footer: {
      summary:
        "Modern, guvenilir ve hasta odakli agiz ve dis sagligi hizmetleri.",
      quickLinks: "Hizli erisim",
      contact: "Iletisim",
      rights: "Tum haklari saklidir.",
    },
  },
  en: {
    meta: {
      title: "Dentist Kubra Colak | Oral and Dental Health",
      description:
        "A multilingual corporate website for Dentist Kubra Colak's oral and dental health clinic.",
    },
    nav: {
      home: "Home",
      about: "About",
      treatments: "Treatments",
      gallery: "Gallery",
      blog: "Blog",
      contact: "Contact",
    },
    common: {
      details: "Learn More",
      appointment: "Book Appointment",
      allTreatments: "All Treatments",
      send: "Send",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Your Message",
      required: "Required field",
    },
    home: {
      heroEyebrow: "Dentist Kubra Colak",
      heroTitle: "Modern dentistry for a healthy and confident smile",
      heroLead:
        "We combine preventive dentistry, aesthetic treatments and digital planning with a calm, reassuring clinic experience.",
      doctorsTitle: "Clinical Approach",
      doctorsKicker: "Care designed around you",
      doctorsLead:
        "Every treatment plan starts with a detailed examination, transparent guidance and long-term oral health goals.",
      servicesTitle: "Treatments",
      servicesLead: "Comprehensive dental solutions planned around your needs.",
      clinicTitle: "Clinic",
      clinicLead:
        "A streamlined clinical flow shaped by sterilization protocols, digital equipment and patient comfort.",
      contactTitle: "Get In Touch",
      contactLead:
        "Contact us for examinations, treatment planning or follow-up appointments.",
    },
    about: {
      title: "About",
      lead:
        "Dentist Kubra Colak focuses on clear guidance, a calm treatment experience and long-lasting outcomes.",
      storyTitle: "How we approach care",
      story:
        "Oral health is not the result of a single procedure. Accurate diagnosis, understanding expectations, preventive care and follow-up work together. Treatment options are explained clearly at every appointment, and decisions are made with the patient.",
      valuesTitle: "Working principles",
      values: ["Clear communication", "Personal treatment planning", "Sterile and comfortable setting", "Preventive care first"],
    },
    treatments: {
      title: "Treatments",
      lead:
        "Your oral health, aesthetic expectations and daily rhythm are evaluated together before treatment is planned.",
    },
    gallery: {
      title: "Gallery",
      lead: "Selected views of the clinic atmosphere, treatment rooms and patient experience.",
    },
    blog: {
      title: "Blog",
      lead: "Short, practical and easy-to-understand notes on oral and dental health.",
      readTime: "min read",
    },
    contact: {
      title: "Contact",
      lead:
        "Use the form for questions and appointment requests, or contact us directly.",
      formTitle: "Appointment and information request",
      infoTitle: "Clinic details",
    },
    footer: {
      summary: "Modern, trustworthy and patient-centered oral healthcare.",
      quickLinks: "Quick links",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  de: {
    meta: {
      title: "Zahnarztin Kubra Colak | Mund- und Zahngesundheit",
      description:
        "Mehrsprachige Unternehmenswebsite fur die Zahnarztpraxis von Kubra Colak.",
    },
    nav: {
      home: "Startseite",
      about: "Uber mich",
      treatments: "Behandlungen",
      gallery: "Galerie",
      blog: "Blog",
      contact: "Kontakt",
    },
    common: {
      details: "Mehr Erfahren",
      appointment: "Termin Anfragen",
      allTreatments: "Alle Behandlungen",
      send: "Senden",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      message: "Ihre Nachricht",
      required: "Pflichtfeld",
    },
    home: {
      heroEyebrow: "Zahnarztin Kubra Colak",
      heroTitle: "Moderne Zahnmedizin fur ein gesundes und sicheres Lacheln",
      heroLead:
        "Wir verbinden vorbeugende Zahnmedizin, asthetische Behandlungen und digitale Planung mit einer ruhigen, vertrauensvollen Praxiserfahrung.",
      doctorsTitle: "Praxisansatz",
      doctorsKicker: "Sorgfalt fur Ihre Bedurfnisse",
      doctorsLead:
        "Jeder Behandlungsplan beginnt mit einer grundlichen Untersuchung, klarer Beratung und langfristigen Zielen fur die Mundgesundheit.",
      servicesTitle: "Behandlungen",
      servicesLead: "Umfassende zahnmedizinische Losungen, geplant nach Ihrem Bedarf.",
      clinicTitle: "Praxis",
      clinicLead:
        "Ein klarer Praxisablauf mit Sterilisationsprotokollen, digitaler Ausstattung und Fokus auf Patientenkomfort.",
      contactTitle: "Kontakt Aufnehmen",
      contactLead:
        "Kontaktieren Sie uns fur Untersuchungen, Behandlungsplanung oder Kontrolltermine.",
    },
    about: {
      title: "Uber mich",
      lead:
        "Zahnarztin Kubra Colak legt Wert auf klare Aufklarung, eine ruhige Behandlungserfahrung und langlebige Ergebnisse.",
      storyTitle: "Unser Blick auf Behandlung",
      story:
        "Mundgesundheit entsteht nicht durch eine einzelne Behandlung. Genaue Diagnose, das Verstehen der Erwartungen, vorbeugende Betreuung und Nachsorge wirken zusammen. Deshalb werden Optionen bei jedem Termin transparent erklart.",
      valuesTitle: "Arbeitsprinzipien",
      values: ["Klare Kommunikation", "Personliche Behandlungsplanung", "Sterile und komfortable Umgebung", "Vorbeugung zuerst"],
    },
    treatments: {
      title: "Behandlungen",
      lead:
        "Ihre Mundgesundheit, asthetischen Erwartungen und Ihr Alltag werden gemeinsam betrachtet, bevor die Behandlung geplant wird.",
    },
    gallery: {
      title: "Galerie",
      lead: "Ausgewahlte Einblicke in Praxisatmosphare, Behandlungsraume und Patientenerlebnis.",
    },
    blog: {
      title: "Blog",
      lead:
        "Kurze, verstandliche und praktische Informationen rund um Mund- und Zahngesundheit.",
      readTime: "Min. Lesezeit",
    },
    contact: {
      title: "Kontakt",
      lead:
        "Nutzen Sie das Formular fur Fragen und Terminanfragen oder kontaktieren Sie uns direkt.",
      formTitle: "Termin- und Informationsanfrage",
      infoTitle: "Praxisdaten",
    },
    footer: {
      summary: "Moderne, vertrauensvolle und patientenorientierte Zahnmedizin.",
      quickLinks: "Schnellzugriff",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const routeMap = {
  home: "",
  about: "/hakkimda",
  treatments: "/tedaviler",
  gallery: "/galeri",
  blog: "/blog",
  contact: "/iletisim",
} as const;

export const treatments = [
  {
    key: "implant",
    icon: "implant",
    title: {
      tr: "Implant Tedavisi",
      en: "Implant Treatment",
      de: "Implantatbehandlung",
    },
    description: {
      tr: "Eksik dislerin fonksiyon ve estetik beklentilerle birlikte planlanmasi.",
      en: "Planning missing teeth with functional and aesthetic expectations in mind.",
      de: "Planung fehlender Zahne mit funktionellen und asthetischen Erwartungen.",
    },
  },
  {
    key: "aesthetic",
    icon: "spark",
    title: {
      tr: "Estetik Dis Hekimligi",
      en: "Aesthetic Dentistry",
      de: "Asthetische Zahnmedizin",
    },
    description: {
      tr: "Gulus tasarimi, bonding ve renk uyumu odakli estetik uygulamalar.",
      en: "Smile design, bonding and color harmony focused aesthetic treatments.",
      de: "Smile Design, Bonding und farbharmonische asthetische Behandlungen.",
    },
  },
  {
    key: "endodontics",
    icon: "tooth",
    title: {
      tr: "Kanal Tedavisi",
      en: "Root Canal Treatment",
      de: "Wurzelkanalbehandlung",
    },
    description: {
      tr: "Dis dokusunu korumaya yonelik hassas endodontik tedavi surecleri.",
      en: "Precise endodontic care focused on preserving natural tooth structure.",
      de: "Prazise endodontische Versorgung zum Erhalt der naturlichen Zahnsubstanz.",
    },
  },
  {
    key: "periodontology",
    icon: "gum",
    title: {
      tr: "Dis Eti Tedavileri",
      en: "Gum Treatments",
      de: "Zahnfleischbehandlungen",
    },
    description: {
      tr: "Dis eti sagligini ve agiz hijyenini destekleyen koruyucu uygulamalar.",
      en: "Preventive care that supports gum health and oral hygiene.",
      de: "Vorbeugende Behandlungen fur Zahnfleischgesundheit und Mundhygiene.",
    },
  },
  {
    key: "prosthesis",
    icon: "crown",
    title: {
      tr: "Protez ve Kuron",
      en: "Prosthetics and Crowns",
      de: "Prothetik und Kronen",
    },
    description: {
      tr: "Dayanikli, dogal gorunumlu ve kisinin kapanisina uygun restorasyonlar.",
      en: "Durable, natural-looking restorations aligned with your bite.",
      de: "Langlebige, naturlich wirkende Restaurationen passend zum Biss.",
    },
  },
  {
    key: "children",
    icon: "shield",
    title: {
      tr: "Koruyucu Hekimlik",
      en: "Preventive Dentistry",
      de: "Vorbeugende Zahnmedizin",
    },
    description: {
      tr: "Kontrol, temizlik ve erken tani ile sorunlari buyumeden onleme.",
      en: "Checkups, cleaning and early diagnosis to prevent larger problems.",
      de: "Kontrollen, Reinigung und fruhe Diagnose, bevor Probleme wachsen.",
    },
  },
] as const;

export const blogPosts = [
  {
    title: {
      tr: "Dis tasi temizligi ne zaman gerekli olur?",
      en: "When is dental scaling needed?",
      de: "Wann ist Zahnsteinentfernung sinnvoll?",
    },
    excerpt: {
      tr: "Dis eti sagligini korumak icin duzenli temizlik ve kontrol araliklari nasil planlanir?",
      en: "How regular cleaning and checkup intervals help protect gum health.",
      de: "Wie regelmassige Reinigung und Kontrollen das Zahnfleisch schutzen.",
    },
    readTime: 4,
  },
  {
    title: {
      tr: "Gulus tasariminda ilk muayene",
      en: "The first smile design consultation",
      de: "Die erste Beratung zum Smile Design",
    },
    excerpt: {
      tr: "Estetik beklentiler, yuz orani ve agiz sagligi birlikte nasil degerlendirilir?",
      en: "How aesthetics, facial proportions and oral health are evaluated together.",
      de: "Wie Asthetik, Gesichtsproportionen und Mundgesundheit bewertet werden.",
    },
    readTime: 5,
  },
  {
    title: {
      tr: "Implant planlamasinda dijital olcum",
      en: "Digital measurement in implant planning",
      de: "Digitale Messung bei Implantatplanung",
    },
    excerpt: {
      tr: "Dijital planlama tedavi surecini daha ongorulebilir hale getirmeye yardimci olur.",
      en: "Digital planning helps make the treatment journey more predictable.",
      de: "Digitale Planung macht die Behandlung besser vorhersehbar.",
    },
    readTime: 6,
  },
] as const;
