import { EMAIL } from "../data.js";

const Todo = ({ children }) => <span className="todo">{children}</span>;

export default function Impressum() {
  return (
    <main id="inhalt" className="doc">
      <div className="wrap">
        <h1>Impressum</h1>
        <p>
          <Todo>
            Bitte vor dem Livegang ausfüllen: Das Impressum ist für geschäftsmäßige Websites in
            Deutschland Pflicht.
          </Todo>
        </p>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Christian Wegner
          <br />
          CW Dev
          <br />
          <Todo>[Straße und Hausnummer]</Todo>
          <br />
          <Todo>[PLZ] [Ort]</Todo>
        </p>
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          <Todo>[Telefonnummer, falls vorhanden]</Todo>
        </p>
        <h2>Umsatzsteuer</h2>
        <p>
          <Todo>
            [Umsatzsteuer-ID, falls vorhanden. Bei Kleinunternehmerregelung (§ 19 UStG) hier den
            entsprechenden Hinweis einfügen.]
          </Todo>
        </p>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Christian Wegner, Anschrift wie oben.</p>
      </div>
    </main>
  );
}
