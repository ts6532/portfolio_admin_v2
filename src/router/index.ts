import { categoriesRoutes } from "@/modules/categories";
import { homeRoutes } from "@/modules/home";
import { projectsRoutes } from "@/modules/projects";
import { usersRoutes } from "@/modules/users";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...homeRoutes,
    ...usersRoutes,
    ...categoriesRoutes,
    ...projectsRoutes,
  ],
});

export default router;
