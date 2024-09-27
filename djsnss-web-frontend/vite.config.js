import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Point to the src directory for index.html
  build: {
    outDir: '../dist', // Ensure that the build output goes to the correct folder
  },
});
