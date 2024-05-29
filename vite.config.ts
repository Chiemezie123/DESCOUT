import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@api": "/src/api",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@layouts": "/src/layouts",
      "@mock": "/src/mock",
      "@pages": "/src/pages",
      "@router": "/src/router",
      "@store": "/src/store",
      "@utils": "/src/utils",
      "@components": "/src/components",
      "@test": "/src/test",
    },
  },
});
