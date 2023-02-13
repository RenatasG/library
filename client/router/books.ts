import type { Route } from '@/types/routes';

const bookRoutes = [
  {
    path: '/books',
    name: 'BooksIndex',
    component: () => import('@/views/AppHome.vue'),
  },
  {
    path: '/books/:id',
    name: 'BooksShow',
    component: () => import('@/views/BooksShow.vue'),
  },
] satisfies Route[];

export default bookRoutes;
