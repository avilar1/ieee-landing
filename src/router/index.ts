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
          name: 'ScheduleEmbedded',
          component: () => import('@/views/program/Schedule.vue'),
          meta: { embeddedInProgram: true },
        },
        {
          path: 'speakers',
          name: 'SpeakersEmbedded',
          component: () => import('@/views/program/Speakers.vue'),
          meta: { embeddedInProgram: true },
        },
        {
          path: 'multicultural-night',
          name: 'MulticulturalNightEmbedded',
          component: () => import('@/views/program/MultiCulturalNight.vue'),
          meta: { embeddedInProgram: true },
        },
        {
          path: 'poster-session',
          name: 'PosterSessionEmbedded',
          component: () => import('@/views/program/PosterSession.vue'),
          meta: { embeddedInProgram: true },
        },
      ],
    },
    // Rotas standalone (fora de Program)
    {
      path: '/schedule',
      name: 'Schedule',
      component: () => import('@/views/program/Schedule.vue'),
      meta: { embeddedInProgram: false },
    },
    {
      path: '/speakers',
      name: 'Speakers',
      component: () => import('@/views/program/Speakers.vue'),
      meta: { embeddedInProgram: false },
    },
    {
      path: '/multicultural-night',
      name: 'MulticulturalNight',
      component: () => import('@/views/program/MultiCulturalNight.vue'),
      meta: { embeddedInProgram: false },
    },
    {
      path: '/poster-session',
      name: 'PosterSession',
      component: () => import('@/views/program/PosterSession.vue'),
      meta: { embeddedInProgram: false },
    },
    {
      path: '/venue',
      name: 'Venue',
      component: () => import('@/views/Venue.vue'),
      children: [
        {
          path: 'congress-venue',
          name: 'CongressVenueEmbedded',
          component: () => import('@/views/venue/CongressVenue.vue'),
          meta: { embeddedInVenue: true },
        },
        {
          path: 'visa-information',
          name: 'VisaInformationEmbedded',
          component: () => import('@/views/venue/VisaInformation.vue'),
          meta: { embeddedInVenue: true },
        },
        {
          path: 'about-rio',
          name: 'AboutRioEmbedded',
          component: () => import('@/views/venue/AboutRio.vue'),
          meta: { embeddedInVenue: true },
        },
      ],
    },
    // Rotas standalone (fora de Venue)
    {
      path: '/congress-venue',
      name: 'CongressVenue',
      component: () => import('@/views/venue/CongressVenue.vue'),
      meta: { embeddedInVenue: false },
    },
    {
      path: '/visa-information',
      name: 'VisaInformation',
      component: () => import('@/views/venue/VisaInformation.vue'),
      meta: { embeddedInVenue: false },
    },
    {
      path: '/about-rio',
      name: 'AboutRio',
      component: () => import('@/views/venue/AboutRio.vue'),
      meta: { embeddedInVenue: false },
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
