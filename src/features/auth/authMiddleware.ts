import { useAuthStore } from "entities/auth"
import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router"

export const getMe = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext,
) => {
  const store = useAuthStore()

  if (!store.user) {
    try {
      await store.getMe()
      return next()
    } catch (error) {
      return next()
    }
  }

  return next()
}

export const checkAuth = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext,
) => {
  const store = useAuthStore()

  if (to.name === "login" && store.isAuth) return next({ name: "home" })
  if (to.meta.requireAuth && !store.isAuth) return next({ name: "login" })
  return next()
}
