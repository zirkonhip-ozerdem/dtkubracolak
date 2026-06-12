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
  address: "İzmir, Türkiye",
  mapsLabel: "Klinik konumu",
};

export const dictionaries = {
  tr: {
    meta: {
      title: "Dt. Kübra Çolak | Hakkımda",
      description: "Dt. Kübra Çolak Ağız ve Diş Sağlığı Muayenehanesi.",
    },
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      treatments: "Tedaviler",
      gallery: "Galeri",
      blog: "Blog",
      faq: "S.S.S.",
      contact: "İletişim",
    },
    common: {
      details: "Detaylı Bilgi",
      appointment: "Randevu Al",
      allTreatments: "Tüm Tedaviler",
      send: "Gönder",
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      message: "Mesajınız",
      required: "Zorunlu alan",
    },
    home: {
      heroEyebrow: "Dt. Kübra Çolak",
      heroTitle: "Sağlıklı ve işlevsel bir gülüş için modern diş hekimliği",
      heroLead:
        "Koruyucu diş hekimliği, estetik uygulamalar ve dijital tedavi planlamasını sakin, güven veren bir klinik deneyimiyle buluşturuyoruz.",
      doctorsTitle: "Hekim Yaklaşımı",
      doctorsKicker: "Size ayrılan özen",
      doctorsLead:
        "Her tedavi planı detaylı muayene, şeffaf bilgilendirme ve uzun vadeli ağız sağlığı hedefleriyle hazırlanır.",
      servicesTitle: "Tedaviler",
      servicesLead: "İhtiyacınıza göre planlanan kapsamlı diş hekimliği çözümleri.",
      clinicTitle: "Klinik",
      clinicLead:
        "Sterilizasyon protokolleri, dijital cihazlar ve hasta konforunu öne alan yalın bir klinik akışı.",
      contactTitle: "İletişime Geçin",
      contactLead:
        "Muayene, tedavi planlaması veya kontrol randevuları için bizimle iletişime geçebilirsiniz.",
    },
    about: {
      title: "Hakkımda",
      lead: "Uluslararası standartlarda, bilimsel doğruluk ve hasta memnuniyeti odaklı modern diş hekimliği.",
      missionTitle: "Misyonumuz",
      missionText: "Güncel dijital diş hekimliği altyapısını ve kanıta dayalı tedavi protokollerini, her hastamız için sakin, şeffaf ve güven veren bir klinik deneyimiyle buluşturmak.",
      visionTitle: "Vizyonumuz",
      visionText: "Doğal diş dokusunu koruyan biyomimetik yaklaşımları merkeze alarak, İzmir'de sürdürülebilir ağız ve diş sağlığı çözümlerinde öncü ve referans bir muayenehane olmak.",
      ethicsTitle: "Tıbbi Etik & Şeffaflık",
      ethicsDesc: "Tüm tedavi süreçlerinde mevzuatlara, hasta haklarına ve şeffaf bilgilendirme ilkelerine tam uyum.",
      digitalTitle: "Dijital & Biyomimetik",
      digitalDesc: "Doğal diş dokusunu maksimum düzeyde koruyan yenilikçi teknolojiler ve güncel materyal kullanımı.",
      comfortTitle: "Hasta Konforu & Güven",
      comfortDesc: "Sterilizasyon standartlarından asla ödün vermeyen, kaygılardan uzak, huzurlu bir klinik ortamı.",
      
      // Üst taraftaki fotoğraflı ana hikaye
      storyTitle: "Dt. Kübra Çolak: Gülüşünüzdeki Sağlık ve Estetik",
      story: "  Selçuk Üniversitesi Diş Hekimliği Fakültesi mezunu olan Dt. Kübra Çolak, 2020 yılından bu yana diş hekimliği alanında modern ve çözüm odaklı yaklaşımlarıyla hizmet vermektedir. Meslek hayatına Manisa Deva Tıp Merkezi’nde adım atan Çolak, ardından Dental Estetik Center ve Asya Dental Ağız ve Diş Sağlığı Polikliniği gibi prestijli kliniklerde görev alarak geniş bir vaka tecrübesi edinmiştir. 2025 yılı itibarıyla İzmir Balçova’daki kendi muayenehanesinde hastalarını kabul etmeye başlayan Dt. Kübra Çolak, 'kişiye özel diş hekimliği' anlayışıyla İzmir’de sağlıklı gülüşlere imza atmaktadır.",
      
      // Alttaki sol kart: Neden Biz?
      whyTitle: "Neden Dt. Kübra Çolak?",
      whyItems: [
        "Deneyim: Kamu ve özel sektörde geçen 6 yıllık aktif klinik tecrübe ve geniş vaka uzmanlığı.",
        "Güncel Teknoloji: Dijital diş hekimliği, lazer uygulamaları ve 3D görüntüleme sistemleri.",
        "Kişiselleştirilmiş Bakım: Hastaya özel şekillenen estetik ve fonksiyonel çözümler.",
        "Konforlu Tedavi: Genel anestezi ve sedasyon seçenekleriyle fobi oluşturmayan rahat süreç."
      ],
      
      // Alttaki sağ kart: Çalışma Alanları
      areasTitle: "Klinik Odak ve Çalışma Alanları",
      areasLead: "Bilimsel gelişmeler ışığında muayenehanemizde öncelik verdiğimiz başlıca uzmanlık alanları:",
      areas: [
        "Dijital Diş Hekimliği & Gülüş Yaklaşımları",
        "Biyomimetik ve Estetik Restorasyonlar",
        "Endodonti (Kök Kanal Tedavileri)",
        "Koruyucu ve Önleyici Diş Hekimliği"
      ]
    },
    treatments: {
      title: "Tedaviler",
      lead: "Diş sağlığınız, estetik beklentileriniz ve yaşam ritminiz birlikte değerlendirilerek tedavi süreci planlanır.",
    },
    gallery: {
      title: "Galeri",
      lead: "Klinik atmosferi, tedavi odaları ve hasta deneyimine dair seçili kareler.",
    },
    blog: {
      title: "Blog",
      lead: "Ağız ve diş sağlığı hakkında kısa, anlaşılır ve bilgilendirici paylaşımlar.",
      readTime: "dk okuma",
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      lead: "Klinik tedavileri, süreçler ve merak ettiğiniz detaylar hakkında bilgilendirmeler.",
    },
    contact: {
      title: "İletişim",
      lead: "Sorularınız ve randevu talepleriniz için formu doldurabilir ya da doğrudan bize ulaşabilirsiniz.",
      formTitle: "Randevu ve bilgi talebi",
      infoTitle: "Klinik bilgileri",
    },
    footer: {
      summary: "İzmir Balçova'daki muayenehanemizde, güncel diş hekimliği yaklaşımları ve hasta odaklı planlamalarla ağız ve diş sağlığı alanında hizmet vermekteyiz.",
      quickLinks: "Kurumsal",
      contact: "Bize Ulaşın",
      rights: "Tüm Hakları Saklıdır.",
      title: "Diş Hekimi",
      kvkk: "KVKK Aydınlatma Metni",
      cookiePolicy: "Çerez Politikası",
      workingHours: "Pazartesi - Cumartesi: 09:00 - 19:00",
      legalDisclaimer: "Sitede yer alan klinik ve tıbbi bilgiler, kullanıcıları bilgilendirme amaçlı olup; kesinlikle bir teşhis, tanı veya tedavi yöntemi seçimi niteliği taşımaz."
    },
  },
  en: {
    meta: {
      title: "Dentist Kübra Çolak | About Me",
      description: "About Dentist Kübra Çolak Oral and Dental Health Clinic.",
    },
    nav: {
      home: "Home",
      about: "About Me",
      treatments: "Treatments",
      gallery: "Gallery",
      blog: "Blog",
      faq: "F.A.Q.",
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
      heroEyebrow: "Dentist Kübra Çolak",
      heroTitle: "Modern dentistry for a healthy and functional smile",
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
      title: "About Me",
      lead: "Modern dentistry based on international standards, scientific accuracy, and patient satisfaction.",
      missionTitle: "Our Mission",
      missionText: "To bring together up-to-date digital dentistry infrastructure and evidence-based treatment protocols with a calm, transparent, and reassuring clinical experience for every patient.",
      visionTitle: "Our Vision",
      visionText: "To become a pioneering and reference clinic in sustainable oral and dental health solutions in Izmir, centering on biomimetic approaches that preserve natural tooth structure.",
      ethicsTitle: "Medical Ethics & Transparency",
      ethicsDesc: "Full compliance with regulations, patient rights, and transparent information principles in all treatment processes.",
      digitalTitle: "Digital & Biomimetic",
      digitalDesc: "Innovative technologies and up-to-date material usage that maximize the preservation of natural tooth structure.",
      comfortTitle: "Patient Comfort & Trust",
      comfortDesc: "A peaceful clinical environment far from anxiety, never compromising on sterilization standards.",
      
      // Upper section main story
      storyTitle: "Dt. Kübra Çolak: Health and Aesthetics in Your Smile",
      story: "Graduated from Selçuk University Faculty of Dentistry, Dt. Kübra Çolak has been providing service with modern and solution-oriented approaches in the field of dentistry since 2020. Stepping into her professional life at Manisa Deva Medical Center, Çolak then gained extensive case experience by working in prestigious clinics such as Dental Estetik Center and Asya Dental Oral and Dental Health Polyclinic. Accepting patients in her own clinic in Izmir Balçova as of 2025, Dt. Kübra Çolak signs healthy smiles in Izmir with the understanding of 'personalized dentistry'.",
      
      // Bottom left card: Why Us?
      whyTitle: "Why Dt. Kübra Çolak?",
      whyItems: [
        "Experience: 6 years of active clinical experience and extensive case expertise in both public and private sectors.",
        "Up-to-Date Technology: Modern treatment methods with digital dentistry, laser applications, and 3D imaging systems.",
        "Personalized Care: Aesthetic and functional solutions tailored to the patient.",
        "Comfortable Treatment: A relaxed treatment process without phobia, thanks to general anesthesia and sedation options."
      ],
      
      // Bottom right card: Clinical Focus Areas
      areasTitle: "Clinical Focus and Fields of Activity",
      areasLead: "Main specialization areas we prioritize in our clinic in the light of scientific developments:",
      areas: [
        "Digital Dentistry & Smile Approaches",
        "Biomimetic and Aesthetic Restorasyonlar",
        "Endodontics (Root Canal Treatments)",
        "Protective and Preventive Dentistry"
      ]
    },
    treatments: {
      title: "Treatments",
      lead: "Your oral health, aesthetic expectations and daily rhythm are evaluated together before treatment is planned.",
    },
    gallery: {
      title: "Gallery",
      lead: "Selected views of the clinic atmosphere, treatment rooms and patient experience.",
    },
    blog: {
      title: "Blog",
      lead: "Short, practical and informative notes on oral and dental health.",
      readTime: "min read",
    },
    faq: {
      title: "Frequently Asked Questions",
      lead: "Information about clinical treatments, processes, and frequently wondered details.",
    },
    contact: {
      title: "Contact",
      lead: "Use the form for questions and appointment requests, or contact us directly.",
      formTitle: "Appointment and information request",
      infoTitle: "Clinic details",
    },
    footer: {
      summary: "In our clinic in Izmir Balcova, we provide services in the field of oral and dental health with modern dentistry approaches and patient-oriented planning.",
      quickLinks: "Corporate",
      contact: "Contact Us",
      rights: "All Rights Reserved.",
      title: "Dentist",
      kvkk: "Clarification Text on KVKK",
      cookiePolicy: "Cookie Policy",
      workingHours: "Monday - Saturday: 09:00 - 19:00",
      legalDisclaimer: "The clinical and medical information on this site is for informational purposes only and does not constitute a diagnosis, identification, or selection of a treatment method."
    },
  },
  de: {
    meta: {
      title: "Zahnärztin Kübra Çolak | Über mich",
      description: "Über Zahnärztin Kübra Çolak Praxis für Mund- und Zahngesundheit.",
    },
    nav: {
      home: "Startseite",
      about: "Über mich",
      treatments: "Behandlungen",
      gallery: "Galerie",
      blog: "Blog",
      faq: "F.A.Q.",
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
      heroEyebrow: "Zahnärztin Kübra Çolak",
      heroTitle: "Moderne Zahnmedizin für ein gesundes und funktionelles Lächeln",
      heroLead:
        "Wir verbinden vorbeugende Zahnmedizin, ästhetische Behandlungen und digitale Planung mit einer ruhigen, vertrauensvollen Praxserfahrung.",
      doctorsTitle: "Praxisansatz",
      doctorsKicker: "Sorgfalt für Ihre Bedürfnisse",
      doctorsLead:
        "Jeder Behandlungsplan beginnt mit einer gründlichen Untersuchung, klarer Beratung und langfristigen Zielen für die Mundgesundheit.",
      servicesTitle: "Behandlungen",
      servicesLead: "Umfassende zahnmedizinische Lösungen, geplant nach Ihrem Bedarf.",
      clinicTitle: "Praxis",
      clinicLead:
        "Ein klarer Praxisablauf mit Sterilisationsprotokollen, digitaler Ausstattung und Fokus auf Patientenkomfort.",
      contactTitle: "Kontakt Aufnehmen",
      contactLead:
        "Kontaktieren Sie uns für Untersuchungen, Behandlungsplanung oder Kontrolltermine.",
    },
    about: {
      title: "Über Mich",
      lead: "Moderne Zahnmedizin nach internationalen Standards, wissenschaftlicher Genauigkeit und Patientenzufriedenheit.",
      missionTitle: "Unsere Mission",
      missionText: "Die Kombination aus modernster digitaler zahnmedizinischer Infrastruktur und evidenzbasierten Behandlungsprotokollen mit einer ruhigen, transparenten und vertrauensvollen klinischen Erfahrung für jeden Patienten.",
      visionTitle: "Unsere Vision",
      visionText: "Eine wegweisende und referenzierte Praxis für nachhaltige Mund- und Zahngesundheitslösungen in Izmir zu sein, wobei biomimetische Ansätze im Vordergrund stehen, die die natürliche Zahnstruktur bewahren.",
      ethicsTitle: "Medizinische Ethik & Transparenz",
      ethicsDesc: "Volle Einhaltung von Vorschriften, Patientenrechten und transparenten Informationsprinzipien in allen Behandlungsprozessen.",
      digitalTitle: "Digital & Biomimetisch",
      digitalDesc: "Innovative Technologien und modernste Materialverwendung, die den Erhalt der natürlichen Zahnstruktur maximieren.",
      comfortTitle: "Patientenkomfort & Vertrauen",
      comfortDesc: "Eine friedliche klinische Umgebung fernab von Ängsten, ohne jemals Kompromisse bei den Sterilisationsstandards einzugehen.",
      
      // Upper section main story
      storyTitle: "ZÄ. Kübra Çolak: Gesundheit und Ästhetik in Ihrem Lächeln",
      story: "Nach ihrem Abschluss an der Zahnmedizinischen Fakultät der Selçuk-Universität bietet ZÄ. Kübra Çolak seit 2020 moderne und lösungsorientierte Ansätze im Bereich der Zahnmedizin an. Nach dem Einstieg in ihr Berufsleben im Manisa Deva Medizinischen Zentrum sammelte Çolak umfassende Fallerfahrungen durch ihre Tätigkeit in renommierten Kliniken wie dem Dental Estetik Center und der Asya Dental Poliklinik für Mund- und Zahngesundheit. Seit 2025 empfängt ZÄ. Kübra Çolak Patienten in ihrer eigenen Praxis in Izmir Balçova und sorgt mit dem Konzept der 'personalisierten Zahnmedizin' für ein gesundes Lächeln in Izmir.",
      
      // Bottom left card: Why Us?
      whyTitle: "Warum ZÄ. Kübra Çolak?",
      whyItems: [
        "Erfahrung: 6 Jahre aktive klinische Erfahrung und umfassende Fallkompetenz sowohl im öffentlichen als auch im privaten Sektor.",
        "Moderne Technologie: Moderne Behandlungsmethoden mit digitaler Zahnmedizin, Laseranwendungen und 3D-Bildgebungssystemen.",
        "Individuelle Betreuung: Auf den Patienten zugeschnittene ästhetische und funktionelle Lösungen.",
        "Komfortable Behandlung: Ein entspannter Behandlungsprozess ohne Ängste dank Vollnarkose- und Sedierungsoptionen."
      ],
      
      // Bottom right card: Clinical Focus Areas
      areasTitle: "Klinischer Fokus und Tätigkeitsbereiche",
      areasLead: "Hauptspezialisierungsbereiche, die wir in unserer Praxis im Lichte wissenschaftlicher Entwicklungen priorisieren:",
      areas: [
        "Digitale Zahnmedizin & Lächeln-Design",
        "Biomimetische und ästhetische Restaurationen",
        "Endodontie (Wurzelkanalbehandlungen)",
        "Prophylaxe und präventive Zahnheilkunde"
      ]
    },
    treatments: {
      title: "Behandlungen",
      lead: "Ihre Mundgesundheit, ästhetischen Erwartungen und Ihr Alltag werden gemeinsam betrachtet, bevor die Behandlung geplant wird.",
    },
    gallery: {
      title: "Galerie",
      lead: "Ausgewählte Einblicke in Praxisatmosphäre, Behandlungsräume und Patientenerlebnis.",
    },
    blog: {
      title: "Blog",
      lead: "Kurze, verständliche und informative Beiträge rund um Mund- und Zahngesundheit.",
      readTime: "Min. Lesezeit",
    },
    faq: {
      title: "Häufig Gestellte Fragen",
      lead: "Informationen zu klinischen Behandlungen, Prozessen und häufig gestellten Details.",
    },
    contact: {
      title: "Kontakt",
      lead: "Nutzen Sie das Formular für Fragen und Terminanfragen oder kontaktieren Sie uns direkt.",
      formTitle: "Termin- und Informationsanfrage",
      infoTitle: "Praxisdaten",
    },
    footer: {
      summary: "In unserer Praxis in Izmir Balcova bieten wir Dienstleistungen im Bereich der Mund- und Zahngesundheit mit modernen zahnmedizinischen Ansätzen und patientenorientierter Planung an.",
      quickLinks: "Praxisansatz",
      contact: "Kontakt Aufnehmen",
      rights: "Alle Rechte vorbehalten.",
      title: "Zahnärztin",
      kvkk: "Datenschutzerklärung (KVKK)",
      cookiePolicy: "Cookie-Richtlinie",
      workingHours: "Montag - Samstag: 09:00 - 19:00",
      legalDisclaimer: "Die auf der Website enthaltenen klinischen und medizinischen Informationen dienen ausschließlich der Information des Nutzers und stellen keine Diagnose, Identifizierung oder Auswahl einer Behandlungsmethode dar."
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
  faq: "/sss",
  contact: "/iletisim",
} as const;

export const treatments = [
  {
    key: "implant",
    icon: "implant",
    title: {
      tr: "İmplant Uygulamaları",
      en: "Implant Treatments",
      de: "Implantatbehandlungen",
    },
    description: {
      tr: "Eksik dişlerin fonksiyonel ve estetik beklentilerle birlikte planlanması.",
      en: "Planning missing teeth with functional and aesthetic expectations in mind.",
      de: "Planung fehlender Zähne mit funktionellen und ästhetischen Erwartungen.",
    },
  },
  {
    key: "aesthetic",
    icon: "spark",
    title: {
      tr: "Estetik Diş Hekimliği",
      en: "Aesthetic Dentistry",
      de: "Ästhetische Zahnmedizin",
    },
    description: {
      tr: "Gülüş tasarımı, bonding ve renk uyumu odaklı estetik yaklaşımlar.",
      en: "Smile design, bonding and color harmony focused aesthetic treatments.",
      de: "Smile Design, Bonding und farbharmonische ästhetische Behandlungen.",
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
      tr: "Diş dokusunu korumaya yönelik hassas endodontik tedavi süreçleri.",
      en: "Precise endodontic care focused on preserving natural tooth structure.",
      de: "Präzise endodontische Versorgung zum Erhalt der natürlichen Zahnsubstanz.",
    },
  },
  {
    key: "periodontology",
    icon: "gum",
    title: {
      tr: "Diş Eti Uygulamaları",
      en: "Gum Treatments",
      de: "Zahnfleischbehandlungen",
    },
    description: {
      tr: "Diş eti sağlığını ve ağız hijyenini destekleyen koruyucu uygulamalar.",
      en: "Preventive care that supports gum health and oral hygiene.",
      de: "Vorbeugende Behandlungen für Zahnfleischgesundheit und Mundhygiene.",
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
      tr: "Dayanıklı, doğal görünümlü ve kişinin kapanışına uygun restorasyonlar.",
      en: "Durable, natural-looking restorations aligned with your bite.",
      de: "Langlebige, natürlich wirkende Restaurationen passend zum Biss.",
    },
  },
  {
    key: "children",
    icon: "shield",
    title: {
      tr: "Koruyucu Diş Hekimliği",
      en: "Preventive Dentistry",
      de: "Vorbeugende Zahnmedizin",
    },
    description: {
      tr: "Kontrol, temizlik ve erken tanı ile sorunları büyümeden önleme hedefleri.",
      en: "Checkups, cleaning and early diagnosis to prevent larger problems.",
      de: "Kontrollen, Reinigung und frühe Diagnose, bevor Probleme wachsen.",
    },
  },
] as const;

export const blogPosts = [
  {
    slug: "izmir-balcovada-gulus-tasarimi-yaklasimlari",
    title: {
      tr: "İzmir Balçova'da Gülüş Tasarımı Yaklaşımları",
      en: "Smile Design Approaches in Izmir Balcova",
      de: "Smile-Design-Ansätze in Izmir Balcova",
    },
    seoKeywords: {
      tr: "İzmir gülüş tasarımı, Balçova estetik diş hekimliği, lamine diş kaplama",
      en: "Izmir smile design, Balcova aesthetic dentistry, laminate veneers",
      de: "Izmir Smile Design, Balcova ästhetische Zahnmedizin, Veneers",
    },
    excerpt: {
      tr: "Estetik diş hekimliğinde kullanılan zirkonyum, lamine ve bonding yöntemlerinin farkları. Hangi durumlarda hangi yöntemlerin tercih edildiği rehberi.",
      en: "Differences between zirconium, laminate, and bonding methods used in aesthetic dentistry. A guide on which treatments are preferred for specific cases.",
      de: "Unterschiede zwischen Zirkonium-, Laminat- und Bonding-Methoden in der ästhetischen Zahnmedizin. Ein Leitfaden zur passenden Behandlungswahl.",
    },
    readTime: 5,
  },
  {
    slug: "dis-gicirdatma-probleminde-masseter-uygulamasi",
    title: {
      tr: "Diş Gıcırdatma Problemi: Masseter Uygulaması ve Gece Plağı",
      en: "Teeth Grinding Problem: Masseter Application and Night Guard",
      de: "Zähneknirschen: Masseter-Anwendung und Aufbissschiene",
    },
    seoKeywords: {
      tr: "diş sıkma tedavisi, masseter İzmir, çene ağrısı yönetimi",
      en: "teeth grinding care, masseter Izmir, jaw pain management",
      de: "Zähneknirschen Behandlung, Masseter Izmir, Kieferschmerzen",
    },
    excerpt: {
      tr: "Uyku esnasında diş sıkmanın (bruksizm) dişlere ve çene eklemine (TME) etkileri. Süreçlerde kasın nasıl rahatlatıldığı ve koruyucu plakların önemi.",
      en: "The structural effects caused by teeth grinding (bruxism) to teeth and jaw joints (TMJ) during sleep. How muscles are relaxed and the importance of protective guards.",
      de: "Die Auswirkungen von nächtlichem Zähneknirschen (Bruxismus) an Zähnen und Kiefergelenken. Wie Muskeln entspannt werden und warum Knirscherschienen wichtig sind.",
    },
    readTime: 4,
  },
  {
    slug: "eksik-dislerin-cozumu-implant-surecleri",
    title: {
      tr: "Eksik Dişlerin Çözümü: Adım Adım İmplant Süreçleri",
      en: "Solution for Missing Teeth: Step-by-Step Implant Process",
      de: "Lösung für fehlende Zähne: Implantatbehandlung Schritt für Schritt",
    },
    seoKeywords: {
      tr: "İmplant uygulamaları Balçova, diş implantı süreçleri, konforlu implant",
      en: "Implant treatment Balcova, dental implant process, comfortable implant",
      de: "Implantatbehandlung Balcova, Zahnimplantat Ablauf, konfortables Implantat",
    },
    excerpt: {
      tr: "İmplant süreçlerinin klinik detayları, lokal anestezi altındaki konforlu adımları. Kemik grefti ve sinüs lifting süreçlerine dair temel bilgiler.",
      en: "Clinical details of implant processes and how they are comfortably performed under local anesthesia. Core info on bone grafting and sinus lifting.",
      de: "Klinische Details zu Implantatabläufen und wie sie komfortabel unter lokaler Anästhesie durchgeführt werden. Infos zu Knochenaufbau und Sinuslift.",
    },
    readTime: 6,
  },
  {
    slug: "dis-tedavilerinde-konfor-sedasyon-ve-genel-anestezi",
    title: {
      tr: "Diş Treatments Konfor: Sedasyon ve Genel Anestezi Seçenekleri",
      en: "Comfort in Dental Treatments: Sedation and General Anesthesia Options",
      de: "Komfort bei Zahnbehandlungen: Sedierung und Vollnarkose-Optionen",
    },
    seoKeywords: {
      tr: "genel anestezi ile diş tedavisi, sedasyonlu işlemler, konforlu diş hekimliği",
      en: "dental treatment under general anesthesia, sedation procedures, comfortable dentistry",
      de: "Zahnbehandlung unter Vollnarkose, Sedierung Zahnextraktion, Patientenservice",
    },
    excerpt: {
      tr: "Diş muayenesinden çekinen yetişkinler ve çocuklar için sedasyon ile genel anestezi arasındaki farklar. Planlama avantajları.",
      en: "Differences between sedation and general anesthesia for anxious adults and children. Planning advantages.",
      de: "Unterschiede zwischen Sedierung und Vollnarkose bei Zahnarztangst für Erwachesene und Kinder. Die Vorteile der Behandlungsplanung.",
    },
    readTime: 5,
  },
  {
    slug: "dis-eti-sagliginin-onemi-periodontoloji",
    title: {
      tr: "Diş Eti Sağlığının Önemi: Periodontoloji ve Klinik Bakım",
      en: "Importance of Gum Health: Periodontology and Clinical Care",
      de: "Bedeutung der Zahnfleischgesundheit: Parodontologie und klinische Pflege",
    },
    seoKeywords: {
      tr: "diş eti bakımı, diş taşı temizliği, İzmir periodontoloji",
      en: "gum care, dental scaling, Izmir periodontology",
      de: "Zahnfleischpflege, Zahnreinigung, Izmir Parodontologie",
    },
    excerpt: {
      tr: "Diş eti çekilmesi ve hassasiyetinin arkasındaki temel sebepler. Detertraj (diş taşı temizliği) ve kök yüzeyi düzleştirmesinin (küretaj) koruyucu rolü.",
      en: "The underlying causes of gum recession and sensitivity. The preventive role of scaling and root planing (curettage).",
      de: "Die wahren Ursachen für Zahnfleischrückgang und Empfindlichkeit. Die vorbeugende Rolle von Zahnreinigung und Tiefenreinigung (Kürettage).",
    },
    readTime: 4,
  },
  {
    slug: "cocuklarda-dis-sagligi-koruyucu-yaklasimlar",
    title: {
      tr: "Çocuklarda Diş Sağlığı: Koruyucu Uygulamalar Nelerdir?",
      en: "Pediatric Dental Health: What are Preventive Applications?",
      de: "Kinderzahngesundheit: Was sind präventive Anwendungen?",
    },
    seoKeywords: {
      tr: "çocuk diş hekimliği Balçova, flor uygulaması, fissür örtücü",
      en: "pediatric dentistry Balcova, fluoride application, fissure sealant",
      de: "Kinderzahnmedizin Balcova, Fluoridierung, Fissurenversiegelung",
    },
    excerpt: {
      tr: "Süt dişlerinin gelişimi. Gelecekte oluşabilecek çapraşıklıkları önlemek için uygulanan yer tutucular, florür ve fissür örtücülerin çocuk gelişimindeki rolü.",
      en: "The development of primary teeth. The role of space maintainers, fluoride, and fissure sealants in preventing future crowding during child development.",
      de: "Die Entwicklung von Milchzähnen. Die Rolle von Platzhaltern, Fluoridierung und Fissurenversiegelungen zur Vermeidung von Fehlstellungen.",
    },
    readTime: 5,
  },
] as const;

export const faqItems = [
  {
    id: "faq-1",
    title: {
      tr: "Gülüş Tasarımı tedavisi ne kadar sürer?",
      en: "How long does a Smile Design treatment take?",
      de: "Wie lange dauert eine Smile-Design Behandlung?",
    },
    content: {
      tr: "Gülüş tasarımı kişiye özel bir süreçtir. Sadece diş beyazlatma og bonding (kompzit lamine) uygulanacaksa 1-2 seansta tamamlanabilir. Ancak zirkonyum kaplama veya lamine porselen planlanıyorsa süreç ortalama 7 ila 10 gün arasında değişmektedir. İlk muayenede dijital ölçü sistemlerimizle net takvimi öngörüyoruz.",
      en: "Smile design is a personalized process. If only teeth whitening and bonding (composite veneers) are to be applied, it can be completed in 1-2 sessions. However, if zirconium crowns or porcelain laminates are planned, the process takes an average of 7 to 10 days. We estimate the exact schedule during the initial examination using our digital impression systems.",
      de: "Das Smile-Design ist ein personalisierter Prozess. Wenn nur Zahnaufhellung und Bonding (Komposit-Veneers) angewendet werden, kann dies in 1-2 Sitzungen abgeschlossen werden. Wenn jedoch Zirkonkrönen oder Porzellan-Veneers geplant sind, dauert der Prozess durchschnittlich 7 bis 10 Tage. Den genauen Zeitplan prognostizieren wir bei der Erstuntersuchung mit unseren digitalen Abdrucksystemen."
    }
  },
  {
    id: "faq-2",
    title: {
      tr: "Diş sıkma (Bruksizm) probleminde Masseter uygulaması destekleyici midir?",
      en: "Is Masseter application supportive for teeth grinding (Bruxism)?",
      de: "Ist eine Masseter-Anwendung unterstützend bei Zähneknirschen (Bruxismus)?",
    },
    content: {
      tr: "Masseter uygulaması, diş sıkmaya bağlı çene ağrılarını, baş ağrılarını og diş aşınmalarını yönetmek için tercih edilen etkin bir yöntemdir. Çene kasını rahatlatarak etki gösterir. Etkinliği ortalama 4-6 ay sürer; düzenli uygulamalarla bu süreç desteklenebilir og kasın aşırı kasılma alışkanlığı kırılabilir. Muayenehanemizde gece plağı süreçleriyle kombine edilerek başarısı artırılmaktadır.",
      en: "Masseter application is an effective method preferred to manage jaw pain, headaches, and tooth wear related to teeth grinding. It works by relaxing the jaw muscle. Its effectiveness lasts about 4-6 months on average; with regular applications, this process can be supported and the habit of excessive muscle contraction can be broken. In our clinic, its success is enhanced by combining it with night guard processes.",
      de: "Die Masseter-Anwendung ist eine wirksame Methode, die bevorzugt wird, um Kieferschmerzen, Kopfschmerzen und Zahnabrieb im Zusammenhang with Zähneknirschen zu lindern. Sie wirkt, indem sie den Kaumuskel entspannt. Die Wirkung hält im Durchschnitt etwa 4-6 Monate an; bei regelmäßiger Anwendung kann dieser Zeitraum unterstützt und die Gewohnheit der übermäßigen Muskelanspannung gebrochen werden. In unserer Praxis wird der Erfolg durch die Kombination mit einer Aufbissschiene gesteigert."
    }
  },
  {
    id: "faq-3",
    title: {
      tr: "Klinikte implant uygulamaları ne kadar sürede tamamlanıyor? Gömülü diş işlemleri konforlu mudur?",
      en: "How long do dental implant procedures take? Are impacted tooth procedures comfortable?",
      de: "Wie lange dauern Zahnimplantatverfahren? Sind Weisheitszahn-Eingriffe konfortabel?",
    },
    content: {
      tr: "İmplantın çene kemiğine yerleştirilmesi işlemi lokal anestezi altında, konforlu koşullarda yaklaşık 15-30 dakika sürer. İmplantın kemikle bütünleşmesi (osseointegrasyon) için 2-3 ay beklendikten sonra üst protez aşamasına geçilir. Gömülü 20 yaş dişi işlemleri de klinik akışımız dahilinde, güncel cerrahi yaklaşımlarla dikişli veya dikişsiz olarak güvenle uygulanmaktadır.",
      en: "The placement of the implant into the jawbone takes about 15-30 minutes under local anesthesia under comfortable conditions. After waiting 2-3 months for the implant to integrate with the bone (osseointegration), the upper prosthesis phase begins. Impacted wisdom teeth procedures are also performed safely with or without sutures, utilizing comfortable and modern surgical techniques within our clinical flow.",
      de: "Das Einsetzen des Implantats in den Kieferknochen dauert unter lokaler Anästhesie unter konfortablen Bedingungen etwa 15-30 Minuten. Nach einer Wartezeit von 2-3 Monaten, in der das Implantat mit dem Knochen verwächst (Osseointegration), beginnt die obere Prothesenphase. Auch Eingriffe an verlagerten Weisheitszähnen werden im Rahmen unseres Praxisablaufs mit modernen Techniken (mit oder ohne Nähte) sicher durchgeführt."
    }
  },
  {
    id: "faq-4",
    title: {
      tr: "Sedasyon veya genel anestezi altında diş tedavisi kimlere uygulanabilir?",
      en: "To whom can dental treatment under sedation or general anesthesia be applied?",
      de: "Bei wem kann eine Zahnbehandlung unter Sedierung oder Vollnarkose angewendet werden?",
    },
    content: {
      tr: "Bu yöntemler; yoğun diş hekimi çekincesi olan yetişkinlerde, klinik ortamına uyum sağlamakta zorlanan çocuk hastalarda veya bulantı refleksi çok yüksek olan bireylerde tercih edilir. Planlanan dolgu, çekim veya kanal tedavileri ilgili uzmanlar eşliğinde süreç boyunca konforla tamamlanır.",
      en: "These methods are preferred for adults with extreme dental anxiety, children who find it difficult to adapt to the clinic setting, and individuals with a very high gag reflex. Planned fillings, extractions, or root canal treatments are comfortably completed during the process with accompanying specialists.",
      de: "Diese Methoden werden bei Erwachsenen mit ausgeprägter Zahnarztangst, bei Kindern, denen die Anpassung an die Praxisumgebung schwerfällt, sowie bei Personen mit einem sehr starken Würgereiz bevorzugt. Geplante Füllungen, Extraktionen oder Wurzelbehandlungen werden während des Prozesses von den begleitenden Spezialisten komfortabel durchgeführt."
    }
  },
  {
    id: "faq-5",
    title: {
      tr: "Kanal tedavisi yapılan bir dişin ömrü ne kadardır? İşlem konforlu mudur?",
      en: "What is the lifespan of a root canal treated tooth? Is the procedure comfortable?",
      de: "Wie lange ist die Lebensdauer eines wurzelbehandelten Zahns? Ist der Eingriff komfortabel?",
    },
    content: {
      tr: "Gelişmiş döner alet teknolojileri ve daimi kanal dolum materyalleri kullanıldığı için lokal anestezi altında konforlu bir akış sağlanır. Doğru yapılan bir kanal tedavisi ve üzerine uygulanan estetik bir dolgu veya kaplama ile söz konusu diş, ağız hijyenine dikkat edildiği sürece uzun yıllar ağızda kalabilir.",
      en: "Since advanced rotary instrument technologies and permanent root canal filling materials are used, a comfortable flow is ensured under local anesthesia. A properly performed root canal treatment and an aesthetic filling or crown placed on top can stay in the mouth for many years, as long as oral hygiene is maintained.",
      de: "Da fortschrittliche Technologien für rotierende Instrumente und dauerhafte Wurzelfüllmaterialien verwendet werden, ist unter lokaler Anästhesie ein komfortabler Ablauf gewährleistet. Eine fachgerecht durchgeführte Wurzelkanalbehandlung mit einer anschließenden ästhetischen Füllung oder Krone kann viele Jahre im Mund verbleiben, solange auf die Mundhygiene geachtet wird."
    }
  },
  {
    id: "faq-6",
    title: {
      tr: "Şeffaf plaklar (Telsiz Ortodonti) ile normal diş teli arasındaki fark nedir?",
      en: "What is the difference between clear aligners (Wireless Orthodontics) and regular braces?",
      de: "Was ist der Unterschied zwischen transparenten Alignern (Zahnschienen) und normalen Zahnspangen?",
    },
    content: {
      tr: "Şeffaf plaklar dışarıdan bakıldığında neredeyse tamamen görünmezdir ve estetik kaygıyı minimuma indirir. Yemek yerken veya diş fırçalarken çıkarılabilme lüksü sunar. Klasik metal veya porselen diş tellerine göre ağız içinde batma riski düşüktür ve temizliği çok daha kolaydır.",
      en: "Clear aligners are almost completely invisible when viewed from the outside, minimizing aesthetic concerns. They offer the luxury of being removable while eating or brushing teeth. Compared to classic metal or porcelain braces, the risk of irritation in the mouth is lower, and cleaning them is much easier.",
      de: "Transparente Aligner sind von außen fast völlig unsichtbar und minimieren ästhetische Bedenken. Sie bieten den Luxus, beim Essen oder Zähneputzen herausnehmbar zu sein. Im Vergleich zu klassischen Metall- oder Porzellanspangen ist das Risiko von Reizungen im Mund geringer, und die Reinigung ist viel einfacher."
    }
  }
] as const;