import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(woff|woff2|ttf|eot|svg)$/.test(assetInfo?.name ?? "")) {
            return "fonts/[name][extname]";
          }
          if (assetInfo?.name?.match(/\.css$/)) {
            return "assets/[name]-[hash][extname]";
          }
          return "assets/[name][extname]"; // Default output pattern for other assets
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      react: "react",
      "react-dom": "react-dom",
      "@": "/src",
    },
  },
  server: {
    open: true,
    watch: {
      usePolling: true,
    },
  },
});
