import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig(() => {
  return {
    build: {
        rollupOptions: {
            //忽略打包vue文件
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
        },
        lib: {
          entry: path.resolve(__dirname, 'src/components/index.ts'),
          name: 'lyx',
          fileName: (format) => `lyx.${format}.js`
        }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      dynamicImport: true,
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @import "./src/styles/variable.scss";
          `,
        },
      },
    },
  }
})
