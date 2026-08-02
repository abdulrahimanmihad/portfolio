import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the same build works on GitHub Pages project sites,
// Vercel, Netlify, or any static host without reconfiguration.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
