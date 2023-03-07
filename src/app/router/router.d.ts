export {}

import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    layoutName?: LayoutName
    requireAuth?: boolean
  }
}
