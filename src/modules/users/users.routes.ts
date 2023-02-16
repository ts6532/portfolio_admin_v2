import type { RouteRecordRaw } from "vue-router"

const UsersPage = () => import("@modules/users/UsersPage.vue")
const UsersList = () => import("@modules/users/components/UsersList.vue")
const CreateUserPage = () =>
  import("@modules/users/components/CreateUserPage.vue")

const UpdateUserPage = () =>
  import("@modules/users/components/UpdateUserPage.vue")

export enum UsersRoutesNames {
  USERS = "users",

  USERS_LIST = "users-list",

  USERS_CREATE = "users-create",

  USERS_UPDATE = "users-update",
}

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
        component: CreateUserPage,
        meta: { layoutName: "DefaultLayout", requireAuth: true },
      },
      {
        path: ":_id",
        name: UsersRoutesNames.USERS_UPDATE,
        component: UpdateUserPage,
        meta: { layoutName: "DefaultLayout", requireAuth: true },
      },
    ],
  },
]
