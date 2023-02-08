import type { RouteRecordRaw } from "vue-router"

const ProjectsPage = () => import("./ProjectsPage.vue")

export const projectsRoutes: RouteRecordRaw[] = [
  {
    name: "projects",
    path: "/projects",
    component: ProjectsPage,
    meta: { layoutName: "DefaultLayout" },
  },
]
