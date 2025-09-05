import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
   federation({
      name: 'main_app',
      remotes: {
        // music_library: 'http://localhost:4174/assets/remoteEntry.js',
        music_library: 'https://jammify-taupe.vercel.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 4173,
  },
})
