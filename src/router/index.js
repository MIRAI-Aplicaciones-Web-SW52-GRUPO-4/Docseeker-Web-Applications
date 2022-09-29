import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/logIn',
      name: 'login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/changePassword',
      name: 'changepassword',
      component: () => import('../views/ChangePasswordView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/dashBoard',
      name: 'dashboard',
      component: () => import('../views/DashBoardView.vue')
    },
    {
      path: '/searchDoctor',
      name: 'searchDoctor',
      component: () => import('../views/SearchDoctorView.vue')
    }
  ]
})

export default router