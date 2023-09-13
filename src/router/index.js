import { createRouter, createWebHistory } from 'vue-router'
import CardPage from '../views/CardPage.vue' ;
import DetailsProductPage from '../views/DetailsProductPage' ;
import ProductsPage from '../views/ProductsPage' ;
import NotFoundPage from '../views/NotFoundPage'

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/products/:id',
    name: 'DetailsProduct',
    component: DetailsProductPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CardPage
  },
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
