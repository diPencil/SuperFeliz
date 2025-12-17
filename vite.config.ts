import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@splinetool/react-spline/next': '@splinetool/react-spline',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Spline and its dependencies into separate chunk
          spline: ['@splinetool/react-spline'],
          // Split vendor libraries
          vendor: ['react', 'react-dom'],
          // Split UI libraries
          ui: ['lucide-react'],
        },
      },
    },
    // Reduce chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'esbuild',
    // Enable source maps for debugging
    sourcemap: false,
  },
  // Enable gzip compression
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
});
