// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// если index.html в корне, main.jsx в src
export default defineConfig({
  plugins: [react()],
  root: '.',              // корень проекта
  base: './',             // очень важно для относительных путей в билде
  build: {
    outDir: 'dist',       // куда собирать файлы
    emptyOutDir: true,    // очищать dist перед билдом
    rollupOptions: {
      input: 'index.html' // указываем Vite явно точку входа
    }
  }
})
