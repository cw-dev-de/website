export const SITE_URL = "https://cw-dev.de";
export const EMAIL = "kontakt@cw-dev.de";

/**
 * Adresse des Formular-Dienstes (z. B. "https://formspree.io/f/xxxxxxxx").
 * Solange hier nichts eingetragen ist, öffnet das Formular stattdessen
 * eine vorbereitete E-Mail im Mailprogramm des Besuchers.
 */
export const FORM_ENDPOINT = "";

export const MAIL_SUBJECT = "Anfrage: Website";

export const NAV = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#faq", label: "Fragen" },
];

export const FACTS = [
  { term: "Festpreis", text: "Verbindliches Angebot vor Projektbeginn, ohne versteckte Kosten" },
  { term: "Ansprechpartner", text: "Direkter Kontakt zu mir, keine Agentur und kein Callcenter" },
  { term: "Standort", text: "Aus Hamm, für Betriebe in der Region und darüber hinaus" },
];

export const SERVICES = [
  {
    title: "Neue Website und Modernisierung",
    text: "Eine moderne, übersichtliche Website, die auf Smartphone, Tablet und Computer einwandfrei funktioniert. Ob Neuerstellung oder Überarbeitung Ihres bestehenden Auftritts.",
  },
  {
    title: "Bei Google gefunden werden",
    text: "Kunden aus Ihrer Region finden Ihren Betrieb, wenn sie nach Ihrer Leistung suchen. Ihre Website wird von Anfang an so aufgebaut, dass Google sie gut versteht.",
  },
  {
    title: "Rundum-Betreuung",
    text: "Pflege, Sicherheit und Änderungen übernehme ich für Sie. Eine kurze Nachricht genügt, um Inhalte anzupassen oder zu ergänzen.",
  },
];

export const STEPS = [
  {
    title: "Kennenlernen",
    text: "In einem kurzen Gespräch von etwa 15 Minuten, telefonisch oder vor Ort, klären wir Ihre Wünsche. Anschließend erhalten Sie ein verbindliches Festpreis-Angebot.",
  },
  {
    title: "Umsetzung",
    text: "Ich erstelle Ihre Website komplett für Sie. Sie müssen lediglich die Zwischenstände ansehen und mir kurz Ihre Rückmeldung geben.",
  },
  {
    title: "Veröffentlichung",
    text: "Nach Ihrer Freigabe geht die Website online. Danach bleibe ich Ihr fester Ansprechpartner für Änderungen und Fragen.",
  },
];

export const FAQ = [
  {
    q: "Was kostet eine Website?",
    a: "Der Preis richtet sich nach Umfang und Wünschen, etwa nach der Anzahl der Seiten sowie den benötigten Texten und Bildern. Nach einem kurzen Gespräch erhalten Sie ein verbindliches Festpreis-Angebot, bevor das Projekt beginnt. Es entstehen keine versteckten Kosten.",
  },
  {
    q: "Wie lange dauert die Umsetzung?",
    a: "Eine kleine Firmenwebsite ist in der Regel innerhalb von ein bis drei Wochen online, sofern Texte und Bilder rechtzeitig vorliegen. Den genauen Zeitplan nenne ich Ihnen im Angebot.",
  },
  {
    q: "Muss ich Texte und Bilder selbst liefern?",
    a: "Bei der Formulierung der Texte unterstütze ich Sie. Fotos Ihres Betriebs, Ihrer Arbeit oder Ihres Teams sollten Sie selbst zur Verfügung stellen, da sie Ihren Betrieb am besten zeigen.",
  },
  {
    q: "Kann ich später Änderungen vornehmen lassen?",
    a: "Ja. Änderungen von Texten, Bildern oder Öffnungszeiten sowie zusätzliche Seiten übernehme ich für Sie. Eine kurze Nachricht genügt. Die Inhalte bearbeiten Sie nicht selbst im Browser, dafür müssen Sie sich um keinerlei Technik kümmern.",
  },
  {
    q: "Benötige ich eine eigene Internetadresse?",
    a: "Für einen professionellen Auftritt ja, zum Beispiel www.ihr-betrieb.de. Ich berate Sie bei der Auswahl und richte die Adresse für Sie ein.",
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
        "Websites für Betriebe und Dienstleister: Gestaltung, Texte und Auffindbarkeit bei Google aus einer Hand.",
      areaServed: [
        { "@type": "City", name: "Hamm" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
      ],
      founder: { "@type": "Person", name: "Christian Wegner" },
      knowsAbout: ["Webentwicklung", "Suchmaschinenoptimierung", "Webdesign"],
      makesOffer: [
        "Neue Website und Modernisierung",
        "Auffindbarkeit bei Google (SEO)",
        "Betreuung und Pflege von Websites",
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
