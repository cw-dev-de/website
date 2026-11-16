import { EMAIL } from "../data.js";

const Todo = ({ children }) => <span className="todo">{children}</span>;

export default function Datenschutz() {
  return (
    <main id="inhalt" className="doc">
      <div className="wrap">
        <h1>Datenschutzerklärung</h1>
        <p>
          <Todo>
            Entwurf: Bitte vor dem Livegang prüfen lassen oder mit einem Generator wie eRecht24
            gegenprüfen.
          </Todo>
        </p>
        <h2>1. Verantwortlicher</h2>
        <p>
          Christian Wegner, CW Dev, <Todo>[Anschrift wie im Impressum]</Todo>, E-Mail:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <h2>2. Hosting über GitHub Pages</h2>
        <p>
          Diese Website wird über GitHub Pages bereitgestellt (GitHub Inc., 88 Colin P. Kelly Jr.
          Street, San Francisco, CA 94107, USA, ein Unternehmen der Microsoft-Gruppe). Beim Aufruf
          der Seite verarbeitet der Hosting-Anbieter technisch notwendige Daten, insbesondere die
          IP-Adresse, Datum und Uhrzeit des Abrufs sowie die angeforderte Seite. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten
          Bereitstellung der Website). Weitere Informationen findest du in der
          Datenschutzerklärung von GitHub.
        </p>
        <h2>3. Cookies, Tracking und Schriften</h2>
        <p>
          Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste. Die
          verwendete Schriftart wird von diesem Server ausgeliefert und nicht von externen
          Anbietern geladen.
        </p>
        <h2>4. Kontaktaufnahme per E-Mail</h2>
        <p>
          Wenn du mir eine E-Mail schickst, verarbeite ich deine Angaben zur Bearbeitung deiner
          Anfrage und für Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
          (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht,
          sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
        <h2>5. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Außerdem kannst du dich bei einer
          Datenschutzaufsichtsbehörde beschweren, in Nordrhein-Westfalen bei der Landesbeauftragten
          für Datenschutz und Informationsfreiheit NRW.
        </p>
      </div>
    </main>
  );
}
