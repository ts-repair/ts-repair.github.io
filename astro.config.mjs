import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ts-repair.ai',
  integrations: [tailwind()],
  output: 'static',
});
