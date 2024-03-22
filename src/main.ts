import type { App } from 'vue'
import { createApp } from 'vue'
import 'uno.css'
import '@/style/index.css'
import AppVue from './App.vue'

function setupApp() {
  // 创建vue实例
  const app = createApp(AppVue)

  /* 注册模块 Vue-router/Pinia */
  Object.values(
    import.meta.glob<{ install: (app: App) => void }>('./modules/*.ts', {
      eager: true,
    }),
  ).map(i => i.install?.(app))

  // 挂载
  app.mount('#app')
}
setupApp()
