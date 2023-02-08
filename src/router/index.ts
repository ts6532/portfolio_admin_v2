import { categoriesRoutes } from "@/modules/categories";
import { homeRoutes } from "@/modules/home";
import { preferencesRoutes } from "@/modules/preferences";
import { projectsRoutes } from "@/modules/projects";
import { usersRoutes } from "@/modules/users";
import { createRouter, createWebHistory } from "vue-router";
import { checkAuth, getMe } from "@/router/midlewares";

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },

  routes: [
    ...homeRoutes,
    ...usersRoutes,
    ...categoriesRoutes,
    ...projectsRoutes,
    ...preferencesRoutes,
  ],
});

router.beforeEach(getMe)
router.beforeEach(checkAuth)

export default router;
