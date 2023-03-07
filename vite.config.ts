import { fileURLToPath, URL } from "node:url";
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
    },
  },

  server: {
    proxy: {
      "/api": "http://localhost:5050",
      "/images": "http://localhost:5050",
    },
  },
});
