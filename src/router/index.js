//import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../layouts/DefaultLayout.vue'
import MemberView from '../layouts/MemberLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/',
    children: [
      {
        path: '/',
        name: '',
        component: () => import('./../views/HomeView.vue'),
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('./../views/HomeView.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('./../components/Register.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('./../views/HomeView.vue'),
      },
      {
        path: '/:page/:tel',
        name: 'logintel',
        component: () => import('./../views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/member',
    name: 'Member',
    component: MemberView,
    redirect: '/member',
    children: [
      {
        path: '/member',
        name: '',
        component: () => import('../views/Member.vue'),
      },
      {
        path: '/member/games',
        name: '',
        component: () => import('../views/GamesList.vue'),
      },
      {
        path: '/member/games/:gametype',
        name: 'gametype',
        component: () => import('../views/GamesList.vue'),
      },
    ],
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../components/AppFooterMember.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
