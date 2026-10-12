import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://iris0914ovo.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
