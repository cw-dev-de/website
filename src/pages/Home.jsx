import Logo from "../components/Logo.jsx";
import {
  EMAIL,
  MAILTO_TEMPLATE,
  FACTS,
  SERVICES,
  BENEFITS,
  STEPS,
  PRICE_POINTS,
  FAQ,
} from "../data.js";

export default function Home() {
  return (
    <main id="inhalt">
      <section className="hero" aria-labelledby="h1">
        <div className="wrap">
          <h1 id="h1">Websites, die schnell laden und gefunden werden.</h1>
          <p className="lead">
            Ich baue Firmenwebsites von Hand: ohne Ballast, sauber programmiert, schnell und so
            aufgebaut, dass Google sie versteht.
          </p>
          <div className="cta">
            <a className="btn" href={MAILTO_TEMPLATE}>
              Anfrage per E-Mail
            </a>
            <a className="btn ghost" href="#leistungen">
              Leistungen ansehen
            </a>
          </div>
          <dl className="facts">
            {FACTS.map((f) => (
              <div key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="leistungen" aria-labelledby="h-leistungen">
        <div className="wrap">
          <h2 id="h-leistungen">Was ich für dich baue</h2>
          <p className="intro">
            Webentwicklung für Selbstständige, Handwerk, Dienstleister und kleine Unternehmen.
          </p>
          <div className="rows">
            {SERVICES.map((s) => (
              <article className="row" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="alt" aria-labelledby="h-handgeschrieben">
        <div className="wrap split">
          <div>
            <h2 id="h-handgeschrieben">Warum handgeschrieben?</h2>
            <p>
              Für viele kleine Seiten ist weniger mehr. Eine handgebaute Seite ist einfacher,
              schneller und schwerer anzugreifen.
            </p>
            <p className="note">
              Der Preis dafür: Inhalte änderst du nicht selbst im Dashboard, sondern schickst sie
              mir. Wer täglich selbst Texte pflegen will, ist mit einer anderen Lösung besser
              bedient. Das sage ich dir ehrlich vorab.
            </p>
          </div>
          <ul>
            {BENEFITS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="ablauf" aria-labelledby="h-ablauf">
        <div className="wrap">
          <h2 id="h-ablauf">So läuft ein Projekt ab</h2>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="price" id="preise" aria-labelledby="h-preise">
        <div className="wrap">
          <h2 id="h-preise">Preise auf Anfrage, aber verbindlich</h2>
          <p>
            Jede Website ist anders, deshalb gibt es keine Pauschalpreise von der Stange. Du
            bekommst vor dem Start ein Festpreis-Angebot, ohne versteckte Kosten.
          </p>
          <p>Damit ich schnell antworten kann, schreib mir kurz:</p>
          <ul>
            {PRICE_POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <a className="btn" href={MAILTO_TEMPLATE}>
            E-Mail mit Vorlage öffnen
          </a>
        </div>
      </section>

      <section id="ueber-mich" aria-labelledby="h-ich">
        <div className="wrap about">
          <div className="mark">
            <Logo />
          </div>
          <div>
            <h2 id="h-ich">Über mich</h2>
            <p>
              Ich bin Christian Wegner, Webentwickler aus Hamm. Beruflich lerne ich
              Anwendungsentwicklung als Fachinformatiker, nebenbei baue ich Websites für
              Unternehmen.
            </p>
            <p>
              Du sprichst direkt mit mir, nicht mit einer Agentur. Ich schreibe jeden Code selbst
              und stehe für das Ergebnis gerade.
            </p>
          </div>
        </div>
      </section>

      <section className="alt" id="faq" aria-labelledby="h-faq">
        <div className="wrap">
          <h2 id="h-faq">Häufige Fragen</h2>
          <div className="faq">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="kontakt" aria-labelledby="h-kontakt">
        <div className="wrap">
          <h2 id="h-kontakt">Erzähl mir von deinem Projekt</h2>
          <p>Eine kurze E-Mail reicht. Ich antworte dir mit Rückfragen und einem Angebot.</p>
          <a className="mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <div className="cta">
            <a className="btn" href={MAILTO_TEMPLATE}>
              E-Mail mit Vorlage öffnen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
