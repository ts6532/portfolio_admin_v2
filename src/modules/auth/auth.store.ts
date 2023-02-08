import { ref } from "vue"
import { defineStore } from "pinia"
import { authService } from "@modules/auth/auth.service"
import type { AuthForm } from "@modules/auth/types/AuthForm"

export const useAuthStore = defineStore("auth", () => {
  const user = ref<string | null>(null)
  const isAuth = ref(false)

  async function login(userForm: AuthForm) {
    const response = await authService.login(userForm)

    if (response) {
      user.value = response.user
      isAuth.value = true
    }
  }

  async function getMe() {
    const response = await authService.getMe()

    if (response) {
      isAuth.value = response.isAuth
      user.value = response.user
    }
  }

  return { isAuth, user, getMe, login }
})
