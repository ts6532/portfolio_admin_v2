import { authMiddleware } from "entities/auth"
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

  routes: [],
})

router.beforeEach(authMiddleware.getMe)
router.beforeEach(authMiddleware.checkAuth)

export default router
