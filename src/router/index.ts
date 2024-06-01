import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Our from '../views/Our.vue';
import Services from '../views/Services.vue';

import Stories from '../views/Stories.vue';
import Contact from '../views/Contact.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
   { path: '/our', name: 'Our', component: Our },
  { path: '/services', name: 'Services', component: Services },
  { path: '/stories', name: 'Stories', component: Stories },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
