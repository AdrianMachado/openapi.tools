import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2022-02-24'),
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
    }),
  ],
  // @see hosting with vercel https://docs.astro.build/en/guides/integrations-guide/vercel/
  output: 'hybrid',
  adapter: vercel({
    imageService: true,
    devImageService: 'squoosh',
    isr: true,
    maxDuration: 10, // max # seconds a serverless function can run (to be safe)
  }),
  site: 'https://openapi.tools',
  trailingSlash: 'never',
});
