import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // UPDATE THESE TWO LINES
  site: 'https://<YOUR_USERNAME>.github.io',
  base: '/<YOUR_REPO_NAME>',
  
  vite: {
    plugins: [tailwindcss()],
  },
});
