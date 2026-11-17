export const SITE_URL = "https://cw-dev.de";
export const EMAIL = "kontakt@cw-dev.de";

const MAIL_BODY = [
  "Sehr geehrter Herr Wegner,",
  "",
  "ich interessiere mich für die Entwicklung einer Website und bitte um ein Angebot.",
  "",
  "Name / Firma:",
  "Branche:",
  "Gewünschte Leistung (Neuerstellung, Überarbeitung, SEO):",
  "Bestehende Website (falls vorhanden):",
  "Gewünschter Starttermin:",
  "",
  "Mit freundlichen Grüßen",
].join("\n");

export const MAILTO_TEMPLATE = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Anfrage: Website"
)}&body=${encodeURIComponent(MAIL_BODY)}`;

export const NAV = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#faq", label: "FAQ" },
];

export const FACTS = [
  { term: "Technik", text: "Individuell entwickeltes HTML, CSS und JavaScript" },
  { term: "Sicherheit", text: "Schlanker Code, geringe Angriffsfläche, HTTPS inklusive" },
  { term: "Preis", text: "Verbindliches Festpreis-Angebot vor Projektbeginn" },
];

export const SERVICES = [
  {
    title: "Neue Firmenwebsite",
    text: "Ein- oder mehrseitiger Webauftritt mit individuellem Design, Ihren Inhalten und klaren Kontaktmöglichkeiten. Optimiert für Smartphone, Tablet und Desktop.",
  },
  {
    title: "Website überarbeiten",
    text: "Ist Ihre bestehende Website langsam, veraltet oder umständlich zu bedienen? Ich setze sie neu auf oder optimiere sie gezielt.",
  },
  {
    title: "Suchmaschinenoptimierung",
    text: "Saubere Seitenstruktur, kurze Ladezeiten, Meta-Daten, strukturierte Daten und lokale Auffindbarkeit. Suchmaschinenoptimierung ist von Beginn an Teil der Entwicklung.",
  },
  {
    title: "Betreuung und Änderungen",
    text: "Neue Texte, zusätzliche Seiten, Bildaustausch: Ich betreue Ihre Website nach Absprache fortlaufend.",
  },
];

export const BENEFITS = [
  "Kurze Ladezeiten, da nur geladen wird, was die Seite benötigt",
  "Keine laufenden Updates und geringe Angriffsfläche",
  "Keine Datenbank, die ausfallen oder angegriffen werden kann",
  "Kein Cookie-Banner erforderlich, solange kein Tracking eingesetzt wird",
  "Der Quellcode gehört Ihnen, es besteht keine Bindung an einen Anbieter",
];

export const STEPS = [
  { title: "Anfrage", text: "Sie schildern mir Ihr Vorhaben per E-Mail. Ich melde mich mit Rückfragen." },
  { title: "Angebot", text: "Sie erhalten ein Festpreis-Angebot mit Leistungsumfang und Zeitplan." },
  { title: "Umsetzung", text: "Ich entwickle die Website und stelle Ihnen Zwischenstände vor. Ihr Feedback fließt laufend ein." },
  { title: "Livegang", text: "Nach Ihrer Freigabe geht die Website online, inklusive Domain und HTTPS." },
];

export const PRICE_POINTS = [
  "Ihrem Leistungsangebot und Ihrer Zielgruppe",
  "Ihrer bestehenden Website (Link), falls vorhanden",
  "den gewünschten Funktionen der neuen Website",
  "Ihrem gewünschten Fertigstellungstermin",
];

export const FAQ = [
  {
    q: "Was kostet eine Website?",
    a: "Der Preis richtet sich nach dem Umfang: Anzahl der Seiten, Texte, Bilder und Sonderwünsche. Nach einem kurzen Austausch erhalten Sie ein Festpreis-Angebot, bevor die Entwicklung beginnt. Senden Sie mir hierfür einfach eine E-Mail mit Ihrem Vorhaben.",
  },
  {
    q: "Wie lange dauert die Umsetzung?",
    a: "Eine kleine Firmenwebsite mit wenigen Seiten ist in der Regel innerhalb von ein bis drei Wochen online, sofern Texte und Bilder rechtzeitig vorliegen. Den verbindlichen Zeitplan nenne ich Ihnen im Angebot.",
  },
  {
    q: "Warum handgeschriebener Code?",
    a: "Individuell entwickelte Seiten laden schneller, sind weniger angreifbar und benötigen keine laufenden Updates. Inhalte pflegen Sie dafür nicht selbst in einem Dashboard, sondern übermitteln sie mir. Für die meisten kleinen Firmenwebsites ist das die bessere Abwägung.",
  },
  {
    q: "Sind spätere Änderungen möglich?",
    a: "Ja. Textänderungen, zusätzliche Seiten oder ein Austausch von Bildern übernehme ich nach Absprache. Kleine Änderungen werden zeitnah umgesetzt.",
  },
  {
    q: "Benötige ich eine eigene Domain?",
    a: "Für einen professionellen Auftritt ja. Ich berate Sie bei der Auswahl und richte die Domain samt HTTPS-Verschlüsselung für Sie ein.",
  },
  {
    q: "Sind Impressum und Datenschutzerklärung enthalten?",
    a: "Ich binde die entsprechenden Seiten ein und bereite sie vor. Die rechtliche Prüfung der Texte kann ich nicht übernehmen. Hierfür empfehle ich bei Bedarf eine Rechtsberatung oder einen Generator wie eRecht24.",
  },
];

export const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "CW Dev",
      inLanguage: "de-DE",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "CW Dev – Webentwicklung",
      url: `${SITE_URL}/`,
      email: EMAIL,
      logo: `${SITE_URL}/assets/icon-512.png`,
      image: `${SITE_URL}/assets/og-image.png`,
      description:
        "Webentwicklung für Firmenwebsites: individuell entwickelt, schnell, sicher und suchmaschinenoptimiert.",
      areaServed: [
        { "@type": "City", name: "Hamm" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
      ],
      founder: { "@type": "Person", name: "Christian Wegner" },
      knowsAbout: ["Webentwicklung", "Suchmaschinenoptimierung", "Webdesign"],
      makesOffer: [
        "Firmenwebsite erstellen",
        "Website überarbeiten und beschleunigen",
        "Suchmaschinenoptimierung (SEO)",
        "Website-Betreuung",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};