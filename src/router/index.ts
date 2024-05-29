import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Our from '../views/Our.vue';
import Stories from '../views/Stories.vue';
import Contact from '../views/Contact.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/our', name: 'Our', component: Our },
  { path: '/stories', name: 'Stories', component: Stories },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
