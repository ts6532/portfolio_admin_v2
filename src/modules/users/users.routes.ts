import type { RouteRecordRaw } from "vue-router"

const UsersPage = () => import("@modules/users/UsersPage.vue")
const UsersList = () => import("@modules/users/components/UsersList.vue")
const UserPage = () => import("@modules/users/components/UserPage.vue")

export const usersRoutes: RouteRecordRaw[] = [
  {
    name: "users",
    path: "/users",
    component: UsersPage,
    meta: { layoutName: "DefaultLayout", requireAuth: true },
    children: [
      {
        path: "/",
        name: "users-list",
        component: UsersList,
        meta: { layoutName: "DefaultLayout", requireAuth: true },
      },
      {
        path: "create",
        name: "users-create",
        component: UserPage,
        meta: { layoutName: "DefaultLayout", requireAuth: true },
      },
      {
        path: ":_id",
        name: "users-update",
        component: UserPage,
        meta: { layoutName: "DefaultLayout", requireAuth: true },
      },
    ],
  },
]
