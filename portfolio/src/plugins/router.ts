import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../components/pages/Home.vue'
import Experience from '../components/pages/Experience.vue'
import Publications from '../components/pages/Publications.vue'
import People from '../components/pages/People.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/experience', component: Experience },
  { path: '/publications', component: Publications },
  { path: '/people', component: People },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})