import type { RouteRecordRaw } from "vue-router"
import { UsersRoutesNames } from "@modules/users/usersRoutesNames"

const UsersPage = () => import("@modules/users/UsersPage.vue")
const UsersList = () => import("@modules/users/components/UsersList.vue")
const UserPage = () => import("@modules/users/components/UserPage.vue")

export const usersRoutes: RouteRecordRaw[] = [
  {
    name: UsersRoutesNames.USERS,
    path: "/users",
    component: UsersPage,
    meta: { layoutName: "DefaultLayout", requireAuth: true },
    children: [
      {
        path: "",
        name: UsersRoutesNames.USERS_LIST,
        component: UsersList,
        meta: { layoutName: "DefaultLayout", requireAuth: true },
      },
      {
        path: "create",
        name: UsersRoutesNames.USERS_CREATE,
        component: UserPage,
        meta: { layoutName: "DefaultLayout", requireAuth: true },
      },
      {
        path: ":_id",
        name: UsersRoutesNames.USERS_UPDATE,
        component: UserPage,
        meta: { layoutName: "DefaultLayout", requireAuth: true },
      },
    ],
  },
]
