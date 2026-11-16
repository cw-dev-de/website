# CW Dev – React

Vite + React, jede Seite wird beim Build zu statischem HTML vorgerendert (gut für SEO, läuft auf GitHub Pages).

```bash
npm install
npm run dev      # Entwicklung
npm run build    # erzeugt dist/ mit index.html, impressum.html, datenschutz.html, 404.html
npm run preview  # dist/ lokal ansehen
```

- Texte und Listen: `src/data.js`
- Seiten: `src/pages/`, Layout: `src/components/`
- Titel, Beschreibung, Canonical, Open Graph: `src/meta.js`
- Deployment: `.github/workflows/deploy.yml` (GitHub Pages, Domain via `public/CNAME`)
