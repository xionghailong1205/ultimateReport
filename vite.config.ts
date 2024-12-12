import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://hymc.mypacs.cn:665/",
        rewrite: (path) => {
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
});
