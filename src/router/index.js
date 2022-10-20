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


    /* PATIENTS */


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
    ,
    {
      path: '/searchDoctor/:id',
      name: 'doctor',
      component: () => import('../views/patients/DoctorView.vue')
    }
    ,
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/patients/NewsView.vue')
    }
    ,
    {
      path: '/news/:id',
      name: 'new',
      component: () => import('../views/patients/NewView.vue')
    }
    ,
    {
      path: '/prescriptions',
      name: 'prescriptions',
      component: () => import('../views/patients/PrescriptionsView.vue')
    }
    ,
    {
      path: '/prescriptions/:id',
      name: 'prescription',
      component: () => import('../views/patients/PrescriptionView.vue')
    }
    ,
    {
      path: '/myProfile',
      name: 'myProfile',
      component: () => import('../views/patients/MyProfileView.vue')
    }
    ,
    {
      path: '/personalInformation',
      name: 'personalInformation',
      component: () => import('../views/patients/PersonalInformationView.vue')
    }
    ,
    {
      path: '/appointmentCalendar/:id',
      name: 'appointmentCalendar',
      component: () => import('../views/patients/AppointmentCalendarView.vue')
    }
    ,
    {
      path: '/appointmentCalendar/:id/:date',
      name: 'appointmentHour',
      component: () => import('../views/patients/AppointmentBookingView.vue')
    }
    ,
    {
      path: '/appointmentCalendar/:id/:date/:hourId',
      name: 'payment',
      component: () => import('../views/patients/PaymentView.vue')
    }
    ,
    {
      path: "/medicalInformation",
      name: "medicalInformation",
      component: () => import('../views/patients/MedicalInformationView.vue')
    },
    {
      path: "/editMedicalInformation",
      name: "editMedicalInformation",
      component: () => import('../views/patients/EditMedicalInformationView.vue')
    },
    {
      path: '/reviews/:id',
      name: "doctorReviews",
      component: () => import('../views/patients/DoctorReviewsView.vue')
    },
    {
      path: '/newReview/:id',
      name: "newReview",
      component: () => import('../views/patients/NewReviewView.vue')
    },


    /* DOCTORS */


    {
      path: '/logInDoctor',
      name: 'logindoctor',
      component: () => import('../views/doctors/LogInView.vue')
    },
    {
      path: '/dashboardDoctor',
      name: 'dashboarddoctor',
      component: () => import('../views/doctors/DashBoardView.vue')
    },
    {
      path: '/newsDoctor',
      name: 'newsdoctor',
      component: () => import('../views/doctors/NewsView.vue')
    },
    {
      path: '/newsDoctor/:id',
      name: 'newdoctor',
      component: () => import('../views/doctors/NewView.vue')
    },
    {
      path: '/myProfileDoctor',
      name: 'myprofiledoctor',
      component: () => import('../views/doctors/MyProfileView.vue')
    },
    {
      path: '/personalInformationDoctor',
      name: 'personalInformationDoctor',
      component: () => import('../views/doctors/PersonalInformationView.vue')
    },
    {
      path: '/yourReviews',
      name: "yourReviews",
      component: () => import('../views/doctors/ReviewsView.vue')
    }
  ]
})

export default router