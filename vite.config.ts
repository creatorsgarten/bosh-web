import { defineConfig } from 'vite'
import solid from 'solid-start/vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    solid(),
    WindiCSS({
      scan: {
        fileExtensions: ['html', 'js', 'ts', 'jsx', 'tsx']
      }
    })
  ],
  server: {
    port: 3000
  },
  build: {
    minify: true,
    sourcemap: false,
    target: 'esnext'
  }
})
