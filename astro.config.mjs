import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.goldenhealth.com.mx",
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/booking-calendar/") && !page.includes("/en/booking/"),
      namespaces: {
        news: false,
        video: false,
      },
    }),
  ],
});
