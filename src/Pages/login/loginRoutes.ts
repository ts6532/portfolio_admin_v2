import type { RouteRecordRaw } from "vue-router"
import LoginPage from "./Login.vue"

export const loginRoutes: RouteRecordRaw[] = [
  {
    name: "login",
    path: "/login",
    component: LoginPage,
    meta: {
      layoutName: "SimpleLayout",
      requireAuth: false,
      meta: { layoutName: "SimpleLayout", requireAuth: false },
    },
  },
]
