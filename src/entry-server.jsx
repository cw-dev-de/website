import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { PAGES, buildHead } from "./meta.js";

export { PAGES };

export function render(routeKey) {
  const page = PAGES[routeKey];
  return {
    head: buildHead(page),
    html: renderToString(<App path={page.url} />),
  };
}
