import { resolve } from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    react(),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '~': resolve(fileURLToPath(new URL('.', import.meta.url)), './src'),
      '@c': resolve(fileURLToPath(new URL('.', import.meta.url)), './src/c'),
      '@admin': resolve(fileURLToPath(new URL('.', import.meta.url)), './src/admin')
    }
  }
})
