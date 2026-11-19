import { EMAIL } from "../data.js";

export default function NotFound() {
  return (
    <main id="inhalt" className="nf">
      <div className="wrap">
        <p className="code" aria-hidden="true">
          404
        </p>
        <h1>Diese Seite existiert nicht.</h1>
        <p>
          Der Link ist veraltet oder enthält einen Tippfehler. Hier gelangen Sie zurück zum Angebot
          oder direkt zu mir.
        </p>
        <div className="cta" style={{ marginTop: "1.75rem" }}>
          <a className="btn" href="/">
            Zur Startseite
          </a>
          <a className="btn ghost" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </div>
    </main>
  );
}
