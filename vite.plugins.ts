import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export function setVitePlugins() {
  const plugins = [
    vue(),

    // https://github.com/antfu/unocss
    Unocss(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/types/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
        'src/service/api',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/types/components.d.ts',
    }),
  ]
  return plugins
}
