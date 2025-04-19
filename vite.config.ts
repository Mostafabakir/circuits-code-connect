import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/circuits-code-connect/', // Must match your repository name exactly
  plugins: [react()],
});