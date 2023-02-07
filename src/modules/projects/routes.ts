import type { RouteRecordRaw } from "vue-router";
import ProjectsPage from "./ProjectsPage.vue";

export const projectsRoutes: RouteRecordRaw[] = [
  {
    name: "projects",
    path: "/projects",
    component: ProjectsPage,
    meta: { layoutName: "DefaultLayout" },
  },
];
