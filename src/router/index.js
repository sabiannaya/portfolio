import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory('/portfolio/'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

export default router
