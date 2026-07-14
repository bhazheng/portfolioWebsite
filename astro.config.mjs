import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  prefetch: true,
  build: {
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  ...(!isVercel ? {
    output: 'server',
    adapter: cloudflare()
  } : {})
});
