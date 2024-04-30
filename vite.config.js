import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  if (mode === 'development') {
    return {
      plugins: [vue()],
      base: '/hello-world-vite-vue3-test/',
    }
  } else {
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/components/install.js'),
          name: 'hello-world-vite-vue3-test',
          // the proper extensions will be added
          fileName: 'hello-world-vite-vue3-test',
        },
        rollupOptions: {
          // 确保外部化处理那些你不想打包进库的依赖
          external: ['vue'],
          output: {
            // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            globals: {
              vue: 'Vue',
            },
          },
        }
      }
    }
  }
})

