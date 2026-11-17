import Logo from "./Logo.jsx";
import { NAV } from "../data.js";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="/" aria-label="CW Dev, zur Startseite">
          <Logo />
        </a>
        <nav className="nav" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="btn" href="/#kontakt">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p style={{ margin: 0, maxWidth: "none" }}>© 2026 Christian Wegner · CW Dev</p>
        <nav aria-label="Rechtliches">
          <a href="/impressum.html">Impressum</a>
          <a href="/datenschutz.html">Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <a className="skip" href="#inhalt">
        Zum Inhalt springen
      </a>
      <Header />
      {children}
      <Footer />
    </>
  );
}