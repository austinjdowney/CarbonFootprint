import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: loadPage('LoginPage')
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: loadPage('HomePage')
  },
  {
    path: '/aboutpage',
    name: 'AboutPage',
    component: loadPage('AboutPage')
  },
  {
    path: '/profilepage/:id',
    name: 'ProfilePage',
    component: loadPage('ProfilePage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
