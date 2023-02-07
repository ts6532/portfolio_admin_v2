import { homeRoutes } from "@/modules/home";
import { usersRoutes } from "@/modules/users";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [...homeRoutes, ...usersRoutes],
});

export default router;
