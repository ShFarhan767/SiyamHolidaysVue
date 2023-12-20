import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: () => import('../views/HotelView.vue')
    },
    {
      path: '/package-tour',
      name: 'package',
      component: () => import('../views/PackageView.vue')
    },
    {
      path: '/activites',
      name: 'activites',
      component: () => import('../views/SightSeeingView.vue')
    },
    {
      path: '/flight',
      name: 'flight',
      component: () => import('../views/FlightView.vue')
    },
    {
      path: '/transportation',
      name: 'transportation',
      component: () => import('../views/TransportationView.vue')
    },
    {
      path: '/visa',
      name: 'visa',
      component: () => import('../views/VisaView.vue')
    }
  ]
})

export default router
