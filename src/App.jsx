import { useEffect } from "react";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import NotFound from "./pages/NotFound.jsx";
import { PAGES, resolveRoute } from "./meta.js";

const VIEWS = {
  home: Home,
  impressum: Impressum,
  datenschutz: Datenschutz,
  notfound: NotFound,
};

export default function App({ path }) {
  const route = resolveRoute(path);
  const View = VIEWS[route];

  // Im Dev-Modus (ohne Prerendering) den Titel trotzdem setzen.
  useEffect(() => {
    document.title = PAGES[route].title;
  }, [route]);

  return (
    <Layout>
      <View />
    </Layout>
  );
}
