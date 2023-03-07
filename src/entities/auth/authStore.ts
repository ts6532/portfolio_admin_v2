import { defineStore } from "pinia"
import type { LoginDataDto } from "shared/api"
import { ref, computed } from "vue"
import { authService } from "./authService"

export const useAuthStore = defineStore("auth", () => {
  const user = ref<string | null>(null)
  const isAuth = ref(false)

  async function login(userForm: LoginDataDto) {
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

  return { user, isAuth, getMe }
})
