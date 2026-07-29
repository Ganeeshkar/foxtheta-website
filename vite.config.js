import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Standard static SPA build. `npm run build` emits to /dist, which is exactly
// what Vercel auto-detects for a Vite project — no extra configuration needed.
// (vercel.json only adds the SPA rewrite so deep links like /services/xyz work.)
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
