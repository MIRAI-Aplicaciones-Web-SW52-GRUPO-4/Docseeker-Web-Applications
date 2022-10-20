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
      component: () => import('../views/patients/LogInView.vue')
    },
    {
      path: '/changePassword',
      name: 'changepassword',
      component: () => import('../views/patients/ChangePasswordView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/patients/RegisterView.vue')
    },
    {
      path: '/dashBoard',
      name: 'dashboard',
      component: () => import('../views/patients/DashBoardView.vue')
    },
    {
      path: '/searchDoctor',
      name: 'searchDoctor',
      component: () => import('../views/patients/SearchDoctorView.vue')
    }
  ]
})

export default router