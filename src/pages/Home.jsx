import ContactForm from "../components/ContactForm.jsx";
import { EMAIL, FACTS, SERVICES, STEPS, FAQ } from "../data.js";

const num = (i) => String(i + 1).padStart(2, "0");

function Section({ id, label, title, className = "", children }) {
  return (
    <section className={`sec ${className}`} id={id} aria-labelledby={`h-${id}`}>
      <div className="wrap sec-grid">
        <p className="sec-label">{label}</p>
        <div className="sec-body">
          <h2 id={`h-${id}`}>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="inhalt">
      <section className="hero" aria-labelledby="h1">
        <div className="wrap">
          <h1 id="h1">
            Eine Website, die Ihrem Betrieb neue Kunden bringt – komplett für Sie umgesetzt.
          </h1>
          <p className="lead">
            Ich übernehme Gestaltung, Texte und Ihre Auffindbarkeit bei Google. Sie sparen Zeit und
            Nerven und gewinnen neue Kunden aus Ihrer Region.
          </p>
          <div className="cta">
            <a className="btn" href="#kontakt">
              Unverbindlich anfragen
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

      <Section id="leistungen" label="Leistungen" title="Was ich Ihnen abnehme">
        <ol className="items">
          {SERVICES.map((s, i) => (
            <li className="item" key={s.title}>
              <span className="no">{num(i)}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="ablauf" label="Ablauf" title="In drei Schritten zur fertigen Website">
        <ol className="items">
          {STEPS.map((s, i) => (
            <li className="item" key={s.title}>
              <span className="no">{num(i)}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="ueber-mich" label="Über mich" title="Ihr direkter Ansprechpartner">
        <div className="about">
          <p>
            Mein Name ist Christian Wegner. Ich bin Webentwickler aus Hamm und erstelle Websites
            für Selbstständige, Handwerksbetriebe und Dienstleister.
          </p>
          <p>
            Sie sprechen direkt mit mir, nicht mit einem Callcenter oder einer Agentur. Ich setze
            jedes Projekt selbst um und stehe für das Ergebnis ein.
          </p>
          <p>
            Beruflich absolviere ich derzeit eine Ausbildung zum Fachinformatiker für
            Anwendungsentwicklung. Websites für Unternehmen entwickle ich parallel dazu.
          </p>
        </div>
      </Section>

      <Section id="faq" label="Fragen" title="Häufige Fragen">
        <div className="faq">
          {FAQ.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="kontakt" label="Kontakt" title="Unverbindlich anfragen" className="contact">
        <p className="contact-intro">
          Schildern Sie mir kurz Ihr Vorhaben. Ich melde mich zeitnah bei Ihnen, um alles Weitere
          persönlich zu besprechen.
        </p>
        <ContactForm />
        <p className="contact-alt">
          Sie möchten lieber direkt schreiben? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </Section>
    </main>
  );
}
