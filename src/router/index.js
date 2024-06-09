import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shows from '../views/Shows.vue'
import Music from '../views/Music.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shows',
      name: 'shows',
      component: Shows
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    }

  ]
})

export default router
