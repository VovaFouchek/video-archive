import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  base: "/video-archive",
});
