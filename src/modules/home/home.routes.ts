import type { RouteRecordRaw } from "vue-router"
import HomePage from "./HomePage.vue"

export const homeRoutes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    alias: "/home",
    component: HomePage,
    meta: { layoutName: "DefaultLayout" },
  },
]
