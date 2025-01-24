// filepath: /c:/Users/Lenovo/Desktop/react_first/my-first-react/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/first-portfolio/', // Bu yerda 'first-portfolio' ni 'homepage' URL manziliga moslang
});