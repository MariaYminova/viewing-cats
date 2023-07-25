import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: () => import('../views/Catalog.vue')
    },
    {
      path: '/cat/:catId', 
      name: 'CatPage',
      component: () => import('../views/CatPage.vue')
    },
  
  ]
})

export default router