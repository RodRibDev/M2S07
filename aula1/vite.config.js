import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/M2S07/aula1",
  server: {
    host: '0.0.0.0',
  }
  
})
