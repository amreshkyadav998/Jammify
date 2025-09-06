import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'main_app',
      remotes: {
        // music_library: 'http://localhost:4174/assets/remoteEntry.js',
        music_library: 'https://jammify-taupe.vercel.app/assets/remoteEntry.js',
      },
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
        'lucide-react', // 👈 add this
      ],
    }),
  ],
  optimizeDeps: {
    include: ['lucide-react'], // 👈 keep this as safety
  },
  build: {
    target: 'esnext',
     chunkSizeWarningLimit: 1500,
    rollupOptions: {
      external: 'music_library',
    },
  },
  server: {
    port: 4173,
  },
})
