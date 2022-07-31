import { createRouter, createWebHistory } from 'vue-router';
import firstPage from '@/pages/firstPage';
import secondPage from '@/pages/secondPage';

const routes = [
    {
        path : '/',
        redirect : '/firstPage',
    },
    {
        path : '/firstPage',
        component : firstPage,
    },
    {
        path : '/secondPage',
        component : secondPage,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
  });