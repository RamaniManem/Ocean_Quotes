import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.svg"],

      manifest: {
        name: "Ocean Quotes",
        short_name: "Ocean Quotes",
        description:
          "Discover beautiful quotes with peaceful ocean scenery.",
        theme_color: "#167c91",
        background_color: "#dff5f6",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        scope: "/",

       icons: [
  {
    src: "favicon.svg",
    sizes: "any",
    type: "image/svg+xml",
    purpose: "any",
  },
],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,svg,png,woff2}"],

        runtimeCaching: [
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "ocean-background-images",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "ocean-google-fonts",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "ocean-font-files",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
});