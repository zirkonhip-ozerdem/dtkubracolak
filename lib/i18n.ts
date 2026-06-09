export const locales = ["tr", "en", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const routeMap = {
  home: "",
  about: "/hakkimda",
  treatments: "/tedaviler",
  gallery: "/galeri",
  blog: "/blog",
  contact: "/iletisim",
} as const;

export const site = {
  address: "Atatürk Cad. No:12, Kadıköy / İstanbul",
  phone: "+90 (216) 123 45 67",
  phoneHref: "tel:+902161234567",
  email: "info@dtkubracolak.com",
  emailHref: "mailto:info@dtkubracolak.com",
  mapsLabel: "Harita Yüklenecek",
};

export type IconName =
  | "tooth" | "implant" | "spark" | "gum" | "crown" | "shield"
  | "drop" | "scaler" | "extract" | "filling" | "bridge"
  | "phone" | "mail" | "pin" | "menu" | "close";

export type TreatmentItem = {
  key: string;
  icon: IconName;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const treatments: TreatmentItem[] = [
  {
    key: "implant",
    icon: "implant",
    title: { tr: "Diş İmplantı", en: "Dental Implant", de: "Zahnimplantat" },
    description: {
      tr: "Eksik dişin yerine titanyum vida yerleştirilerek kalıcı ve doğal görünümlü diş elde edilir.",
      en: "A titanium post replaces the missing tooth root for a permanent, natural-looking result.",
      de: "Ein Titanpfosten ersetzt die fehlende Zahnwurzel für ein dauerhaftes, natürliches Ergebnis.",
    },
  },
  {
    key: "whitening",
    icon: "spark",
    title: { tr: "Diş Beyazlatma", en: "Teeth Whitening", de: "Zahnaufhellung" },
    description: {
      tr: "Profesyonel yöntemlerle renk tonunu aydınlatma ve gülüş estetiğini geliştirme.",
      en: "Professional whitening to brighten tooth shade and enhance your smile.",
      de: "Professionelle Aufhellung für einen strahlend weißen Zahn und ein schönes Lächeln.",
    },
  },
  {
    key: "filling",
    icon: "filling",
    title: { tr: "Diş Dolgusu", en: "Dental Filling", de: "Zahnfüllung" },
    description: {
      tr: "Çürük veya kırık diş dokusunun kompozit veya seramik materyalle onarılması.",
      en: "Restoring decayed or broken tooth tissue with composite or ceramic material.",
      de: "Wiederherstellung von kariösem oder gebrochenem Zahngewebe mit Komposit oder Keramik.",
    },
  },
  {
    key: "canal",
    icon: "tooth",
    title: { tr: "Kanal Tedavisi", en: "Root Canal", de: "Wurzelkanalbehandlung" },
    description: {
      tr: "Enfekte diş pulpasının temizlenerek dişin kurtarılması ve ağrının giderilmesi.",
      en: "Removing infected pulp to save the tooth and eliminate pain.",
      de: "Entfernung des infizierten Pulpagewebes, um den Zahn zu erhalten und Schmerzen zu lindern.",
    },
  },
  {
    key: "scaling",
    icon: "scaler",
    title: { tr: "Diş Taşı Temizliği", en: "Dental Scaling", de: "Zahnsteinentfernung" },
    description: {
      tr: "Diş eti sağlığını korumak için birikmiş tartarın profesyonel olarak uzaklaştırılması.",
      en: "Professional removal of built-up tartar to maintain gum health.",
      de: "Professionelle Entfernung von Zahnstein zum Schutz des Zahnfleisches.",
    },
  },
  {
    key: "extraction",
    icon: "extract",
    title: { tr: "Diş Çekimi", en: "Tooth Extraction", de: "Zahnextraktion" },
    description: {
      tr: "Hasarlı veya tedavi edilemeyen dişin minimal travmayla güvenli şekilde çekilmesi.",
      en: "Safe, minimally traumatic removal of damaged or untreatable teeth.",
      de: "Schonende und sichere Entfernung von beschädigten oder nicht behandelbaren Zähnen.",
    },
  },
];

export type BlogPost = {
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: {
      tr: "Diş İmplantı Hakkında Bilmeniz Gerekenler",
      en: "What You Need to Know About Dental Implants",
      de: "Was Sie über Zahnimplantate wissen sollten",
    },
    excerpt: {
      tr: "İmplant tedavisi, eksik dişlerin en doğal ve kalıcı çözümüdür. Süreç, uygunluk değerlendirmesi ve titanyum vida yerleştirilmesinden oluşur.",
      en: "Implant treatment is the most natural and permanent solution for missing teeth, involving assessment and titanium post placement.",
      de: "Implantate sind die natürlichste und dauerhafteste Lösung bei fehlenden Zähnen – von der Eignungsprüfung bis zur Titanschraube.",
    },
    readTime: "4 dk",
  },
  {
    title: {
      tr: "Gülüş Estetiğinde Doğru Beyazlatma Yöntemi",
      en: "Choosing the Right Whitening Method for Your Smile",
      de: "Die richtige Aufhellungsmethode für Ihr Lächeln",
    },
    excerpt: {
      tr: "Market ürünleriyle yapılan beyazlatma diş minesi için riskli olabilir. Klinikte uygulanan profesyonel yöntemler hem güvenli hem etkilidir.",
      en: "Over-the-counter whitening can risk enamel damage. Professional in-clinic methods are both safe and effective.",
      de: "Aufhellungsprodukte aus dem Handel können den Zahnschmelz schädigen. Professionelle Methoden in der Zahnarztpraxis sind sicher und effektiv.",
    },
    readTime: "3 dk",
  },
  {
    title: {
      tr: "Diş Eti Sağlığını Korumanın 5 Yolu",
      en: "5 Ways to Maintain Healthy Gums",
      de: "5 Wege für gesundes Zahnfleisch",
    },
    excerpt: {
      tr: "Düzenli diş taşı temizliği, doğru fırçalama tekniği ve yıllık kontroller diş eti hastalıklarını önlemenin temel adımlarıdır.",
      en: "Regular scaling, proper brushing technique, and annual check-ups are key steps in preventing gum disease.",
      de: "Regelmäßige Zahnsteinentfernung, richtige Putztechnik und jährliche Kontrollen sind entscheidend für gesundes Zahnfleisch.",
    },
    readTime: "3 dk",
  },
];

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    treatments: string;
    gallery: string;
    blog: string;
    contact: string;
  };
  common: {
    allTreatments: string;
    appointment: string;
    details: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    required: string;
    send: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    clinicTitle: string;
    clinicLead: string;
    doctorsKicker: string;
    doctorsTitle: string;
    doctorsLead: string;
    servicesTitle: string;
    servicesLead: string;
    contactTitle: string;
    contactLead: string;
  };
  about: {
    title: string;
    lead: string;
    storyTitle: string;
    story: string;
    values: string[];
    valuesTitle: string;
  };
  treatments: {
    title: string;
    lead: string;
    implantSection: {
      tab: string;
      eyebrow: string;
      title: string;
      summary: string;
      steps: { title: string; description: string }[];
    };
    categories: {
      label: string;
      image?: string;
      items: { label: string; href: string }[];
    }[];
  };
  gallery: {
    title: string;
    lead: string;
  };
  blog: {
    title: string;
    lead: string;
    readTime: string;
  };
  contact: {
    title: string;
    lead: string;
    formTitle: string;
    infoTitle: string;
  };
  footer: {
    summary: string;
    quickLinks: string;
    contact: string;
    rights: string;
  };
};

const tr: Dictionary = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımda",
    treatments: "Tedaviler",
    gallery: "Galeri",
    blog: "Blog",
    contact: "İletişim",
  },
  common: {
    allTreatments: "Tüm Tedaviler",
    appointment: "Randevu Al",
    details: "Detaylar",
    name: "Adınız",
    email: "E-posta",
    phone: "Telefon",
    message: "Mesajınız",
    required: "Zorunlu alan",
    send: "Gönder",
  },
  home: {
    heroEyebrow: "Uzman Diş Hekimi · Kadıköy, İstanbul",
    heroTitle: "Sağlıklı Dişler, Özgür Bir Gülüş",
    heroLead:
      "Dt. Kübra Çolak kliniğinde kişiye özel tedavi planları ve modern teknoloji ile ağız sağlığınızı güvence altına alıyoruz.",
    clinicTitle: "Kliniğimiz",
    clinicLead:
      "Modern cihazlar ve steril ortamıyla kliniğimiz, her yaştan hastaya konforlu bir tedavi deneyimi sunmaktadır.",
    doctorsKicker: "Uzman Kadromuz",
    doctorsTitle: "Güvenilir Eller, Nazik Bir Dokunuş",
    doctorsLead:
      "Deneyimli diş hekimimiz, her hastanın ihtiyacını bireysel olarak değerlendirerek en uygun tedavi planını belirler.",
    servicesTitle: "Tedavilerimiz",
    servicesLead:
      "İmplanttan beyazlatmaya, kanal tedavisinden estetik uygulamalara kadar kapsamlı diş hekimliği hizmetleri sunuyoruz.",
    contactTitle: "Randevu Alın",
    contactLead:
      "Size en uygun zamanı birlikte belirleyelim. Kliniğimiz hafta içi ve cumartesi günleri hizmet vermektedir.",
  },
  about: {
    title: "Hakkımda",
    lead: "Dt. Kübra Çolak, 2015 yılından bu yana İstanbul'da diş hekimliği yapmaktadır. Hastalarına karşı duyduğu özen ve uygulanan güncel tedavi yöntemleriyle tanınmaktadır.",
    storyTitle: "Benim Hikayem",
    story:
      "Marmara Üniversitesi Diş Hekimliği Fakültesi'nden mezun olduktan sonra çeşitli kliniklerde uzmanlaşma sürecimi tamamladım. Günümüz diş hekimliğini takip etmek amacıyla yurt içi ve yurt dışı eğitimlere katılmaya devam ediyorum. Her hastamı özgün bir birey olarak değerlendiriyor, tedavi sürecinde tam şeffaflık ve güven ortamı sunmayı öncelikli ilkem olarak benimsiyorum.",
    values: [
      "Hastayı merkeze alan bireysel tedavi planlaması",
      "Modern teknoloji ile steril ve güvenli uygulama",
      "Şeffaf iletişim ve bilgilendirme",
      "Estetik ve fonksiyonelliği dengede tutan yaklaşım",
    ],
    valuesTitle: "Çalışma Prensipleri",
  },
  treatments: {
    title: "Tedaviler",
    lead: "Ağız ve diş sağlığınız için kapsamlı tedavi seçenekleri.",
    implantSection: {
      tab: "Diş İmplantı",
      eyebrow: "ADIM ADIM TEDAVİ SÜRECİ",
      title: "İmplant Nasıl Yapılır?",
      summary: "Eksik dişin yerine titanyum vida yerleştirilerek üzerine sabit bir diş yapılır.",
      steps: [
        { title: "3D Tarama", description: "3D tomografi ile implantın yerleştirileceği bölge hassas şekilde planlanır." },
        { title: "Yerleştirme", description: "İmplant vidası kontrollü cerrahi yöntemle çene kemiğine yerleştirilir." },
        { title: "İyileşme Süreci", description: "İmplantın kemikle kaynaşması için bekleme süreci uygulanır." },
        { title: "Kaplama", description: "Kişiye özel kaplama takılarak tedavi tamamlanır." },
      ],
    },
    categories: [
      {
        label: "Diş İmplantı Tedavisi",
        image: "/images/site/diş-implanti.png",
        items: [
          { label: "Dikişsiz İmplant", href: "/tedaviler/dis-implanti" },
          { label: "İmplant Bakımı", href: "/tedaviler/dis-implanti" },
          { label: "İmplant Markaları", href: "/tedaviler/dis-implanti" },
          { label: "İmplant Fiyatları", href: "/tedaviler/dis-implanti" },
          { label: "Zirkonyum İmplant", href: "/tedaviler/dis-implanti" },
        ],
      },
      {
        label: "Estetik Diş Hekimliği",
        image: "/images/site/Estetik-Dis-Hekimligi.png",
        items: [
          { label: "Diş Beyazlatma Yöntemleri", href: "/tedaviler/estetik-dis-hekimligi#dis-beyazlatma" },
          { label: "Gülüş Tasarımı", href: "/tedaviler/estetik-dis-hekimligi#gulus-tasarimi" },
          { label: "Bonding Uygulaması", href: "/tedaviler/estetik-dis-hekimligi#bonding" },
          { label: "Inley/Onley Porselen Dolgu", href: "/tedaviler/estetik-dis-hekimligi#inley-onley" },
          { label: "Laminate Porselen Kaplama", href: "/tedaviler/estetik-dis-hekimligi#laminate" },
          { label: "Zirkonyum Diş Kaplama", href: "/tedaviler/estetik-dis-hekimligi#zirkonyum" },
        ],
      },
      {
        label: "Restoratif Tedaviler",
        image: "/images/site/clinic-room.png",
        items: [
          { label: "Diş Dolgusu", href: "/tedaviler/restoratif-tedaviler#dis-dolgusu" },
          { label: "Kanal Tedavisi", href: "/tedaviler/restoratif-tedaviler#kanal-tedavisi" },
          { label: "Diş Çekimi", href: "/tedaviler/restoratif-tedaviler#dis-cekimi" },
          { label: "Protez Diş", href: "/tedaviler/restoratif-tedaviler#protez-dis" },
          { label: "Zirkonyum Kaplama", href: "/tedaviler/restoratif-tedaviler#zirkonyum-kaplama" },
        ],
      },
      {
        label: "Endodonti",
        image: "/images/site/Endodonti.png",
        items: [
          { label: "Kanal Tedavisi", href: "/tedaviler/endodonti#kanal-tedavisi" },
          { label: "Apikal Rezeksiyon", href: "/tedaviler/endodonti#apikal-rezeksiyon" },
          { label: "Kanal Yenileme", href: "/tedaviler/endodonti#kanal-yenileme" },
          { label: "Vital Pulpa Tedavisi", href: "/tedaviler/endodonti#vital-pulpa" },
          { label: "Kök Ucu Ameliyatı", href: "/tedaviler/endodonti#kok-ucu-ameliyati" },
        ],
      },
      {
        label: "Periodontoloji",
        image: "/images/site/periodontoloji.webp",
        items: [
          { label: "Diş Eti Hastalıkları Tedavisi", href: "/tedaviler/periodontoloji#dis-eti-hastaliklari" },
          { label: "Diş Eti Cerrahisi", href: "/tedaviler/periodontoloji#dis-eti-cerrahisi" },
          { label: "Kemik Grefti", href: "/tedaviler/periodontoloji#kemik-grefti" },
          { label: "Gingival Greft", href: "/tedaviler/periodontoloji#gingival-greft" },
          { label: "İmplant Çevresi Tedavi", href: "/tedaviler/periodontoloji#implant-cevresi" },
        ],
      },
      {
        label: "Pedodonti",
        image: "/images/site/pedodonti.png",
        items: [
          { label: "Çocuk Diş Muayenesi", href: "/tedaviler/pedodonti#cocuk-dis-muayenesi" },
          { label: "Süt Dişi Dolgusu", href: "/tedaviler/pedodonti#sut-disi-dolgusu" },
          { label: "Çocuk Kanal Tedavisi", href: "/tedaviler/pedodonti#cocuk-kanal-tedavisi" },
          { label: "Fissür Örtücü", href: "/tedaviler/pedodonti#fissur-oturucu" },
          { label: "Flor Uygulaması", href: "/tedaviler/pedodonti#flor-uygulamasi" },
        ],
      },
    ],
  },
  gallery: {
    title: "Galeri",
    lead: "Kliniğimizden ve tedavi süreçlerimizden kareler.",
  },
  blog: {
    title: "Blog",
    lead: "Ağız ve diş sağlığına dair güncel bilgiler ve tavsiyeler.",
    readTime: "okuma",
  },
  contact: {
    title: "İletişim",
    lead: "Randevu almak veya sorularınızı iletmek için bize ulaşın.",
    formTitle: "Mesaj Gönderin",
    infoTitle: "İletişim Bilgileri",
  },
  footer: {
    summary:
      "Dt. Kübra Çolak kliniği olarak ağız ve diş sağlığınızı en güncel yöntemlerle korumayı hedefliyoruz.",
    quickLinks: "Hızlı Bağlantılar",
    contact: "İletişim",
    rights: "Tüm hakları saklıdır.",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    treatments: "Treatments",
    gallery: "Gallery",
    blog: "Blog",
    contact: "Contact",
  },
  common: {
    allTreatments: "All Treatments",
    appointment: "Book Appointment",
    details: "Details",
    name: "Your Name",
    email: "Email",
    phone: "Phone",
    message: "Your Message",
    required: "Required field",
    send: "Send",
  },
  home: {
    heroEyebrow: "Dental Specialist · Kadıköy, Istanbul",
    heroTitle: "Healthy Teeth, A Confident Smile",
    heroLead:
      "At Dt. Kübra Çolak's clinic, personalised treatment plans and modern technology safeguard your oral health.",
    clinicTitle: "Our Clinic",
    clinicLead:
      "Equipped with modern devices and the highest sterilisation standards, our clinic provides a comfortable experience for patients of all ages.",
    doctorsKicker: "Our Specialist",
    doctorsTitle: "Trusted Hands, Gentle Care",
    doctorsLead:
      "Our experienced dentist assesses each patient's individual needs to determine the most appropriate treatment plan.",
    servicesTitle: "Our Treatments",
    servicesLead:
      "From implants and whitening to root canals and cosmetic procedures — comprehensive dental care under one roof.",
    contactTitle: "Book an Appointment",
    contactLead:
      "Let's find the most convenient time for you. Our clinic is open on weekdays and Saturdays.",
  },
  about: {
    title: "About",
    lead: "Dt. Kübra Çolak has been practising dentistry in Istanbul since 2015, known for her attentive care and up-to-date treatment techniques.",
    storyTitle: "My Story",
    story:
      "After graduating from Marmara University Faculty of Dentistry, I completed my specialisation at various clinics. I continue attending national and international training programmes to stay current with modern dentistry. I treat every patient as a unique individual and make full transparency and trust a cornerstone of the treatment process.",
    values: [
      "Patient-centred individual treatment planning",
      "Modern technology for safe and sterile procedures",
      "Transparent communication and informed consent",
      "Balancing aesthetics with long-term function",
    ],
    valuesTitle: "Working Principles",
  },
  treatments: {
    title: "Treatments",
    lead: "Comprehensive treatment options for your oral health.",
    implantSection: {
      tab: "Dental Implant",
      eyebrow: "STEP BY STEP TREATMENT PROCESS",
      title: "How Is an Implant Done?",
      summary: "A titanium screw is placed where the missing tooth was, and a fixed crown is attached on top.",
      steps: [
        { title: "3D Scan", description: "The implant site is precisely planned using 3D tomography." },
        { title: "Placement", description: "The implant screw is surgically inserted into the jawbone." },
        { title: "Healing", description: "A waiting period is applied for the implant to fuse with the bone." },
        { title: "Crown", description: "A custom-made crown is fitted to complete the treatment." },
      ],
    },
    categories: [
      {
        label: "Dental Implant Treatment",
        image: "/images/site/diş-implanti.png",
        items: [
          { label: "Flapless Implant", href: "/tedaviler/dis-implanti" },
          { label: "Implant Aftercare", href: "/tedaviler/dis-implanti" },
          { label: "Implant Brands", href: "/tedaviler/dis-implanti" },
          { label: "Implant Pricing", href: "/tedaviler/dis-implanti" },
          { label: "Zirconia Implant", href: "/tedaviler/dis-implanti" },
        ],
      },
      {
        label: "Cosmetic Dentistry",
        image: "/images/site/Estetik-Dis-Hekimligi.png",
        items: [
          { label: "Teeth Whitening Methods", href: "/tedaviler/estetik-dis-hekimligi#dis-beyazlatma" },
          { label: "Smile Design", href: "/tedaviler/estetik-dis-hekimligi#gulus-tasarimi" },
          { label: "Bonding", href: "/tedaviler/estetik-dis-hekimligi#bonding" },
          { label: "Inlay/Onlay Porcelain Filling", href: "/tedaviler/estetik-dis-hekimligi#inley-onley" },
          { label: "Laminate Porcelain Veneer", href: "/tedaviler/estetik-dis-hekimligi#laminate" },
          { label: "Zirconia Crown", href: "/tedaviler/estetik-dis-hekimligi#zirkonyum" },
        ],
      },
      {
        label: "Restorative Treatments",
        image: "/images/site/clinic-room.png",
        items: [
          { label: "Dental Filling", href: "/tedaviler/restoratif-tedaviler#dis-dolgusu" },
          { label: "Root Canal", href: "/tedaviler/restoratif-tedaviler#kanal-tedavisi" },
          { label: "Tooth Extraction", href: "/tedaviler/restoratif-tedaviler#dis-cekimi" },
          { label: "Dental Prosthesis", href: "/tedaviler/restoratif-tedaviler#protez-dis" },
          { label: "Zirconia Crown", href: "/tedaviler/restoratif-tedaviler#zirkonyum-kaplama" },
        ],
      },
      {
        label: "Endodontics",
        image: "/images/site/Endodonti.png",
        items: [
          { label: "Root Canal Treatment", href: "/tedaviler/endodonti#kanal-tedavisi" },
          { label: "Apical Resection", href: "/tedaviler/endodonti#apikal-rezeksiyon" },
          { label: "Root Canal Retreatment", href: "/tedaviler/endodonti#kanal-yenileme" },
          { label: "Vital Pulp Therapy", href: "/tedaviler/endodonti#vital-pulpa" },
          { label: "Periapical Surgery", href: "/tedaviler/endodonti#kok-ucu-ameliyati" },
        ],
      },
      {
        label: "Periodontology",
        image: "/images/site/periodontoloji.webp",
        items: [
          { label: "Gum Disease Treatment", href: "/tedaviler/periodontoloji#dis-eti-hastaliklari" },
          { label: "Gum Surgery", href: "/tedaviler/periodontoloji#dis-eti-cerrahisi" },
          { label: "Bone Grafting", href: "/tedaviler/periodontoloji#kemik-grefti" },
          { label: "Gingival Graft", href: "/tedaviler/periodontoloji#gingival-greft" },
          { label: "Peri-implant Treatment", href: "/tedaviler/periodontoloji#implant-cevresi" },
        ],
      },
      {
        label: "Pedodontics",
        image: "/images/site/pedodonti.png",
        items: [
          { label: "Paediatric Dental Exam", href: "/tedaviler/pedodonti#cocuk-dis-muayenesi" },
          { label: "Primary Tooth Filling", href: "/tedaviler/pedodonti#sut-disi-dolgusu" },
          { label: "Paediatric Root Canal", href: "/tedaviler/pedodonti#cocuk-kanal-tedavisi" },
          { label: "Fissure Sealant", href: "/tedaviler/pedodonti#fissur-oturucu" },
          { label: "Fluoride Treatment", href: "/tedaviler/pedodonti#flor-uygulamasi" },
        ],
      },
    ],
  },
  gallery: {
    title: "Gallery",
    lead: "Snapshots from our clinic and treatment processes.",
  },
  blog: {
    title: "Blog",
    lead: "Up-to-date information and advice on oral and dental health.",
    readTime: "read",
  },
  contact: {
    title: "Contact",
    lead: "Get in touch to book an appointment or ask any questions.",
    formTitle: "Send a Message",
    infoTitle: "Contact Information",
  },
  footer: {
    summary:
      "At Dt. Kübra Çolak's clinic, we aim to protect your oral health using the most modern methods available.",
    quickLinks: "Quick Links",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};

const de: Dictionary = {
  nav: {
    home: "Startseite",
    about: "Über mich",
    treatments: "Behandlungen",
    gallery: "Galerie",
    blog: "Blog",
    contact: "Kontakt",
  },
  common: {
    allTreatments: "Alle Behandlungen",
    appointment: "Termin vereinbaren",
    details: "Details",
    name: "Ihr Name",
    email: "E-Mail",
    phone: "Telefon",
    message: "Ihre Nachricht",
    required: "Pflichtfeld",
    send: "Senden",
  },
  home: {
    heroEyebrow: "Zahnärztin · Kadıköy, Istanbul",
    heroTitle: "Gesunde Zähne, Strahlendes Lächeln",
    heroLead:
      "In der Praxis von Dt. Kübra Çolak schützen wir Ihre Mundgesundheit mit individuellen Behandlungsplänen und moderner Technologie.",
    clinicTitle: "Unsere Praxis",
    clinicLead:
      "Unsere Praxis ist mit modernen Geräten ausgestattet und erfüllt höchste Sterilisationsstandards – für ein angenehmes Behandlungserlebnis in jedem Alter.",
    doctorsKicker: "Unsere Spezialistin",
    doctorsTitle: "Vertrauensvolle Hände, Behutsame Behandlung",
    doctorsLead:
      "Unsere erfahrene Zahnärztin bewertet die individuellen Bedürfnisse jedes Patienten und erstellt den passenden Behandlungsplan.",
    servicesTitle: "Unsere Behandlungen",
    servicesLead:
      "Von Implantaten und Aufhellung bis hin zu Wurzelkanalbehandlungen und ästhetischen Eingriffen – umfassende Zahnmedizin unter einem Dach.",
    contactTitle: "Termin vereinbaren",
    contactLead:
      "Finden Sie gemeinsam mit uns den passenden Termin. Unsere Praxis ist werktags und samstags geöffnet.",
  },
  about: {
    title: "Über mich",
    lead: "Dt. Kübra Çolak praktiziert seit 2015 Zahnheilkunde in Istanbul und ist für ihre einfühlsame Betreuung und aktuelle Behandlungsmethoden bekannt.",
    storyTitle: "Meine Geschichte",
    story:
      "Nach meinem Abschluss an der Fakultät für Zahnheilkunde der Marmara-Universität absolvierte ich meine Spezialisierung in verschiedenen Kliniken. Ich nehme regelmäßig an nationalen und internationalen Fortbildungen teil, um stets auf dem neuesten Stand der Zahnmedizin zu bleiben. Jeden Patienten behandle ich als einzigartiges Individuum – Transparenz und Vertrauen stehen dabei an erster Stelle.",
    values: [
      "Patientenorientierte, individuelle Behandlungsplanung",
      "Moderne Technologie für sichere und sterile Eingriffe",
      "Transparente Kommunikation und Aufklärung",
      "Balance zwischen Ästhetik und Langzeitfunktion",
    ],
    valuesTitle: "Arbeitsprinzipien",
  },
  treatments: {
    title: "Behandlungen",
    lead: "Umfassende Behandlungsoptionen für Ihre Mundgesundheit.",
    implantSection: {
      tab: "Zahnimplantat",
      eyebrow: "SCHRITT FÜR SCHRITT BEHANDLUNGSABLAUF",
      title: "Wie wird ein Implantat eingesetzt?",
      summary: "An der Stelle des fehlenden Zahns wird eine Titanschraube eingesetzt und darauf eine feste Krone befestigt.",
      steps: [
        { title: "3D-Scan", description: "Die Implantatposition wird mithilfe der 3D-Tomografie präzise geplant." },
        { title: "Einsetzen", description: "Die Implantatsschraube wird chirurgisch in den Kieferknochen eingesetzt." },
        { title: "Heilungsphase", description: "Das Implantat verwächst in einer Wartezeit mit dem Knochen." },
        { title: "Kronenversorgung", description: "Eine individuell gefertigte Krone wird aufgesetzt und die Behandlung abgeschlossen." },
      ],
    },
    categories: [
      {
        label: "Zahnimplantat-Behandlung",
        image: "/images/site/diş-implanti.png",
        items: [
          { label: "Flap-freies Implantat", href: "/tedaviler/dis-implanti" },
          { label: "Implantat-Nachsorge", href: "/tedaviler/dis-implanti" },
          { label: "Implantat-Marken", href: "/tedaviler/dis-implanti" },
          { label: "Implantat-Preise", href: "/tedaviler/dis-implanti" },
          { label: "Zirkonimplantat", href: "/tedaviler/dis-implanti" },
        ],
      },
      {
        label: "Ästhetische Zahnheilkunde",
        image: "/images/site/Estetik-Dis-Hekimligi.png",
        items: [
          { label: "Zahnaufhellungsmethoden", href: "/tedaviler/estetik-dis-hekimligi#dis-beyazlatma" },
          { label: "Smile Design", href: "/tedaviler/estetik-dis-hekimligi#gulus-tasarimi" },
          { label: "Bonding", href: "/tedaviler/estetik-dis-hekimligi#bonding" },
          { label: "Inlay/Onlay Keramikfüllung", href: "/tedaviler/estetik-dis-hekimligi#inley-onley" },
          { label: "Laminat-Porzellanverblendung", href: "/tedaviler/estetik-dis-hekimligi#laminate" },
          { label: "Zirkoniumkrone", href: "/tedaviler/estetik-dis-hekimligi#zirkonyum" },
        ],
      },
      {
        label: "Restaurative Behandlungen",
        image: "/images/site/clinic-room.png",
        items: [
          { label: "Zahnfüllung", href: "/tedaviler/restoratif-tedaviler#dis-dolgusu" },
          { label: "Wurzelkanalbehandlung", href: "/tedaviler/restoratif-tedaviler#kanal-tedavisi" },
          { label: "Zahnextraktion", href: "/tedaviler/restoratif-tedaviler#dis-cekimi" },
          { label: "Zahnprothese", href: "/tedaviler/restoratif-tedaviler#protez-dis" },
          { label: "Zirkoniumkrone", href: "/tedaviler/restoratif-tedaviler#zirkonyum-kaplama" },
        ],
      },
      {
        label: "Endodontie",
        image: "/images/site/Endodonti.png",
        items: [
          { label: "Wurzelkanalbehandlung", href: "/tedaviler/endodonti#kanal-tedavisi" },
          { label: "Apikale Resektion", href: "/tedaviler/endodonti#apikal-rezeksiyon" },
          { label: "Wurzelkanalrevision", href: "/tedaviler/endodonti#kanal-yenileme" },
          { label: "Vitalerhaltende Pulpatherapie", href: "/tedaviler/endodonti#vital-pulpa" },
          { label: "Periapikale Chirurgie", href: "/tedaviler/endodonti#kok-ucu-ameliyati" },
        ],
      },
      {
        label: "Parodontologie",
        image: "/images/site/periodontoloji.webp",
        items: [
          { label: "Parodontitis-Behandlung", href: "/tedaviler/periodontoloji#dis-eti-hastaliklari" },
          { label: "Parodontalchirurgie", href: "/tedaviler/periodontoloji#dis-eti-cerrahisi" },
          { label: "Knochenaufbau", href: "/tedaviler/periodontoloji#kemik-grefti" },
          { label: "Gingivatransplantation", href: "/tedaviler/periodontoloji#gingival-greft" },
          { label: "Periimplantäre Therapie", href: "/tedaviler/periodontoloji#implant-cevresi" },
        ],
      },
      {
        label: "Kinderzahnheilkunde",
        image: "/images/site/pedodonti.png",
        items: [
          { label: "Kinderzahnuntersuchung", href: "/tedaviler/pedodonti#cocuk-dis-muayenesi" },
          { label: "Milchzahnfüllung", href: "/tedaviler/pedodonti#sut-disi-dolgusu" },
          { label: "Kindliche Wurzelkanalbehandlung", href: "/tedaviler/pedodonti#cocuk-kanal-tedavisi" },
          { label: "Fissurenversiegelung", href: "/tedaviler/pedodonti#fissur-oturucu" },
          { label: "Fluoridbehandlung", href: "/tedaviler/pedodonti#flor-uygulamasi" },
        ],
      },
    ],
  },
  gallery: {
    title: "Galerie",
    lead: "Einblicke in unsere Praxis und Behandlungsabläufe.",
  },
  blog: {
    title: "Blog",
    lead: "Aktuelle Informationen und Tipps rund um Mund- und Zahngesundheit.",
    readTime: "Lesezeit",
  },
  contact: {
    title: "Kontakt",
    lead: "Kontaktieren Sie uns für einen Termin oder bei Fragen.",
    formTitle: "Nachricht senden",
    infoTitle: "Kontaktinformationen",
  },
  footer: {
    summary:
      "In der Praxis von Dt. Kübra Çolak streben wir danach, Ihre Mundgesundheit mit modernsten Methoden zu schützen.",
    quickLinks: "Schnelllinks",
    contact: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { tr, en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
