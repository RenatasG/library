import type { Route } from './index';

const routes: Route[] = [
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
];

export default routes;
