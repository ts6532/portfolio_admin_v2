export {}

import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    // is optional
    layoutName: LayoutName

    requireAuth?: boolean
  }
}
