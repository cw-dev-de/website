export const SITE_URL = "https://cw-dev.de";
export const EMAIL = "Kontakt@cw-dev.de";

export const MAILTO_TEMPLATE =
  "mailto:Kontakt@cw-dev.de?subject=Anfrage%3A%20Website&body=Hallo%20Christian%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20eine%20Website.%0A%0AName%20/%20Firma%3A%0ABranche%3A%0AWas%20soll%20gebaut%20oder%20verbessert%20werden%3A%0ABestehende%20Website%20%28falls%20vorhanden%29%3A%0AGew%C3%BCnschter%20Starttermin%3A%0A%0AViele%20Gr%C3%BC%C3%9Fe";

export const NAV = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#faq", label: "FAQ" },
];

export const FACTS = [
  { term: "Technik", text: "Handgeschriebenes HTML, CSS und JavaScript" },
  { term: "Sicherheit", text: "Schlanker Code, wenig Angriffsfläche, HTTPS inklusive" },
  { term: "Preis", text: "Festpreis-Angebot vor Projektstart" },
];

export const SERVICES = [
  {
    title: "Neue Firmenwebsite",
    text: "Ein- oder mehrseitiger Auftritt mit deinem Design, deinen Inhalten und Kontaktmöglichkeiten. Responsiv für Handy, Tablet und Desktop.",
  },
  {
    title: "Website überarbeiten",
    text: "Deine bestehende Seite ist langsam, veraltet oder lässt sich nicht gut bedienen? Ich baue sie neu auf oder optimiere sie gezielt.",
  },
  {
    title: "Suchmaschinenoptimierung",
    text: "Saubere Seitenstruktur, schnelle Ladezeiten, Meta-Daten, strukturierte Daten und lokale Auffindbarkeit. SEO ist bei mir von Anfang an Teil der Entwicklung.",
  },
  {
    title: "Betreuung und Änderungen",
    text: "Neue Texte, zusätzliche Seiten, Bildtausch: Ich pflege deine Website nach Absprache weiter.",
  },
];

export const BENEFITS = [
  "Schnelle Ladezeiten, weil nur lädt, was die Seite braucht",
  "Keine laufenden Updates und wenig Angriffsfläche",
  "Keine Datenbank, die ausfallen oder gehackt werden kann",
  "Kein Cookie-Banner nötig, solange nichts getrackt wird",
  "Der Code gehört dir und ist nicht an einen Anbieter gebunden",
];

export const STEPS = [
  { title: "Anfrage", text: "Du schreibst mir per E-Mail, was du brauchst. Ich melde mich mit Rückfragen." },
  { title: "Angebot", text: "Du bekommst ein Festpreis-Angebot mit Umfang und Zeitplan." },
  { title: "Umsetzung", text: "Ich baue die Seite und zeige dir Zwischenstände. Du gibst Feedback." },
  { title: "Livegang", text: "Nach deiner Freigabe geht die Seite online, inklusive Domain und HTTPS." },
];

export const PRICE_POINTS = [
  "Was du anbietest und wer deine Kunden sind",
  "Ob es schon eine Website gibt (Link)",
  "Was die neue Seite können soll",
  "Bis wann du sie brauchst",
];

export const FAQ = [
  {
    q: "Was kostet eine Website?",
    a: "Das hängt vom Umfang ab: Anzahl der Seiten, Texte, Bilder und Sonderwünsche. Du bekommst nach einem kurzen Austausch ein Festpreis-Angebot, bevor irgendetwas gebaut wird. Schreib mir dafür einfach eine E-Mail mit deinem Vorhaben.",
  },
  {
    q: "Wie lange dauert es bis zur fertigen Website?",
    a: "Eine kleine Firmenwebsite mit wenigen Seiten ist meist in ein bis drei Wochen online, sofern Texte und Bilder rechtzeitig vorliegen. Den genauen Zeitplan nenne ich dir im Angebot.",
  },
  {
    q: "Warum handgeschriebener Code?",
    a: "Handgeschriebene Seiten laden schneller, sind schwerer anzugreifen und brauchen keine laufenden Updates. Dafür änderst du Inhalte nicht selbst in einem Dashboard, sondern schickst sie mir. Für die meisten kleinen Firmenseiten ist das der bessere Tausch.",
  },
  {
    q: "Kann ich später Änderungen machen lassen?",
    a: "Ja. Texte ändern, Seiten ergänzen oder Bilder tauschen übernehme ich nach Absprache. Kleine Änderungen sind schnell erledigt.",
  },
  {
    q: "Brauche ich eine eigene Domain?",
    a: "Für einen professionellen Auftritt ja. Ich helfe dir bei der Auswahl und richte die Domain samt HTTPS-Verschlüsselung für dich ein.",
  },
  {
    q: "Sind Impressum und Datenschutzerklärung dabei?",
    a: "Ich baue die Seiten dafür ein und bereite sie vor. Die rechtliche Prüfung der Texte kann ich dir nicht abnehmen, dafür empfehle ich bei Bedarf eine Rechtsberatung oder einen Generator wie eRecht24.",
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
        "Webentwicklung für Firmenwebsites: handgeschrieben, schnell, sicher und suchmaschinenoptimiert.",
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
