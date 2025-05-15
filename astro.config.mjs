import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://local-love-hub.example.com',
  integrations: [tailwind()],
  output: 'static'
});