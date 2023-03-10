import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/Dashboard.vue'),
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
      },
      
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
