// @ts-check

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import { defineConfig, fontProviders } from "astro/config";


// https://astro.build/config
export default defineConfig({
  site: "http://localhost",
  integrations: [mdx(), icon(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Figtree",
      cssVariable: "--font-figtree",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/figtree-regular.ttf"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/figtree-italic.ttf"],
            weight: 400,
            style: "italic",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/figtree-bold.ttf"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/figtree-bolditalic.ttf"],
            weight: 700,
            style: "italic",
            display: "swap",
          },
        ],
      },
    },
  ],
});
