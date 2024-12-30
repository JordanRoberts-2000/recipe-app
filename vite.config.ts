import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@svgs": "/src/assets/svgs",
      "@styles": "/src/styles",
      "@components": "/src/components",
    },
  },
});
