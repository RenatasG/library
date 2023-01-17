import type { RouteRecordRaw } from 'vue-router';
import type { Route } from '@/types/routes';
import BooksShow from '@/views/BooksShow.vue';

const bookRoutes = [
  {
    path: '/books/:id',
    name: 'BooksShow',
    component: BooksShow,
  },
] satisfies Route[];

export default bookRoutes;
