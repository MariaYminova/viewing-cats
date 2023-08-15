import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: () => import('../views/MainPage.vue')
    },
    {
      path: '/breeds/:breedId', 
      name: 'CatPage',
      component: () => import('../views/CatPage.vue')
    },
     {
       path: '/CatFavorites', 
       name: 'CatFavorites',
       component: () => import('../views/CatFavorites.vue')
     },
  
  ]
})

export default router
