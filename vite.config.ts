// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Repo
  base: '/music-gallery/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // pour chaque fichier .html
      input: {
        main:   resolve(__dirname, 'index.html'),
        album:  resolve(__dirname, 'album.html')
      }
    }
  },
})