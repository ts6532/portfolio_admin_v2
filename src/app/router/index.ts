import { createRouter, createWebHistory } from "vue-router"
import { checkAuth, getMe } from "./midlewares"

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: "smooth" }
    }
  },

  routes: [],
})

router.beforeEach(getMe)
router.beforeEach(checkAuth)

export default router
