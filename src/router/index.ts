import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import appList from '@/views/app-list/index.vue';

const routes: Array<RouteRecordRaw> = [
  { name: 'List', path: '/list', component: appList },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
