// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    // Prebundle the CommonJS dependencies of Astro's content loaders for sync.
    environments: {
      astro: { optimizeDeps: { include: ['astro/loaders'] } }
    }
  }
});
