import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  build: {
    // SSR bundle marks react as external — `scripts/build.mjs` sets PORTFOLIO_SSR=1 for that pass only.
    rollupOptions:
      process.env.PORTFOLIO_SSR === '1'
        ? {}
        : {
            output: {
              manualChunks: {
                vendor: ['react', 'react-dom'],
                motion: ['framer-motion'],
              },
            },
          },
  },
}))
