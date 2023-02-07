import type { RouteRecordRaw } from "vue-router";
import CategoriesPage from "./CategoriesPage.vue";

export const categoriesRoutes: RouteRecordRaw[] = [
  {
    name: "categories",
    path: "/categories",
    component: CategoriesPage,
    meta: { layoutName: "DefaultLayout" },
  },
];
