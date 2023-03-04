import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/top',
      name: 'top',
      component: () => import("../components/Top.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue')
    }
  ]
})

export default router
