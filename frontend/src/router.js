import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/HomePage.vue';
import AddProduct from './pages/AddProduct.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

