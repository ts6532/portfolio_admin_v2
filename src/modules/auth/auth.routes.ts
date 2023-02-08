import type { RouteRecordRaw } from "vue-router"

const LoginPage = () => import("@modules/auth/LoginPage.vue")
export const authRoutes: RouteRecordRaw[] = [
  {
    name: "login",
    path: "/login",
    component: LoginPage,
    meta: { layoutName: "SimpleLayout", requireAuth: false },
  },
]
