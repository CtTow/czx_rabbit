import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'
import subcategory from '@/views/subcategory/index.vue'
import Datali from '@/views/Datali/index.vue'
import CartList from '@/views/cartList/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '/home',
          component: Home
        },
        {
          path:'/category/:id',
          component: category
        },
        {
          path:'/category/sbu/:id',
          component: subcategory
        },
        {
          path:'/datali/:id',
          component:Datali
        },
        {
          path: '/cartList',
          component: CartList
        }
      ],
      redirect:'/home'
    },
    {
      path: '/login',
      component: Login
    }
    
  ],
  scrollBehavior(){
   return {top:0}
  }
})

export default router
