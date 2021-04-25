import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('@/views/recommend')
  },
  {
    path: '/singer',
    component: () => import('@/views/recommend')
  },
  {
    path: '/top-list',
    component: () => import('@/views/top-list')
  },
  {
    path: '/search',
    component: () => import('@/views/search')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
