import type { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

export interface Route {
  path: string;
  name: string;
  component: Component;
  children?: Route[];
}

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
