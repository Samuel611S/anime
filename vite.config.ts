import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  // Required for GitHub Pages: repo is at username.github.io/anime/
  base: "/anime/",
});
