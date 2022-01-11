import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'button', // 起个名字，安装、引入用
      fileName: (format) =>`button.${format}.js`
    }
  }
})
