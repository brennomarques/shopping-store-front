import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShoppingView from '@/views/pages/ShoppingView.vue'
import ProductsView from '@/views/pages/ProductsView.vue'
import Page404View from '@/views/pages/error/Page404View.vue'
import AboutView from '@/views/pages/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/manager/dashboard'
    },
    {
      path: '/manager',
      component: HomeView,
      children: [
        {
          path: '',
          redirect: 'dashboard'
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: HomeView
        },
        {
          path: 'shopping',
          name: 'shopping',
          component: ShoppingView
        },
        {
          path: 'product',
          name: 'product',
          component: ProductsView
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Page404View
    }
  ]
})

export default router
