import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/pages/ProductsView.vue';
import Page404View from '@/views/pages/error/Page404View.vue';
import AboutView from '@/views/pages/AboutView.vue';
import DashaboardView from '@/views/pages/DashaboardView.vue';
import LoginPageView from '@/views/pages/auth/LoginPageView.vue';
import { Authorization } from '@/core/services';
import SignUpPageView from '@/views/pages/auth/SignUpPageView.vue';
import OrderView from '@/views/pages/OrderView.vue';
import ListProductView from '@/views/pages/ListProductView.vue';
import ProfileView from '@/views/pages/ProfileView.vue';
import MyShoppingView from '@/views/pages/MyShoppingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'login',
      component: LoginPageView
    },
    {
      path: '/register',
      name: 'register',
      component: SignUpPageView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashaboardView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/product',
      name: 'product',
      component: ListProductView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView 
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: MyShoppingView
    },
    // {
    //   path: '/',
    //   redirect: '/dashboard'
    // },
    // {
    //   path: '/dashboard',
    //   component: DashaboardView,
    //   children: [
    //     {
    //       path: '',
    //       redirect: 'dashboard'
    //     },
    //     {
    //       path: 'dashboard',
    //       name: 'dashboard',
    //       component: DashaboardView
    //     },
    //     {
    //       path: 'shopping',
    //       name: 'shopping',
    //       component: ShoppingView
    //     },
    //     {
    //       path: 'product',
    //       name: 'product',
    //       component: ProductsView
    //     },
    //     {
    //       path: 'about',
    //       name: 'about',
    //       component: AboutView
    //     }
    //   ]
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Page404View
    }
  ]
});

// // Guarda de navegação global para verificar autenticação
// router.beforeEach((to, from, next) => {
//   console.log('new Authorization().isAuthenticated()');
//   console.log(new Authorization().isAuthenticated());

//   if (to.name === 'login' && new Authorization().isAuthenticated()) {
//     next('/dashboard'); // Redirecionar usuário logado para a dashboard se tentar acessar a página de login
//   } else if (to.matched.some(record => record.meta.requiresAuth) && !new Authorization().isAuthenticated()) {
//     next('/login'); // Redirecionar usuário não autenticado para a página de login se tentar acessar uma rota protegida
//   } else {
//     next(); // Continuar a navegação normalmente
//   }
//   // router.beforeEach((to, from, next) => {
//   //   if (to.name !== 'Login' && !isAuthenticated()) next({ name: 'Login' });
//   //   else next();
//   // });
// });

export default router;
