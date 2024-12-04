import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Portfolio/" : "./",
  build: {
    outDir: "build",
  },
  plugins: [react()],
}));
