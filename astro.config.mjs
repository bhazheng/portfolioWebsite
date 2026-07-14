import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  prefetch: true,
  build: {
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
