import type { RouteRecordRaw } from "vue-router"
import HomePage from "./HomePage.vue"

export enum HomeRoutesNames {
  HOME = "home",
}
export const homeRoutes: RouteRecordRaw[] = [
  {
    name: HomeRoutesNames.HOME,
    path: "/",
    alias: "/home",
    component: HomePage,
    meta: { layoutName: "DefaultLayout" },
  },
]
