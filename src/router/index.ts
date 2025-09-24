import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/program',
      name: 'Program',
      component: () => import('@/views/Program.vue'),
      children: [
        {
          path: 'schedule',
          name: 'Schedule',
          component: () => import('@/views/program/Schedule.vue'),
        },
        {
          path: 'speakers',
          name: 'Speakers',
          component: () => import('@/views/program/Speakers.vue'),
        },
        {
          path: 'multicultural-night',
          name: 'MulticulturalNight',
          component: () => import('@/views/program/MultiCulturalNight.vue'),
        },
        {
          path: 'poster-session',
          name: 'PosterSession',
          component: () => import('@/views/program/PosterSession.vue'),
        },
      ],
    },
    {
      path: '/venue',
      name: 'Venue',
      component: () => import('@/views/Venue.vue'),
      children: [
        {
          path: 'congress-venue',
          name: 'CongressVenue',
          component: () => import('@/views/venue/CongressVenue.vue'),
        },
        {
          path: 'visa-information',
          name: 'VisaInformation',
          component: () => import('@/views/venue/VisaInformation.vue'),
        },
        {
          path: 'about-rio',
          name: 'AboutRio',
          component: () => import('@/views/venue/AboutRio.vue'),
        },
      ],
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: () => import('@/views/Sponsors.vue'),
    },
    {
      path: '/travel-grant',
      name: 'TravelGrant',
      component: () => import('@/views/TravelGrant.vue'),
    },
    {
      path: '/apply-2027',
      name: 'Apply2027',
      component: () => import('@/views/Apply.vue'),
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@/views/Registration.vue'),
    },
  ],
})

export default router
