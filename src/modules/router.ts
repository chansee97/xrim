import type { App } from 'vue'
import {
  createMemoryHistory,
  createRouter,
} from 'vue-router'

const routes = [
  {
    path: '/',
    // component: () => import('../layouts/index.vue'),
    redirect: 'terminal',
    children: [
      { path: '/minitor', component: () => import('@/pages/minitor/index.vue') },
      { path: '/terminal', component: () => import('@/pages/terminal/index.vue') },
      { path: '/settings', component: () => import('@/pages/settings/index.vue') },
      { path: '/log', component: () => import('@/pages/log/index.vue') },
      { path: '/about', component: () => import('@/pages/about/index.vue') },
    ],
  },

]
// 安装vue路由
export async function install(app: App) {
  // 添加路由守卫
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
  app.use(router)
  await router.isReady() // https://router.vuejs.org/zh/api/index.html#isready
}
