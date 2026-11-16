import { SITE_URL, HOME_JSON_LD } from "./data.js";

export const PAGES = {
  home: {
    file: "index.html",
    url: "/",
    title: "Webentwickler Hamm | Handgeschriebene Websites | CW Dev",
    description:
      "Webentwicklung aus Hamm: handgeschriebene Firmenwebsites, schnell, sicher und für Google optimiert. Festpreis-Angebot per E-Mail.",
    robots: "index,follow",
    canonical: `${SITE_URL}/`,
    jsonLd: HOME_JSON_LD,
  },
  impressum: {
    file: "impressum.html",
    url: "/impressum.html",
    title: "Impressum | CW Dev",
    description: "Impressum von CW Dev, Christian Wegner.",
    robots: "index,follow",
    canonical: `${SITE_URL}/impressum.html`,
  },
  datenschutz: {
    file: "datenschutz.html",
    url: "/datenschutz.html",
    title: "Datenschutzerklärung | CW Dev",
    description: "Datenschutzerklärung von CW Dev, Christian Wegner.",
    robots: "index,follow",
    canonical: `${SITE_URL}/datenschutz.html`,
  },
  notfound: {
    file: "404.html",
    url: "/404.html",
    title: "Seite nicht gefunden | CW Dev",
    description: "Diese Seite gibt es nicht. Zurück zur Startseite von CW Dev.",
    robots: "noindex,follow",
    canonical: `${SITE_URL}/404.html`,
  },
};

/** Wählt anhand des Pfads die passende Seite. */
export function resolveRoute(pathname = "/") {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/" || p === "/index.html") return "home";
  if (p === "/impressum.html" || p === "/impressum") return "impressum";
  if (p === "/datenschutz.html" || p === "/datenschutz") return "datenschutz";
  return "notfound";
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Erzeugt die seitenspezifischen <head>-Tags als String (fürs Prerendering). */
export function buildHead(page) {
  const lines = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}">`,
    `<meta name="robots" content="${page.robots}">`,
    `<link rel="canonical" href="${page.canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="de_DE">`,
    `<meta property="og:site_name" content="CW Dev">`,
    `<meta property="og:title" content="${esc(page.title)}">`,
    `<meta property="og:description" content="${esc(page.description)}">`,
    `<meta property="og:url" content="${page.canonical}">`,
    `<meta property="og:image" content="${SITE_URL}/assets/og-image.png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="CW Dev Logo auf schwarzem Hintergrund">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ];
  if (page.jsonLd) {
    const json = JSON.stringify(page.jsonLd).replace(/</g, "\\u003c");
    lines.push(`<script type="application/ld+json">${json}</script>`);
  }
  return lines.join("\n");
}
