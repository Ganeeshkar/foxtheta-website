import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Base styles first so component CSS (imported inside App) can override them.
import "./styles/tokens.css";
import "./styles/global.css";

import App from "./App.jsx";
import "./styles/editorial.css";
import "./styles/precision.css";
import "./styles/dark-diagrams.css";
import "./styles/dark.css";

// Optional demo fonts for local design review. The files are personal-use
// only, so they are not in Git; without them the site uses Inter. Vite drops
// this branch, and the fonts, from production builds.
if (import.meta.env.DEV) {
  const weights = { regular: 400, medium: 500, semibold: 600, bold: 700 };
  const files = Object.entries(import.meta.glob("./assets/fonts/preview/*.otf", { query: "?url", import: "default" }));
  if (files.length) {
    Promise.all(files.map(async ([path, load]) => {
      const weight = weights[path.match(/-(\w+)\.otf$/)[1]];
      document.fonts.add(new FontFace("Neue Alte Grotesk Preview", `url(${await load()}) format("opentype")`, { weight: String(weight), display: "swap", unicodeRange: "U+0020,U+0041-005A,U+0061-007A" }));
    })).then(() => import("./styles/font-preview.css"));
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
