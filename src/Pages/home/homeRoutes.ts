import type { RouteRecordRaw } from "vue-router"
import HomePage from "./Home.vue"

export const homeRoutes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    alias: "/home",
    component: HomePage,
    meta: { requireAuth: true },
  },
]
