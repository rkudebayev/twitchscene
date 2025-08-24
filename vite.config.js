import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',       // если исходники в src
  build: {
    outDir: '../dist' // собираем в dist на уровне корня проекта
  }
})
