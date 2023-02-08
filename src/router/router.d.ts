export {}

import type { layoutName } from "@modules/layout/layoutName"

import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    // is optional
    layoutName?: layoutName

    requireAuth?: boolean
  }
}
