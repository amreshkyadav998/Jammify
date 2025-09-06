// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import federation from '@originjs/vite-plugin-federation';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//     tailwindcss(),
//   federation({
//       name: 'music_library',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './MusicLibrary': './src/MusicLibrary.jsx',
//       },
//       shared: ['react', 'react-dom', 'react-router-dom'],
//     }),
//   ],
//   build: {
//     target: 'esnext',
//   },
//   server: {
//     port: 4175,
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'music_library',
      filename: 'remoteEntry.js',
      exposes: {
        './MusicLibrary': './src/MusicLibrary.jsx',
        './SongItem': './src/components/SongItem.jsx',
        './SongList': './src/components/SongList.jsx',
        './AddSongForm': './src/components/AddSongForm.jsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        'react-router-dom': { singleton: true },
        'lucide-react': { singleton: true }, // 👈 important
      },
    }),
  ],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1500,
  },
  server: {
    port: 4175,
  },
})
