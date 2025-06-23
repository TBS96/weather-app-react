import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // workbox: {
      //   cleanupOutdatedCaches: true
      // },
      // devOptions: {
      //   enabled: true
      // },
      manifest: {
        name: 'Sun Syncs',
        short_name: 'Sun Syncs',
        start_url: '/',
        display: 'standalone',
        background_color: '#272525',
        theme_color: '#272525',
        scope: '/',
        lang: 'en',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
        ],
      },
    }),
  ],
})
