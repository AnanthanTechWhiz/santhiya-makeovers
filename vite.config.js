import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from https://ananthantechwhiz.github.io/santhiya-makeovers/
  // so all asset paths must be prefixed with the repo name.
  base: '/santhiya-makeovers/',
  plugins: [react()],
})
