import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/circuits-code-connect/',
  build: {
    rollupOptions: {
      external: []
    }
  }
});