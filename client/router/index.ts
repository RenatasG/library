import { createRouter, createWebHistory } from 'vue-router';

import bookRoutes from './books';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/AppHome.vue'),
    },
    ...bookRoutes,
  ],
});

export default router;
