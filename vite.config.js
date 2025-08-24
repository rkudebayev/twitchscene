import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'src',            // исходники в src
  base: './',             // относительные пути к ресурсам
  build: {
    outDir: '../dist',    // собрать в dist на уровне корня проекта
    emptyOutDir: true
  }
})
