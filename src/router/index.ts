import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import ToBuy from '../views/ToBuy.vue'
import ToSell from '../views/ToSell.vue'
import PurchasesReport from '../views/PurchasesReport.vue'
import SalesReport from '../views/SalesReport.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/books/to-buy',
        component: ToBuy
      },
      {
        path: '/books/to-sell',
        component: ToSell
      },
      {
        path: '/books/purchases-report',
        component: PurchasesReport
      },
      {
        path: '/books/sales-report',
        component: SalesReport
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
