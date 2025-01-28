export default defineConfig({
  base: './', // Static fayllarni to‘g‘ri yuklash uchun
  build: {
    outDir: 'dist', // Netlify 'dist' papkasini ishlatishi kerak
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
});
