import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../components/pages/Home.vue'
import Experience from '../components/pages/Experience.vue'
import Publications from '../components/pages/Publications.vue'
import People from '../components/pages/People.vue'

const routes = [
  { path: '/', component: Home, meta: { title: '' } },
  { path: '/experience', component: Experience, meta: { title: 'Experience' } },
  { path: '/publications', component: Publications, meta: { title: 'Publications' } },
  { path: '/people', component: People, meta: { title: 'People' } },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach((to) => {
  const siteName = "Greg's Portfolio"

  if (to.query.modalType && to.query.modalId) {
    const modalTypeCapitalized = (to.query.modalType as string).charAt(0).toUpperCase() + to.query.modalType.slice(1)
    const modalIdCapitalized = (to.query.modalId as string).charAt(0).toUpperCase() + to.query.modalId.slice(1)
    document.title = `${modalTypeCapitalized} ${modalIdCapitalized} | ${siteName}`
  } else {
    document.title = to.meta.title
      ? `${to.meta.title} | ${siteName}`
      : siteName
  }
})