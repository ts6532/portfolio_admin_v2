import { checkAuth, getMe } from "features/auth"
import { routes } from "pages"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: "smooth" }
    }
  },

  routes,
})

router.beforeEach(getMe)
router.beforeEach(checkAuth)

export default router
