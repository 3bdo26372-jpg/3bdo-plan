import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages serves this app from /3bdo-plan/ (a project subpath); every
  // other host (Vercel, local dev) serves it from the domain root.
  base: process.env.GITHUB_PAGES === 'true' ? '/3bdo-plan/' : '/',
  plugins: [react()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
