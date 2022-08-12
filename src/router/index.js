import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../pages/search/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
