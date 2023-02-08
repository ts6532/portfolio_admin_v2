import type { RouteRecordRaw } from "vue-router"

const UsersPage = () => import("./UsersPage.vue")

export const usersRoutes: RouteRecordRaw[] = [
  {
    name: "users",
    path: "/users",
    component: UsersPage,
    meta: { layoutName: "DefaultLayout", requireAuth: true },
  },
]
