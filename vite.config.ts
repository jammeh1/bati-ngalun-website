import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bati-ngalun-website/',
  plugins: [react()],
});
