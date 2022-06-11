import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '../views/userProfile.vue'
import AboutView from "../views/AboutView.vue"
import AdminView from "../views/Admin.vue"
import store from '@/store'
import { users } from '../assets/js/user'
import {twoots} from '../assets/js/twoots'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about/:about_me',
    name: "AboutView",
    component: AboutView
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/Admin',
    name: "AdminView",
    component: AdminView,
    meta: {
      requiresAdmin: true
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Router Guards

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;
  const twoot =  store.state.User.twoot

  if (!user) {
    await store.dispatch('User/setUser', users[0])
  }
  if (!twoot) {
    await store.dispatch('User/postTwoot', twoots[0])
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: 'HomeView' })
  else next()
})

export default router
