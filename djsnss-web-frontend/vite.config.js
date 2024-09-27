import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  root: 'src', // Set root if your HTML file is in the src folder
  build: {
    outDir: '../dist', // Specify output directory relative to the root
  },
});
