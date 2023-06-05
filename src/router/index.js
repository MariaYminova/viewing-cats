import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: () => import('../views/catalog.vue')
    },
    {
      path: '/cat',
      name: 'catPage',
      component: () => import('../views/catPage.vue')
    },
   
  ]
})

export default router