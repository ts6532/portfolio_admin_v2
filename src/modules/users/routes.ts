import type { RouteRecordRaw } from "vue-router";
import UsersPage from "./UsersPage.vue";

export const usersRoutes: RouteRecordRaw[] = [
  {
    name: "users",
    path: "/users",
    component: UsersPage,
    meta: { layoutName: "DefaultLayout" },
  },
];
