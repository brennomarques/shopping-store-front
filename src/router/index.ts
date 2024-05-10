import { createRouter, createWebHistory } from 'vue-router';
import Page404View from '@/views/pages/error/Page404View.vue';
import AboutView from '@/views/pages/AboutView.vue';
import DashboardView from '@/views/pages/DashboardView.vue';
import LoginPageView from '@/views/pages/auth/LoginPageView.vue';
import { Authorization } from '@/core/services';
import SignUpPageView from '@/views/pages/auth/SignUpPageView.vue';
import MyShoppingView from '@/views/pages/MyShoppingView.vue';
import OrderView from '@/views/pages/OrderView.vue';
import ListProductView from '@/views/pages/ListProductView.vue';
import ProfileView from '@/views/pages/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'login',
      component: LoginPageView,
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: SignUpPageView,
      meta: { requiresAuth: false }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { requiresAuth: false }
    },
    
    /**Router Required authentication */
    {
      path: '',
      redirect: '/dashboard',
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      redirect: 'dashboard',
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: MyShoppingView,
      meta: { requiresAuth: true },
    },
    {
      path: '/product',
      name: 'product',
      component: ListProductView,
      meta: { requiresAuth: true },
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Page404View,
      meta: { requiresAuth: false },
    }
  ]
});


router.beforeEach((to, from, next) => {

  if ((to.name === 'login' || to.name === 'register') && Authorization.isAuthenticated()) {
    next('/dashboard');
    return;
  } 
  if (to.matched.some(record => record.meta.requiresAuth) && !Authorization.isAuthenticated()) {
    next('/login');
    return;
  } 
  next();
  
});

export default router;
