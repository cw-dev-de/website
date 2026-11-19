import React from "react";

export default function Home() {
  return (
    <main className="page">
      {/* 1. HERO: Links starkes Versprechen, rechts persönlicher Vertrauensanker */}
      <section className="hero container">
        <div className="hero-content">
          <span className="eyebrow">Webdesign & Betreuung aus Hamm</span>
          <h1>
            Eine Website, die Ihrem Betrieb neue Kunden bringt – komplett für Sie umgesetzt.
          </h1>
          <p className="lead">
            Kein Technik-Stress, kein Fachchinesisch. Ich übernehme alles für Sie: 
            vom modernen Design und den Texten bis zur Sichtbarkeit bei Google. 
            Sie kümmern sich um Ihr Geschäft, ich mich um Ihren Auftritt im Netz.
          </p>
          <div className="cta-group">
            <a className="btn primary" href="#kontakt">
              Unverbindlich anfragen
            </a>
            <a className="btn ghost" href="#ablauf">
              So läuft es ab
            </a>
          </div>
        </div>
      </section>

      {/* 2. LEISTUNGEN: Redaktionelle Liste mit Linien statt KI-Karten */}
      <section className="section container" id="leistungen">
        <div className="section-header">
          <h2>Was ich Ihnen abnehme</h2>
          <p>Alles aus einer Hand – verständlich, zuverlässig und zum festen Preis.</p>
        </div>

        <div className="service-list">
          <div className="service-row">
            <span className="service-num">01</span>
            <div className="service-title">
              <h3>Neue Website & Modernisierung</h3>
            </div>
            <div className="service-desc">
              <p>
                Egal ob kompletter Neustart oder Überarbeitung einer veralteten Seite: 
                Ich gestalte Ihren Auftritt übersichtlich, vertrauenswürdig und perfekt 
                lesbar auf Smartphone, Tablet und PC.
              </p>
            </div>
          </div>

          <div className="service-row">
            <span className="service-num">02</span>
            <div className="service-title">
              <h3>Bei Google gefunden werden</h3>
            </div>
            <div className="service-desc">
              <p>
                Die schönste Website bringt nichts, wenn sie niemand sieht. Ich richte 
                Ihre Seite so ein, dass Kunden aus Ihrer Region gezielt nach Ihren 
                Leistungen suchen und direkt auf Ihrem Betrieb landen.
              </p>
            </div>
          </div>

          <div className="service-row">
            <span className="service-num">03</span>
            <div className="service-title">
              <h3>Rundum-Sorglos-Betreuung</h3>
            </div>
            <div className="service-desc">
              <p>
                Sie müssen sich nicht mit Updates oder Technik herumschlagen. Auf Wunsch 
                übernehme ich dauerhaft Pflege, Sicherheit und Änderungen – eine kurze 
                Nachricht oder ein Anruf genügt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABLAUF: 3 klare Schritte */}
      <section className="section alt-bg" id="ablauf">
        <div className="container">
          <div className="section-header">
            <h2>In 3 einfachen Schritten zu Ihrer neuen Website</h2>
          </div>
          <div className="steps-grid">
            <div className="step">
              <strong>Schritt 1 · 15 Min. Gespräch</strong>
              <h3>Kurzes Kennenlernen</h3>
              <p>
                Wir besprechen unverbindlich, was Ihr Betrieb macht und was Sie 
                erreichen möchten – telefonisch oder vor Ort.
              </p>
            </div>
            <div className="step">
              <strong>Schritt 2 · Umsetzung</strong>
              <h3>Ich baue Ihre Seite</h3>
              <p>
                Ich kümmere mich um Struktur, Texte und Gestaltung. Sie schauen 
                zwischendurch drüber und geben Ihr Feedback.
              </p>
            </div>
            <div className="step">
              <strong>Schritt 3 · Fertigstellung</strong>
              <h3>Start & Betreuung</h3>
              <p>
                Nach Ihrer Freigabe geht die Website online. Auch danach bleibe ich 
                Ihr fester Ansprechpartner für alle Änderungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ÜBER MICH: Persönlich & nahbar */}
      <section className="section container" id="ueber-mich">
        <div className="about-grid">
          <div className="about-image-placeholder">
            {/* Hier dein echtes Porträtfoto einbinden: <img src="/christian.jpg" alt="Christian Wegner" /> */}
            <span>Foto von Christian</span>
          </div>
          <div className="about-text">
            <span className="eyebrow">Ihr Ansprechpartner</span>
            <h2>Kein anonymes Callcenter – sondern direkter Kontakt auf Augenhöhe.</h2>
            <p>
              Hallo, ich bin Christian. Viele Unternehmer haben schlicht keine Zeit, 
              sich neben dem Tagesgeschäft auch noch um Webdesign, Google und Technik 
              zu kümmern.
            </p>
            <p>
              Mein Anspruch ist es, Ihnen diese Arbeit komplett abzunehmen – unkompliziert, 
              ehrlich und so, dass Ihre Kunden sofort verstehen, warum sie bei Ihnen 
              genau richtig sind.
            </p>
          </div>
        </div>
      </section>

      {/* 5. KONTAKT: Direktes Formular statt nur Mail-Link */}
      <section className="section container" id="kontakt">
        <div className="contact-box">
          <div className="contact-info">
            <h2>Lassen Sie uns kurz sprechen.</h2>
            <p>
              Schreiben Sie mir kurz, worum es geht oder hinterlassen Sie Ihre 
              Telefonnummer. Ich melde mich zeitnah bei Ihnen – ganz unverbindlich.
            </p>
          </div>
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* Kostenlosen Access-Key von web3forms.com hier eintragen */}
            <input type="hidden" name="access_key" value="DEIN_WEB3FORMS_KEY" />
            
            <label>
              Ihr Name / Firma
              <input type="text" name="name" placeholder="z. B. Musterbau GmbH" required />
            </label>
            <label>
              Telefonnummer oder E-Mail
              <input type="text" name="contact" placeholder="Für einen kurzen Rückruf" required />
            </label>
            <label>
              Worum geht es kurz? (Optional)
              <textarea name="message" rows="3" placeholder="Neue Website, Überarbeitung..." />
            </label>
            <button type="submit" className="btn primary">
              Anfrage absenden
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}