// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbzxVnUtCVof46SiyKaDQxQi_LUk9DHGK03MY2ps0IBxCn3wvVNVdZoFYXqXJLWkmNci1A/exec', // replace with your API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
