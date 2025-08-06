import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace "my-portfolio" with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // 👈 Important for GitHub Pages
})
