import type { RouteRecordRaw } from "vue-router";
import PreferencesPage from "./PreferencesPage.vue";

export const preferencesRoutes: RouteRecordRaw[] = [
  {
    name: "preferences",
    path: "/preferences",
    component: PreferencesPage,
    meta: { layoutName: "DefaultLayout" },
  },
];
