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
            Ich entwickle Firmenwebsites individuell und ohne Ballast: sauber programmiert, schnell
            ladend und so aufgebaut, dass Suchmaschinen sie zuverlässig erfassen.
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
          <h2 id="h-leistungen">Leistungen</h2>
          <p className="intro">
            Webentwicklung für Selbstständige, Handwerksbetriebe, Dienstleister und kleine
            Unternehmen.
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
            <h2 id="h-handgeschrieben">Individuell entwickelt</h2>
            <p>
              Für viele kleine Webauftritte ist ein schlanker Aufbau die bessere Lösung. Eine
              individuell entwickelte Website ist einfacher, schneller und weniger angreifbar.
            </p>
            <p className="note">
              Zu beachten: Inhalte pflegen Sie nicht selbst in einem Dashboard, sondern übermitteln
              sie mir. Wer Texte täglich eigenständig bearbeiten möchte, ist mit einer anderen
              Lösung besser beraten. Darauf weise ich Sie vorab ausdrücklich hin.
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
          <h2 id="h-ablauf">Ablauf eines Projekts</h2>
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
          <h2 id="h-preise">Preise auf Anfrage, verbindlich im Angebot</h2>
          <p>
            Jede Website ist individuell, daher gibt es keine Pauschalpreise. Sie erhalten vor
            Projektbeginn ein Festpreis-Angebot ohne versteckte Kosten.
          </p>
          <p>Für eine zügige Rückmeldung benötige ich kurze Angaben zu:</p>
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
              Mein Name ist Christian Wegner, ich bin Webentwickler aus Hamm. Parallel zu meiner
              Ausbildung zum Fachinformatiker für Anwendungsentwicklung entwickle ich Websites für
              Unternehmen.
            </p>
            <p>
              Sie haben einen direkten Ansprechpartner statt einer Agentur. Ich schreibe jede Zeile
              Code selbst und verantworte das Ergebnis.
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
          <h2 id="h-kontakt">Projekt anfragen</h2>
          <p>Eine kurze E-Mail genügt. Ich antworte mit Rückfragen und einem Angebot.</p>
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