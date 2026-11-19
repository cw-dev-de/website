import { useState } from "react";
import { EMAIL, FORM_ENDPOINT, MAIL_SUBJECT } from "../data.js";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Spam-Schutz: dieses Feld ist für Besucher unsichtbar.
    if (data.get("website")) return;

    const name = String(data.get("name") || "").trim();
    const kontakt = String(data.get("kontakt") || "").trim();
    const nachricht = String(data.get("nachricht") || "").trim();

    // Ohne eingetragenen Formular-Dienst: vorbereitete E-Mail öffnen.
    if (!FORM_ENDPOINT) {
      const body = `Name / Firma: ${name}\nE-Mail oder Telefon: ${kontakt}\n\n${nachricht}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        MAIL_SUBJECT
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: MAIL_SUBJECT, name, kontakt, nachricht }),
      });
      if (!response.ok) throw new Error("Senden fehlgeschlagen");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-msg" role="status">
        <strong>Vielen Dank für Ihre Anfrage.</strong>
        <p>Ich habe Ihre Nachricht erhalten und melde mich zeitnah bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate={false}>
      <label className="field">
        <span>Name / Firma</span>
        <input type="text" name="name" autoComplete="name" required />
      </label>
      <label className="field">
        <span>E-Mail oder Telefon</span>
        <input type="text" name="kontakt" autoComplete="email" required />
      </label>
      <label className="field">
        <span>Ihr Anliegen</span>
        <textarea name="nachricht" rows="5" required />
      </label>
      <div className="hp" aria-hidden="true">
        <label>
          Bitte leer lassen
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="check">
        <input type="checkbox" name="datenschutz" required />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz.html" target="_blank" rel="noopener">
            Datenschutzerklärung
          </a>{" "}
          zur Kenntnis genommen.
        </span>
      </label>
      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
      {status === "error" && (
        <p className="form-msg" role="alert">
          Die Nachricht konnte leider nicht gesendet werden. Bitte schreiben Sie mir direkt an{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
