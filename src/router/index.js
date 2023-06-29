import { createRouter, createWebHistory } from 'vue-router'
import index from '../components/index.vue'
import Intro from '../components/Intro.vue'
import Education from '../components/Education.vue'
import Project from '../components/Project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
    // {
    //   path: '/intro',
    //   name: 'intro',
    //   component: Intro
    // },
    // {
    //   path: '/education',
    //   name: 'education',
    //   component: Education
    // },
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: Project
    // },
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
