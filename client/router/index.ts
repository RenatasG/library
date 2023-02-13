import { createRouter, createWebHistory } from 'vue-router';

import bookRoutes from './books';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: () => import('@/views/AppHome.vue'),
    },
    {
      path: '/home',
      redirect: { name: 'AppHome' },
    },
    ...bookRoutes,
  ],
});

export default router;
