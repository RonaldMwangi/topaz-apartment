// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import process from 'node:process';

const windows = process.platform === 'win32';
const serverPrebundles = [
  'react',
  'react-dom/server',
  'astro/content/runtime',
  'astro/app/manifest',
  'picomatch',
  'yaml',
  'cookie',
  'p-queue',
];

export default defineConfig({
  integrations: [react()],
  fonts: [
    {
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      provider: fontProviders.local(),
      weights: ['400 700'],
      styles: ['normal'],
      display: 'swap',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Montserrat-latin-variable.woff2'],
            weight: '400 700',
            style: 'normal',
          },
        ],
      },
    },
    {
      name: 'Poppins',
      cssVariable: '--font-poppins',
      provider: fontProviders.local(),
      weights: [400, 500, 600],
      styles: ['normal'],
      display: 'swap',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/Poppins-latin-400.woff2'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/Poppins-latin-500.woff2'], weight: 500, style: 'normal' },
          { src: ['./src/assets/fonts/Poppins-latin-600.woff2'], weight: 600, style: 'normal' },
        ],
      },
    },
  ],
  vite: {
    // On Windows, initialise prebundles before Astro 7's early module loading.
    // Otherwise Vite 8 can evaluate transitive CommonJS dependencies as ESM.
    plugins: windows
      ? [
          {
            name: 'topaz:initialize-dev-dependencies',
            enforce: 'pre',
            async configureServer(server) {
              await Promise.all(
                Object.values(server.environments).map((environment) =>
                  environment.depsOptimizer?.init(),
                ),
              );
            },
          },
        ]
      : [],
    environments: {
      astro: {
        resolve: windows ? { noExternal: true } : undefined,
        optimizeDeps: {
          noDiscovery: true,
          include: windows ? ['astro/loaders', 'devalue', 'yaml', 'picomatch'] : ['astro/loaders'],
        },
      },
      ...(windows
        ? {
            ssr: {
              resolve: { noExternal: true },
              optimizeDeps: { noDiscovery: true, include: serverPrebundles },
            },
            prerender: {
              resolve: { noExternal: true },
              optimizeDeps: { noDiscovery: true, include: serverPrebundles },
            },
          }
        : {}),
    },
  },
});
