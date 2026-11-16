import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
);

// Prerenderte Seiten werden hydriert, im Dev-Modus (leeres #root) normal gerendert.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
