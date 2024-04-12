import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { setVitePlugins } from './vite.plugins'

export default defineConfig(async () => ({
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  clearScreen: false,
  server: {
    port: 1620,
    host: '0.0.0.0',
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },
  },
  plugins: setVitePlugins(),
}))
