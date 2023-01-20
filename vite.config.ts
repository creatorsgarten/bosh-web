import { defineConfig } from 'vite'
import solid from 'solid-start/vite'
import staticAdapter from 'solid-start-static'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    solid({
      adapter: staticAdapter()
    }),
    WindiCSS({
      scan: {
        fileExtensions: ['html', 'js', 'ts', 'jsx', 'tsx']
      }
    })
  ],

  build: {
    minify: true,
    sourcemap: false,
    target: 'esnext'
  }
})
