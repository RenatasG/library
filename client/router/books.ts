import type { Route } from '@/types/routes';

const bookRoutes = [
  {
    path: '/books/:id',
    name: 'BooksShow',
    component: () => import('@/views/BooksShow.vue'),
  },
] satisfies Route[];

export default bookRoutes;
